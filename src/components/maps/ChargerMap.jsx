import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, Circle, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocateFixed, Navigation, Battery } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import StationDetails from './StationDetails';
import StationSidebar from './StationSidebar';
import BookingModule from '../booking/BookingModule';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';

// Custom Marker Icon since default Leaflet markers require image URLs that Vite sometimes mangles
const customIcon = new L.DivIcon({
    className: 'custom-leaflet-marker',
    html: `<div class="w-8 h-8 bg-[#0a0a0a]/40 backdrop-blur-md rounded-full border-2 border-accent-green flex items-center justify-center shadow-[0_0_20px_rgba(0,230,150,0.6)]">
             <div class="w-4 h-4 bg-accent-green rounded-full animate-pulse shadow-[0_0_10px_#00E696]"></div>
           </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
});

const userIcon = new L.DivIcon({
    className: 'user-leaflet-marker',
    html: `<div class="w-6 h-6 bg-white rounded-full border-4 border-accent-green shadow-xl animate-pulse"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

function LocationMarker({ userLocation, setUserLocation }) {
    const map = useMap();

    useEffect(() => {
        if (userLocation) {
            map.flyTo(userLocation, 12);
        }
    }, [userLocation, map]);

    return userLocation === null ? null : (
        <>
            <Marker position={userLocation} icon={userIcon} />
            <Circle
                center={userLocation}
                radius={150000} // 150km in meters
                pathOptions={{ fillColor: '#00E696', fillOpacity: 0.1, color: '#00E696', weight: 1 }}
            />
        </>
    );
}

function MapEventsHelper({ setSelectedCharger }) {
    useMapEvents({
        click() {
            setSelectedCharger(null);
        },
    });
    return null;
}

function MapController({ selectedStation }) {
    const map = useMap();
    useEffect(() => {
        if (selectedStation) {
            map.flyTo([selectedStation.lat, selectedStation.lng], 14, {
                duration: 1.5
            });
        }
    }, [selectedStation, map]);
    return null;
}

const chargers = [
    {
        id: 1,
        name: "Ambience Mall Hub",
        lat: 28.5036,
        lng: 77.0970,
        speed: "180kW",
        status: "Available",
        connectors: [
            { id: 1, type: 'CCS2', power: '60kW', status: 'Available', price: '₹18.5/unit' },
            { id: 2, type: 'CCS2', power: '120kW', status: 'In Use', price: '₹22.0/unit' },
        ]
    },
    {
        id: 2,
        name: "DLF CyberHub Point",
        lat: 28.4950,
        lng: 77.0878,
        speed: "60kW",
        status: "Busy",
        connectors: [
            { id: 1, type: 'CCS2', power: '60kW', status: 'Busy', price: '₹18.5/unit' },
        ]
    },
    {
        id: 3,
        name: "Connaught Place Grid",
        lat: 28.6328,
        lng: 77.2197,
        speed: "120kW",
        status: "Available",
        connectors: [
            { id: 1, type: 'CCS2', power: '60kW', status: 'Available', price: '₹18.5/unit' },
            { id: 2, type: 'CCS2', power: '120kW', status: 'In Use', price: '₹22.0/unit' },
            { id: 3, type: 'Type 2', power: '22kW', status: 'Available', price: '₹12.0/unit' },
        ]
    },
    {
        id: 5,
        name: "Okhla Industrial Estate",
        lat: 28.5410,
        lng: 77.2785,
        speed: "180kW",
        status: "Available",
        connectors: [
            { id: 1, type: 'CCS2', power: '180kW', status: 'Available', price: '₹25.0/unit' },
        ]
    },
];

// ... (LocationMarker and MapEventsHelper remain same)

const ChargerMap = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedCharger, setSelectedCharger] = useState(null);
    const [isDark, setIsDark] = useState(false);

    const { user, setRedirectAfterLogin } = useAuth();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [bookingSession, setBookingSession] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Deep Linking Effect
    useEffect(() => {
        const bookingId = searchParams.get('booking');
        const connId = searchParams.get('conn');

        if (bookingId) {
            const charger = chargers.find(c => c.id === parseInt(bookingId));
            if (charger) {
                setSelectedCharger(charger);

                if (connId) {
                    const connector = charger.connectors.find(cn => cn.id === parseInt(connId));
                    if (connector && connector.status === 'Available') {
                        // Small delay to ensure UI is ready
                        setTimeout(() => {
                            handleBookingInitiation(connector, charger);
                        }, 500);
                    }
                }
            }
        }
    }, [searchParams]);

    const handleBookingInitiation = (connector, chargerOverride = null) => {
        const targetCharger = chargerOverride || selectedCharger;
        if (!targetCharger) return;

        if (!user) {
            setRedirectAfterLogin(`/map?booking=${targetCharger.id}&conn=${connector.id}`);
            navigate('/login');
            return;
        }

        setBookingSession({ station: targetCharger, connector });
    };

    const confirmBooking = (details) => {
        console.log('Final Booking Confirmed:', details);
        setTimeout(() => {
            setBookingSession(null);
            setSelectedCharger(null);
            navigate('/session', { state: { session: details } });
        }, 1500);
    };

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains('dark'));
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDark(document.documentElement.classList.contains('dark'));
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    const findNearest = () => {
        if (!navigator.geolocation) return alert("Geolocation not supported");
        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setUserLocation([latitude, longitude]);
        }, () => {
            alert("Unable to retrieve your location");
        });
    };

    const filteredChargers = chargers.filter(charger =>
        charger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        charger.speed.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`relative w-full h-full flex flex-col lg:flex-row ${isDark ? 'bg-[#0a0a0a]' : 'bg-[#f8f9fa]'} transition-colors duration-500 overflow-hidden`}>
            {/* Desktop Sidebar with Typography Wrapper */}
            <div className={`hidden lg:block sidebar-content h-full shrink-0 border-r ${isDark ? 'border-white/5' : 'border-slate-100'}`} style={{ width: '360px' }}>
                <StationSidebar
                    stations={filteredChargers}
                    onSelectStation={setSelectedCharger}
                    selectedStation={selectedCharger}
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    userLocation={userLocation}
                />
            </div>

            <div className="relative flex-1 w-full h-full">
                <div className="absolute inset-0 z-0">
                    <MapContainer
                        center={[28.6139, 77.2090]}
                        zoom={11}
                        style={{ height: '100%', width: '100%' }}
                        zoomControl={false}
                    >
                        <TileLayer
                            key={isDark ? 'dark' : 'light'}
                            url={`https://{s}.basemaps.cartocdn.com/${isDark ? 'dark_all' : 'light_all'}/{z}/{x}/{y}{r}.png`}
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        />

                        {filteredChargers.map(charger => (
                            <Marker
                                key={charger.id}
                                position={[charger.lat, charger.lng]}
                                icon={customIcon}
                                eventHandlers={{
                                    click: () => {
                                        setSelectedCharger(charger);
                                    }
                                }}
                            />
                        ))}

                        <LocationMarker userLocation={userLocation} setUserLocation={setUserLocation} />
                        <MapEventsHelper setSelectedCharger={setSelectedCharger} />
                        <MapController selectedStation={selectedCharger} />
                    </MapContainer>
                </div>

                {isDark && (
                    <>
                        <div className="absolute inset-0 pointer-events-none z-[400] bg-[radial-gradient(circle_at_center,transparent_30%,#0a0a0a_100%)]"></div>
                        <div className="absolute inset-0 pointer-events-none z-[400] opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
                    </>
                )}

                <div className="absolute bottom-24 lg:bottom-12 left-6 md:left-10 z-[1000]">
                    <button
                        onClick={findNearest}
                        className="p-4 bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all text-slate-900 dark:text-white"
                        title="Find Nearest"
                    >
                        <LocateFixed size={20} className="text-accent-green" />
                    </button>
                </div>

                <AnimatePresence>
                    {selectedCharger && (
                        <StationDetails
                            station={selectedCharger}
                            onClose={() => setSelectedCharger(null)}
                            onBook={handleBookingInitiation}
                        />
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {bookingSession && (
                        <BookingModule
                            station={bookingSession.station}
                            connector={bookingSession.connector}
                            onClose={() => setBookingSession(null)}
                            onConfirm={confirmBooking}
                        />
                    )}
                </AnimatePresence>

                {userLocation && (
                    <div className="absolute top-8 right-10 z-[1000] hidden lg:block">
                        <div className="glass-morphic px-5 py-3 rounded-2xl flex items-center gap-4 border-white/10">
                            <div className="w-10 h-10 bg-accent-green/20 rounded-xl flex items-center justify-center">
                                <Battery size={20} className="text-accent-green" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Estimated Range</p>
                                <p className="text-sm font-black text-accent-green">150 KM <span className="text-[9px] text-slate-400 font-bold ml-1 uppercase">Radius</span></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChargerMap;

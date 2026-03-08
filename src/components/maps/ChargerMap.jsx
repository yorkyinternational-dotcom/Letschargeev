import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, Circle, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocateFixed, Navigation, Battery } from 'lucide-react';

// Custom Marker Icon since default Leaflet markers require image URLs that Vite sometimes mangles
const customIcon = new L.DivIcon({
    className: 'custom-leaflet-marker',
    html: `<div class="w-8 h-8 bg-black rounded-full border-2 border-accent-green flex items-center justify-center shadow-[0_0_15px_rgba(0,230,150,0.5)]">
             <div class="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
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

const chargers = [
    { id: 1, name: "Ambience Mall Hub", lat: 28.5036, lng: 77.0970, speed: "180kW", status: "Available" },
    { id: 2, name: "DLF CyberHub Point", lat: 28.4950, lng: 77.0878, speed: "60kW", status: "Busy" },
    { id: 3, name: "Connaught Place Grid", lat: 28.6328, lng: 77.2197, speed: "120kW", status: "Available" },
    { id: 5, name: "Okhla Industrial Estate", lat: 28.5410, lng: 77.2785, speed: "180kW", status: "Available" },
];

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

const ChargerMap = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [selectedCharger, setSelectedCharger] = useState(null);

    const findNearest = () => {
        if (!navigator.geolocation) return alert("Geolocation not supported");

        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setUserLocation([latitude, longitude]);
        }, () => {
            alert("Unable to retrieve your location");
        });
    };

    return (
        <div className="relative w-full h-full min-h-[600px] md:min-h-[800px] bg-[#111]">
            <div className="absolute inset-0 z-0">
                <MapContainer
                    center={[28.6139, 77.2090]}
                    zoom={11}
                    style={{ height: '100%', width: '100%' }}
                    zoomControl={false}
                >
                    {/* Dark Mode CartoDB Map Tiles (Free, No Token Required) */}
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />

                    {chargers.map(charger => (
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
                </MapContainer>
            </div>

            {/* Find Nearest Button */}
            <div className="absolute bottom-24 md:bottom-10 left-6 md:left-10 z-[1000]">
                <button
                    onClick={findNearest}
                    className="btn-professional-primary !px-6 !py-4 flex items-center gap-3 shadow-2xl scale-110"
                >
                    <LocateFixed size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Find Nearest Charger</span>
                </button>
            </div>

            {/* Float Info Card (Ola/Uber Style) */}
            {selectedCharger && (
                <div className="absolute top-10 left-5 right-5 md:left-10 md:right-auto z-[1000] w-auto md:w-full max-w-sm mx-auto md:mx-0">
                    <div className="glass-panel p-8 rounded-3xl border-accent-green/30 animate-slide-up" style={{ backgroundColor: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(16px)' }}>
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-[10px] font-black text-accent-green uppercase tracking-[0.3em] mb-2">Network Hub</p>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{selectedCharger.name}</h3>
                            </div>
                            <button onClick={() => setSelectedCharger(null)} className="text-white/20 hover:text-white">✕</button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</p>
                                <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${selectedCharger.status === 'Available' ? 'bg-accent-green shadow-[0_0_8px_#00E696]' : 'bg-accent-yellow'}`}></div>
                                    <span className="text-xs font-bold text-white uppercase">{selectedCharger.status}</span>
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mb-1">Peak Speed</p>
                                <div className="flex items-center gap-2 text-white">
                                    <Navigation size={12} className="text-accent-green" />
                                    <span className="text-xs font-bold uppercase">{selectedCharger.speed}</span>
                                </div>
                            </div>
                        </div>

                        <button className="btn-professional-primary w-full !py-4 flex items-center justify-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-widest">Start Rapid Charge</span>
                        </button>
                    </div>
                </div>
            )}

            {/* EV Range Badge */}
            {userLocation && (
                <div className="absolute top-10 right-20 z-[1000]">
                    <div className="glass-morphic px-4 py-2 rounded-full flex items-center gap-2 border-accent-green/40 bg-black/50 backdrop-blur-md">
                        <Battery size={14} className="text-accent-green" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Range: 150 KM</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChargerMap;

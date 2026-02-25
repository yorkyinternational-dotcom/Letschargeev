import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react';

// Fix for default marker icon in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const chargers = [
    { id: 1, name: "Smart Hub - Noida", lat: 28.5355, lng: 77.3910, status: "Available", type: "DC Fast" },
    { id: 2, name: "Smart Point - Delhi", lat: 28.6139, lng: 77.2090, status: "Busy", type: "DC Fast" },
    { id: 3, name: "Smart Grid - Gurgaon", lat: 28.4595, lng: 77.0266, status: "Available", type: "AC Type 2" },
];

const MapSection = () => {
    return (
        <section id="locate" className="py-24 md:py-40 bg-primary-surface dark:bg-primary transition-colors duration-300 relative overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div>
                        <span className="label-caps !text-accent-green !mb-6">Network Locator</span>
                        <h2 className="max-w-3xl text-primary-light dark:text-white font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]">
                            UBIQUITOUS <br />
                            <span className="text-accent-green">GRID.</span>
                        </h2>
                    </div>
                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium md:max-w-xs leading-relaxed">
                        Live Tracking. Smart Sync.
                        India's most technically advanced charging locator.
                    </p>
                </div>

                <div className="h-[500px] md:h-[700px] w-full rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative">
                    <MapContainer center={[28.5355, 77.3910]} zoom={11} scrollWheelZoom={false} className="h-full w-full grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {chargers.map(charger => (
                            <Marker key={charger.id} position={[charger.lat, charger.lng]}>
                                <Popup>
                                    <div className="p-4 min-w-[240px] bg-white dark:bg-slate-900">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-accent-green mb-2">SMART_POINT_{charger.id}</p>
                                        <h3 className="font-black text-slate-900 dark:text-white text-xl mb-4 uppercase tracking-tight">{charger.name}</h3>
                                        <div className="flex items-center gap-2 mb-6 border-l-2 border-accent-green pl-3">
                                            <div className={`w-2 h-2 rounded-full ${charger.status === 'Available' ? 'bg-accent-green animate-pulse' : 'bg-red-500'}`}></div>
                                            <span className="text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400">{charger.status}</span>
                                        </div>
                                        <button className="btn-professional-primary w-full !py-3 !text-[10px] uppercase">Navigate Now</button>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </section>
    );
};

export default MapSection;

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
        <section id="locate" className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div>
                        <span className="label-caps !text-eco glow-green !mb-6">Network Locator</span>
                        <h2 className="max-w-3xl text-primary font-black text-6xl md:text-8xl uppercase italic tracking-tighter leading-[0.8]">
                            FIND THE <br />
                            <span className="text-gradient">NEAREST HUB.</span>
                        </h2>
                    </div>
                    <p className="text-xl text-slate-400 font-black tracking-tighter uppercase italic md:max-w-xs leading-none">
                        Live Tracking. <br />
                        Smart Sync. <br />
                        <span className="text-primary italic">Precision Grid.</span>
                    </p>
                </div>

                <div className="h-[500px] md:h-[700px] w-full rounded-[4rem] overflow-hidden border-4 border-slate-50 shadow-2xl relative">
                    <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none"></div>
                    <MapContainer center={[28.5355, 77.3910]} zoom={10} scrollWheelZoom={false} className="h-full w-full grayscale contrast-125">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {chargers.map(charger => (
                            <Marker key={charger.id} position={[charger.lat, charger.lng]}>
                                <Popup>
                                    <div className="p-6 min-w-[220px] bg-white">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-eco mb-4 italic">SMART_POINT_{charger.id}</p>
                                        <h3 className="font-black text-primary text-3xl mb-4 italic tracking-tighter uppercase leading-none">{charger.name}</h3>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-3 h-3 rounded-full glow-green ${charger.status === 'Available' ? 'bg-eco pulse' : 'bg-red-500'}`}></div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary italic">{charger.status}</span>
                                        </div>
                                        <button className="btn-primary w-full !py-4 !text-[10px] !rounded-xl uppercase">OPEN NAVIGATION</button>
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

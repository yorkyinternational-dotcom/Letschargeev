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
        <section id="locate" className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24">
                    <span className="label-caps">Network Locator</span>
                    <h2 className="mb-12">FIND THE <br /><span className="text-accent italic">NEAREST HUB.</span></h2>
                    <p className="text-xl max-w-2xl">Real-time status tracking across India's most intelligent EV charging grid.</p>
                </div>

                <div className="h-[600px] w-full rounded-[2rem] overflow-hidden border border-slate-200">
                    <MapContainer center={[28.5355, 77.3910]} zoom={10} scrollWheelZoom={false} className="h-full w-full">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {chargers.map(charger => (
                            <Marker key={charger.id} position={[charger.lat, charger.lng]}>
                                <Popup>
                                    <div className="p-4 min-w-[180px]">
                                        <h3 className="font-black text-primary text-xl mb-2">{charger.name}</h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className={`w-2 h-2 rounded-full ${charger.status === 'Available' ? 'bg-accent' : 'bg-red-500'}`}></span>
                                            <span className="text-[10px] font-black uppercase tracking-widest">{charger.status}</span>
                                        </div>
                                        <button className="w-full btn-primary !py-3 !text-[9px]">DIRECTIONS</button>
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

import React from 'react';
import { Search, MapPin, Zap, Navigation, ChevronRight, SlidersHorizontal } from 'lucide-react';

const StationSidebar = ({ stations, onSelectStation, selectedStation, searchTerm, onSearchChange, userLocation }) => {
    // Helper to calculate distance in km
    const getDistance = (lat1, lon1, lat2, lon2) => {
        if (!lat1 || !lon1 || !lat2 || !lon2) return null;
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c; // Distance in km
        return d.toFixed(1);
    };

    const handleOpenInMaps = () => {
        const baseUrl = 'https://www.google.com/maps/search/?api=1&query=';
        if (selectedStation) {
            window.open(`${baseUrl}${selectedStation.lat},${selectedStation.lng}`, '_blank');
        } else {
            window.open('https://www.google.com/maps', '_blank');
        }
    };

    return (
        <div className="hidden lg:flex flex-col h-full bg-white dark:bg-[#020605] w-full overflow-hidden transition-colors duration-500">
            {/* Sidebar Header */}
            <div className="p-4 border-b border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent-green">Locations</h2>
                    <button className="p-2 text-slate-400 hover:text-accent-green transition-colors">
                        <SlidersHorizontal size={16} />
                    </button>
                </div>

                <div className="space-y-0.5">
                    <h1 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Discover Stations</h1>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">Nearby available charging points</p>
                </div>

                {/* Search Bar */}
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-accent-green transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search location, station name..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-accent-green/50 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 transition-all outline-none shadow-sm"
                    />
                </div>
            </div>

            {/* Station List */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-2 custom-scrollbar">
                {stations.length > 0 ? (
                    stations.map((station) => {
                        const distance = userLocation
                            ? getDistance(userLocation[0], userLocation[1], station.lat, station.lng)
                            : (station.id * 1.2).toFixed(1); // Semi-random fallback for demo

                        return (
                            <button
                                key={station.id}
                                onClick={() => onSelectStation(station)}
                                className={`w-full p-3 rounded-2xl border-2 transition-all text-left flex items-start gap-3 hover:shadow-xl hover:shadow-black/5 ${selectedStation?.id === station.id
                                    ? 'bg-accent-green/5 border-accent-green/40 shadow-lg shadow-accent-green/5'
                                    : 'bg-white dark:bg-white/5 border-transparent hover:border-slate-100 dark:hover:border-white/5'
                                    }`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${station.status === 'Available' ? 'bg-accent-green/20 text-accent-green' : 'bg-slate-200 dark:bg-white/10 text-slate-400'
                                    }`}>
                                    <Zap size={18} fill={station.status === 'Available' ? 'currentColor' : 'none'} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight truncate pr-2">{station.name}</h3>
                                        <span className="text-[9px] font-bold text-slate-400 whitespace-nowrap">{distance}km</span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-medium mb-3 truncate">Connaught Place, New Delhi</p>

                                    <div className="flex items-center gap-3">
                                        <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${station.status === 'Available' ? 'bg-accent-green/10 text-accent-green' : 'bg-slate-100 dark:bg-white/10 text-slate-400'
                                            }`}>
                                            {station.status}
                                        </span>
                                        <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">
                                            {station.type} • {station.power}
                                        </span>
                                    </div>
                                </div>

                                <ChevronRight size={14} className={`mt-1 transition-transform ${selectedStation?.id === station.id ? 'text-accent-green translate-x-1' : 'text-slate-300'}`} />
                            </button>
                        );
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center px-10">
                        <div className="w-16 h-16 bg-slate-50 dark:bg-white/5 rounded-full flex items-center justify-center text-slate-300 mb-4">
                            <MapPin size={32} />
                        </div>
                        <p className="text-sm font-bold text-slate-500">No stations found matching your search.</p>
                    </div>
                )}
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 bg-slate-50 dark:bg-white/5 border-t border-slate-200 dark:border-white/10">
                <button
                    onClick={handleOpenInMaps}
                    className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-[9px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10"
                >
                    <Navigation size={14} />
                    {selectedStation ? 'Directions to Station' : 'Open in Google Maps'}
                </button>
            </div>
        </div>
    );
};

export default StationSidebar;

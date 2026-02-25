import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, Globe, Shield, CreditCard, Smartphone, ArrowUpCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-black text-white pt-32 pb-16 border-t border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent-green/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-2">
            <Link bto="/" className="mb-10 block">
              <Logo withText={true} theme="dark" />
            </Link>
            <p className="text-white/40 text-lg max-w-sm mb-10 leading-relaxed font-medium">
              Architecting the resilient infrastructure for India's zero-emission future.
              Technical authority in smart EV charging ecosystems.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'FB' },
                { icon: Twitter, label: 'TW' },
                { icon: Linkedin, label: 'LI' },
                { icon: Instagram, label: 'IG' }
              ].map((social, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent-green hover:text-primary transition-all group border border-white/5 hover:border-accent-green">
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-accent-green mb-10">/ SITE_MAP</p>
            <ul className="space-y-4">
              {['Solutions', 'Hardware', 'Savings', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={`/#${link.toLowerCase()}`} className="text-white/50 hover:text-white text-lg font-bold tracking-tight transition-all hover:translate-x-2 block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-accent-yellow mb-10">/ CONNECT</p>
            <div className="space-y-6">
              <p className="text-3xl font-black text-white leading-none hover:text-accent-green transition-colors cursor-pointer tracking-tighter uppercase">+91 99992 65790</p>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">hello@lcev.in</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-accent-green"></div>
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
              © {currentYear} LCEV SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY</span>
            <span className="hover:text-white transition-colors cursor-pointer">TERMS</span>
            <span className="hover:text-white transition-colors cursor-pointer">SYSTEM STATUS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
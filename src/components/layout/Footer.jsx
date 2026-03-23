import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, Globe, Shield, CreditCard, Smartphone, ArrowUpCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-black text-white pt-16 md:pt-24 pb-24 lg:pb-16 border-t border-white/5 relative overflow-hidden transition-colors duration-500">
      {/* Precision Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}>
      </div>
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent-green/5 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-12 md:mb-16">
          <div className="lg:col-span-4 lg:pr-8">
            <Link to="/" className="mb-12 block">
              <Logo withText={true} theme="dark" className="h-16 md:h-20" />
            </Link>
            <p className="text-white/40 text-xl max-w-md mb-12 leading-relaxed font-medium">
              Architecting the resilient infrastructure for India's institutional energy transition.
              Technical authority in industrial-grade EV charging ecosystems.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent-green hover:text-primary transition-all group border border-white/10">
                  <Icon size={20} className="text-white/60 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">NAVIGATION</p>
            <ul className="space-y-3">
              {['Products', 'Solutions', 'Software', 'Support'].map(link => (
                <li key={link}>
                  <Link to={`/#${link.toLowerCase()}`} className="text-white/40 hover:text-white text-sm font-medium tracking-wide transition-all hover:translate-x-2 block py-1">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">LEGAL</p>
            <ul className="space-y-3">
              {['Privacy', 'Technical', 'Compliance', 'Ethics'].map(link => (
                <li key={link}>
                  <Link to={`/legal`} className="text-white/40 hover:text-white text-sm font-medium tracking-wide transition-all hover:translate-x-2 block py-1">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">TECHNICAL SUPPORT</p>
            <div className="space-y-6">
              <a
                href="https://wa.me/919999165790?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl xl:text-4xl font-black text-white hover:text-accent-green transition-colors cursor-pointer tracking-tight block"
              >
                +91-9999165790
              </a>
              {/* Status Indicator */}
              <div className="flex items-center gap-3">
                <div className="relative flex h-2 w-2 mt-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
                </div>
                <a href="mailto:support@lcev.in" className="text-white/60 hover:text-white text-sm font-medium tracking-wide transition-colors">support@lcev.in</a>
              </div>
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Available <span className="text-white/40">24/7/365</span> via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
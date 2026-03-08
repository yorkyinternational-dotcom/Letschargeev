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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <Link to="/" className="mb-12 block">
              <Logo withText={false} theme="dark" className="h-16 md:h-20" />
            </Link>
            <p className="text-white/40 text-xl max-w-md mb-12 leading-relaxed font-medium">
              Architecting the resilient infrastructure for India's zero-emission future.
              Technical authority in industrial-grade EV charging ecosystems.
            </p>
            <div className="flex gap-6">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent-green hover:text-primary transition-all group border border-white/10">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">NAVIGATION</p>
            <ul className="space-y-6">
              {['Products', 'Solutions', 'Software', 'Support'].map(link => (
                <li key={link}>
                  <Link to={`/#${link.toLowerCase()}`} className="text-white/40 hover:text-white text-sm font-medium tracking-wide transition-all hover:translate-x-3 block py-2">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">LEGAL</p>
            <ul className="space-y-6">
              {['Privacy', 'Technical', 'Compliance', 'Ethics'].map(link => (
                <li key={link}>
                  <Link to={`/legal`} className="text-white/40 hover:text-white text-sm font-medium tracking-wide transition-all hover:translate-x-3 block py-2">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-8">TECHNICAL SUPPORT</p>
            <div className="space-y-8">
              <a
                href="https://wa.me/919650979197?text=Hello%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-bold text-white leading-none hover:text-accent-green transition-colors cursor-pointer tracking-tight"
              >
                +91 96509 79197
              </a>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">support.core@lcev.in</p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Available 24/7/365 via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
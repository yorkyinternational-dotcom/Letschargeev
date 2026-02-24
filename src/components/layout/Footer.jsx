import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, Globe, Shield, CreditCard, Smartphone, ArrowUpCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-40 pb-20 border-t border-white/5 relative overflow-hidden">
      {/* Background kinetic overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00E696 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-12 block scale-125 origin-left">
              <Logo withText={true} />
            </Link>
            <p className="text-white/30 text-xl max-w-sm mb-12 font-black italic uppercase tracking-tighter leading-none">
              Architecting the <span className="text-white">infrastructure</span> for India's electric <span className="text-eco">revolution.</span>
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: 'FB' },
                { icon: Twitter, label: 'TW' },
                { icon: Linkedin, label: 'LI' },
                { icon: Instagram, label: 'IG' }
              ].map((social, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-eco hover:text-primary transition-all group border border-white/5 hover:border-eco">
                  <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-eco mb-12 italic">/ SITE_MAP</p>
            <ul className="space-y-6">
              {['Solutions', 'Hardware', 'Savings', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={`/#${link.toLowerCase()}`} className="text-white/40 hover:text-eco text-2xl font-black italic uppercase tracking-tighter transition-all hover:translate-x-3 block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-12 italic">/ CONNECT</p>
            <div className="space-y-8">
              <p className="text-4xl font-black italic tracking-tighter text-white leading-none hover:text-accent transition-colors cursor-pointer">+91_99992 65790</p>
              <p className="text-white/40 text-[11px] font-black uppercase tracking-[0.3em] italic">HELLO@LCEV.IN</p>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-6">
            <div className="w-12 h-1 bg-eco rounded-full glow-green"></div>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] italic">
              © {currentYear} LCEV_SYSTEMS. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex gap-12 text-[10px] font-black text-white/20 uppercase tracking-[0.4em] italic">
            <span className="hover:text-white transition-colors cursor-pointer">PRIVACY</span>
            <span className="hover:text-white transition-colors cursor-pointer">TERMS</span>
            <span className="hover:text-white transition-colors cursor-pointer">SYSTEM_STATUS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, Globe, Shield, CreditCard, Smartphone, ArrowUpCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-8 block">
              <Logo withText={true} />
            </Link>
            <p className="text-white/40 max-w-sm mb-10">Architecting the infrastructure for India's electric revolution with surgical precision.</p>
            <div className="flex gap-4">
              {['FB', 'TW', 'LI', 'IG'].map(social => (
                <span key={social} className="text-[10px] font-black hover:text-eco cursor-pointer transition-colors">{social}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-eco mb-10">Navigation</p>
            <ul className="space-y-4">
              {['Solutions', 'Hardware', 'Savings', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={`/#${link.toLowerCase()}`} className="text-white/40 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-eco mb-10">Headquarters</p>
            <div className="space-y-6">
              <p className="text-xl font-black">+91-9999265790</p>
              <p className="text-white/40 text-sm">support@lcev.in</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-black text-white/20 uppercase tracking-widest">
            © {currentYear} LCEv. All rights reserved.
          </p>
          <div className="flex gap-8 text-[9px] font-black text-white/20 uppercase tracking-widest">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
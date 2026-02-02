
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Linkedin, Instagram, Mail,
  MapPin, PhoneCall, ChevronRight
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Emerald Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-orange-900/5 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1900px] relative z-10">
        <div className="flex flex-col min-[756px]:flex-row min-[756px]:justify-between gap-16 mb-20">

          {/* Column 1: Company Brand (35% on Desktop) */}
          <div className="flex flex-col min-[756px]:w-[35%] space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="h-20 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
                <img src="img/logo.png" alt="AR Animal Health Logo" className="h-full w-auto object-contain bg-white rounded-lg p-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none">AR ANIMAL HEALTH LTD.</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Poultry Sector Excellence</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium max-w-lg">
              Leading the way in high-efficiency enzymes and pharmaceutical-grade feed additives for Bangladesh’s poultry sector since 2010.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-500 text-slate-400 hover:text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Hub Navigation (25% on Desktop) */}
          <div className="min-[666px]:col-span-1 min-[756px]:w-[25%] px-0 min-[756px]:px-4">
            <h4 className="text-lg font-black mb-8 border-b-2 border-emerald-500/20 pb-3 inline-block tracking-tight">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-emerald-500 flex items-center gap-3 transition-all group font-bold"
                  >
                    <ChevronRight size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch (35% on Desktop) */}
          <div className="min-[756px]:w-[35%]">
            <h4 className="text-lg font-black mb-8 border-b-2 border-emerald-500/20 pb-3 inline-block tracking-tight">
              Get In Touch
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5 group">
                <div className="w-12 h-12 bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-500/30 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">
                  House-51, Flat: A-7 (7th Floor), Rabindra Sarani Road, Sector-3, Uttara, Dhaka-1230, Bangladesh
                </p>
              </li>
              <li className="flex gap-5 group">
                <div className="w-12 h-12 bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-500/30 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <PhoneCall size={22} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Hotline Contacts:</p>
                  <div className="flex flex-col gap-1 mt-1">
                    <a href="tel:01777703243" className="text-slate-400 hover:text-emerald-500 font-bold text-sm transition-colors">01777-703243</a>
                    <a href="tel:01777703241" className="text-slate-400 hover:text-emerald-500 font-bold text-sm transition-colors">01777-703241</a>
                  </div>
                </div>
              </li>
              <li className="flex gap-5 group pt-8 border-t border-white/5">
                <div className="w-12 h-12 bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-500 border border-emerald-500/30 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <a href="mailto:aranimalhealth@gmail.com" className="text-white font-bold hover:text-emerald-500 transition-colors block">
                    aranimalhealth@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 font-black uppercase mt-1 tracking-widest">Official Email</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 <span className="text-emerald-500 font-black">AR ANIMAL HEALTH LTD.</span> All Rights Reserved.
          </p>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Linkedin, Instagram, Mail,
  MapPin, PhoneCall, ChevronRight, Send
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-beige-black text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-30" />

      <div className="container mx-auto px-6 max-w-[1900px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          {/* Company Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="h-24 w-auto flex items-center justify-center transition-transform group-hover:scale-105">
                <img src="img/logo.png" alt="Logo" className="h-full w-auto object-contain" />
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              Revolutionizing agriculture through advanced biotechnology and scientific nutritional excellence. Leading the way in animal health solutions across Bangladesh.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all duration-500 text-slate-400 hover:text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Hub Navigation */}
          <div>
            <h4 className="text-lg font-outfit font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              Hub Navigation
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Gallery', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-brand-gold font-bold transition-all flex items-center gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-gold group-hover:scale-150 transition-all" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Network */}
          <div>
            <h4 className="text-lg font-outfit font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              Support Network
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red border border-brand-red/20 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">
                  House-51, Flat: A-6, Sector-3, Uttara, Dhaka-1230, Bangladesh.
                </p>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red border border-brand-red/20 flex-shrink-0">
                  <PhoneCall size={22} />
                </div>
                <div>
                  <p className="text-white font-ubuntu font-bold">+88 01713-011040</p>
                  <p className="text-xs text-slate-500 font-black uppercase mt-1">24/7 Technical Support</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Transformation Intel */}
          <div>
            <h4 className="text-lg font-outfit font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-emerald" />
              Transformation Intel
            </h4>
            <p className="text-slate-400 mb-8 font-medium">Subscribe to receive technical bulletins and industry insights.</p>
            <form className="relative group">
              <input
                type="email"
                id="newsletter-email"
                name="newsletter-email"
                placeholder="Secure Email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-brand-gold transition-all font-bold placeholder:text-slate-600"
              />
              <button type="submit" className="absolute right-2 top-2 bg-brand-red hover:bg-red-800 text-white p-2.5 rounded-lg transition-all shadow-lg active:scale-95">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 <span className="text-brand-red font-black">AR ANIMAL HEALTH LTD.</span> All systems operational.
          </p>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-brand-gold transition-colors">Digital Privacy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Protocol Terms</a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

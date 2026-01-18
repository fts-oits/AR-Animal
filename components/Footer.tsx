
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, Twitter, Linkedin, Instagram, Mail, 
  MapPin, PhoneCall, ChevronRight, Send 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-500 text-white font-bold text-2xl w-10 h-10 flex items-center justify-center rounded">
                AR
              </div>
              <span className="text-xl font-extrabold tracking-tight">ANIMAL HEALTH LTD</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Premium quality fertilizers and feed additives for a sustainable agricultural future. Innovation driven by commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-emerald-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-emerald-500/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Gallery', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-emerald-500 flex items-center space-x-2 transition-colors"
                  >
                    <ChevronRight size={14} className="text-emerald-500" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-emerald-500/30 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <MapPin className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-400">House-51, Flat: A-6, Sector-3, Uttara, Dhaka-1230</span>
              </li>
              <li className="flex items-center space-x-4">
                <PhoneCall className="text-emerald-500 flex-shrink-0" size={20} />
                <span className="text-slate-400">+88 01713-011040</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-emerald-500 flex-shrink-0" size={20} />
                <a href="mailto:info@aranimalhealthltd.com" className="text-slate-400 hover:text-emerald-500 transition-colors">info@aranimalhealthltd.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-emerald-500/30 pb-2 inline-block">Newsletter</h4>
            <p className="text-slate-400 mb-6">Stay updated with our latest products and innovations.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
              />
              <button className="absolute right-2 top-2 bg-emerald-600 hover:bg-emerald-700 p-1.5 rounded-md transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:text-left text-slate-500 text-sm">
          <p>© 2024 AR Animal Health Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

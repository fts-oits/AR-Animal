
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="flex items-center">
            <img 
              src="input_file_7.png" 
              alt="AR Animal Health Logo" 
              className="h-10 md:h-12 w-auto object-contain bg-white rounded-xl p-0.5 shadow-sm" 
            />
            <div className="flex flex-col ml-3">
              <span className={`text-xl font-extrabold tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                AR ANIMAL HEALTH
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${scrolled ? 'text-emerald-600' : 'text-emerald-600 md:text-emerald-300'}`}>
                Innovation in Growth
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wide hover:text-emerald-600 transition-colors relative group ${
                location.pathname === link.path 
                ? 'text-emerald-600' 
                : scrolled ? 'text-slate-700' : 'text-slate-700 md:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform ${location.pathname === link.path ? 'scale-x-100' : ''}`}></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md transform hover:-translate-y-0.5 transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-bold ${location.pathname === link.path ? 'text-emerald-600' : 'text-slate-900'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-emerald-600 text-white py-4 rounded-xl text-center text-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

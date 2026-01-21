import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 ${scrolled || isOpen ? 'py-4' : 'py-6 md:py-8'
          }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 border border-transparent ${scrolled || isOpen
              ? 'bg-white/80 backdrop-blur-xl shadow-lg border-white/20 pl-4 pr-4 py-3 md:pl-8 md:pr-4'
              : 'bg-transparent pl-0 pr-0'
            }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group z-50 relative" onClick={() => setIsOpen(false)}>
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="img/logo.png"
                  alt="AR Animal Health"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg md:text-xl font-black tracking-tighter leading-none transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-900' : 'text-slate-900 md:text-white'
                  }`}>
                  AR ANIMAL
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${scrolled || isOpen ? 'text-emerald-600' : 'text-emerald-700 md:text-emerald-300'
                  }`}>
                  Health Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <div className={`flex items-center gap-1 rounded-full px-2 py-1.5 transition-colors duration-500 ${scrolled ? 'bg-slate-100/50' : 'bg-black/20 backdrop-blur-sm'
                }`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${location.pathname === link.path
                        ? 'bg-white text-emerald-600 shadow-md'
                        : scrolled
                          ? 'text-slate-600 hover:text-emerald-600 hover:bg-white/50'
                          : 'text-white/90 hover:text-white hover:bg-white/20'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="ml-4 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-full text-sm font-bold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden relative z-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen
                  ? 'bg-slate-100 text-slate-900'
                  : scrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/20 backdrop-blur-md text-slate-900'
                }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-5 flex flex-col items-end gap-1.5 ">
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-5 opacity-0' : 'w-3'}`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-2' : 'w-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-40 shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-28 pb-10 px-8">
          <div className="flex flex-col gap-2 mb-10">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-black tracking-tight py-4 border-b border-slate-100 flex items-center justify-between group ${location.pathname === link.path ? 'text-emerald-600' : 'text-slate-900'
                  }`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span>{link.name}</span>
                <span className={`w-2 h-2 rounded-full transition-all duration-300 ${location.pathname === link.path ? 'bg-emerald-600 scale-100' : 'bg-slate-200 scale-0 group-hover:scale-100'
                  }`} />
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-slate-900 text-white py-5 rounded-[2rem] text-center text-lg font-bold shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
            >
              <span>Quick Contact</span>
            </Link>

            <div className="bg-emerald-50 rounded-[2rem] p-6 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Support</span>
              <a href="tel:+8801713011040" className="flex items-center gap-3 text-slate-900 font-bold">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Phone size={14} />
                </div>
                +88 01713-011040
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

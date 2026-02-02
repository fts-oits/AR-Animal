import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, Mail, Search } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
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
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-12 ${scrolled || isOpen ? 'py-1' : 'py-8'
          }`}
      >
        <div
          className={`max-w-[1900px] mx-auto rounded-2xl transition-all duration-500 border border-transparent ${scrolled || isOpen
            ? 'bg-brand-beige-white/40 bg-glass-orange backdrop-blur-2xl shadow-2xl border-white/20 pl-4 pr-4 py-1 md:pl-10 md:pr-4'
            : 'bg-transparent pl-0 pr-0'
            }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-4 group z-50 relative" onClick={() => setIsOpen(false)}>
              <div className="relative h-14 w-auto flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="img/logo.png"
                  alt="AR Animal Health"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation & Search */}
            <div className="hidden md:flex items-center flex-1">

              {/* Centered Search Bar - Takes up middle space */}
              <div className="flex-1 flex justify-center px-4">
                <div className={`relative transition-all duration-500 overflow-hidden ${scrolled ? 'w-[300px] opacity-100' : 'w-0 opacity-0'}`}>
                  <div className="relative w-full" onClick={onSearchClick}>
                    <input
                      type="text"
                      placeholder="Search Products"
                      readOnly
                      className="w-full bg-white/80 backdrop-blur-md border border-brand-red rounded-2xl px-12 py-2 focus:outline-none focus:border-brand-gold transition-all font-ubuntu font-bold text-slate-800 placeholder-slate-400 shadow-sm cursor-pointer"
                    />
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" />
                  </div>
                </div>
              </div>

              {/* Right Side Navigation Group */}
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 rounded-2xl px-3 py-2 transition-colors duration-500 ${scrolled ? 'bg-slate-200/50' : 'bg-white/10 backdrop-blur-md border border-white/10'
                  }`}>
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative px-4 py-2 rounded-xl text-sm font-ubuntu font-bold transition-all duration-300 ${location.pathname === link.path
                        ? 'bg-brand-red text-white shadow-lg'
                        : scrolled
                          ? 'text-slate-600 hover:text-brand-gold hover:bg-white/50'
                          : 'text-white/90 hover:text-white hover:bg-white/20'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className={`bg-brand-red hover:bg-red-800 text-white px-5 py-2 rounded-xl text-xs font-inter font-bold shadow-xl shadow-brand-red/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group whitespace-nowrap ml-2`}
                >
                  <span>Contact</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden relative z-50 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isOpen
                ? 'bg-brand-beige-black text-white'
                : scrolled ? 'bg-brand-beige-black text-white' : 'bg-white/90 shadow-xl text-brand-beige-black'
                }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 flex flex-col items-end gap-1.5 ">
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-6 opacity-0' : 'w-4'}`} />
                <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`} />
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
                className={`text-2xl font-black tracking-tight py-4 border-b border-slate-100 flex items-center justify-between group ${location.pathname === link.path ? 'text-brand-red' : 'text-slate-900 group-hover:text-brand-gold'
                  }`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span>{link.name}</span>
                <span className={`w-2 h-2 rounded-full transition-all duration-300 ${location.pathname === link.path ? 'bg-brand-red scale-100' : 'bg-slate-200 scale-0 group-hover:scale-100 group-hover:bg-brand-gold'
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
              <a href="mailto:aranimalhealth@gmail.com" className="flex items-center gap-3 text-slate-900 font-bold break-all">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Mail size={14} />
                </div>
                aranimalhealth@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

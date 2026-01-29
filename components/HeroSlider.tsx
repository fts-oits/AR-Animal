import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../constants';
import { Link } from 'react-router-dom';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-brand-beige-black">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 pointer-events-none z-0'
            }`}
        >
          {/* Enhanced Overlay with Green tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black via-brand-beige-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-emerald-900/20 z-10" />

          {/* Background Decorative Text */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[20vw] font-black text-white/[0.03] leading-none whitespace-nowrap transform -rotate-12 translate-y-1/4">
              AGRICULTURE • INNOVATION • SUSTAINABILITY
            </span>
          </div>

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover grayscale-[20%] brightness-[70%]"
          />

          {/* Content Container */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 pt-32 pb-20 md:pt-0">
              <div className="max-w-4xl text-white">
                <div className={`transition-all duration-1000 delay-300 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}>
                  {/* Premium Badge */}
                  <span className="inline-block px-4 py-2 rounded-full bg-red-900/60 backdrop-blur-xl border border-red-900/70 text-amber-50 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8 shadow-2xl shadow-red-900/30 mt-12 md:mt-24">
                    Premium Agricultural biotech
                  </span>

                  {/* Title - White with shadow */}
                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-outfit font-bold mb-6 leading-tight tracking-tighter text-amber-50 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    {slide.title}
                  </h1>

                  {/* Subtitle - White with shadow */}
                  <p className="text-base md:text-xl text-amber-50 mb-8 leading-relaxed max-w-2xl font-medium border-l-4 border-emerald-500/70 pl-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                    {slide.subtitle}
                  </p>

                  {/* Redesigned CTA Buttons - Short Labels */}
                  <div className="flex gap-4">
                    <Link
                      to="/products"
                      className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center space-x-2 shadow-xl shadow-emerald-900/50 transform hover:-translate-y-1 transition-all border border-emerald-400/30"
                    >
                      <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                      <span className="font-ubuntu">Products</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    </Link>
                    <Link
                      to="/about"
                      className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center transition-all shadow-xl shadow-orange-900/50 border border-amber-400/30"
                    >
                      <span className="font-ubuntu">About Us</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="hidden lg:flex absolute bottom-20 right-20 z-30 space-x-6">
        <button
          onClick={prevSlide}
          className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-emerald hover:border-brand-emerald transition-all group shadow-2xl"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-emerald hover:border-brand-emerald transition-all group shadow-2xl"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" size={28} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 md:left-20 z-30 flex items-end space-x-4">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group flex flex-col items-center gap-3"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className={`text-[10px] font-black transition-colors ${idx === current ? 'text-brand-gold' : 'text-white/40 group-hover:text-white'}`}>
              0{idx + 1}
            </span>
            <div className={`h-12 w-1 rounded-full transition-all duration-700 ${idx === current ? 'bg-brand-gold shadow-[0_0_15px_rgba(180,83,9,0.8)]' : 'bg-white/20 group-hover:bg-white/40'}`} />
          </button>
        ))}
      </div>
    </section>

  );
};

export default HeroSlider;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
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
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-slate-900">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 pointer-events-none z-0'
            }`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />

          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start">
            <div className="container mx-auto px-6 mt-16 md:mt-0">
              <div className="max-w-3xl text-white md:pl-8">
                <div className={`transition-all duration-700 delay-300 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 font-bold uppercase tracking-widest text-xs mb-6">
                    Premium Agriculture
                  </span>
                  <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-lg font-medium">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/products"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center space-x-2 shadow-2xl shadow-emerald-600/30 transform hover:scale-105 transition-all"
                    >
                      <span>Explore Products</span>
                      <ArrowRight size={20} />
                    </Link>
                    <Link
                      to="/about"
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center transition-all hover:border-white/50"
                    >
                      Our Technology
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons - Hidden on very small screens or moved */}
      <div className="hidden md:flex absolute bottom-12 right-12 z-30 space-x-4">
        <button
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all group"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all group"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-6 md:left-12 z-30 flex space-x-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${idx === current ? 'bg-emerald-500 w-12' : 'bg-white/30 w-6 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

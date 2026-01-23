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
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-brand-beige-black">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 pointer-events-none z-0'
            }`}
        >
          {/* Enhanced Overlay with Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black via-brand-beige-black/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-brand-red/10 z-10" />

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

          {/* Content Container - Increased top padding for mobile to avoid logo overlap */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 pt-32 pb-20 md:pt-0">
              <div className="max-w-4xl text-white">
                <div className={`transition-all duration-1000 delay-300 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}>
                  <span className="inline-block px-4 py-2 rounded-full bg-brand-gold/40 backdrop-blur-xl border border-brand-gold/50 text-white font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8 shadow-2xl shadow-brand-gold/20 mt-12 md:mt-24">
                    Premium Agricultural biotech
                  </span>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 leading-tight tracking-tighter">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={i % 2 === 1 ? 'text-brand-red' : ''}>{word} </span>
                    ))}
                  </h1>

                  <p className="text-base md:text-xl text-white mb-10 leading-relaxed max-w-xl font-medium border-l-4 border-brand-gold/50 pl-6 drop-shadow-[0_2px_10px_rgba(180,83,9,0.5)]">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <Link
                      to="/products"
                      className="group bg-brand-red hover:bg-red-800 text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl shadow-brand-red/30 transform hover:-translate-y-1 transition-all"
                    >
                      <span className="font-ubuntu">Our Solutions</span>
                      <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <Link
                      to="/about"
                      className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center transition-all hover:border-brand-gold/50 shadow-xl"
                    >
                      Scientific Approach
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons - Redesigned */}
      <div className="hidden lg:flex absolute bottom-20 right-20 z-30 space-x-6">
        <button
          onClick={prevSlide}
          className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all group shadow-2xl"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="w-16 h-16 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all group shadow-2xl"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" size={28} />
        </button>
      </div>

      {/* Slide Indicators - Moved and redesigned */}
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

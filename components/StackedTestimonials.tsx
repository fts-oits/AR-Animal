import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const StackedTestimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate when section is in view
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Start animation when section enters viewport
            if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
                // Calculate scroll progress through the section
                const scrollableHeight = sectionHeight - windowHeight;
                const scrolled = Math.max(0, windowHeight - sectionTop);
                const progress = Math.min(1, scrolled / (scrollableHeight + windowHeight));

                setScrollProgress(progress);

                // Calculate which card should be active
                const cardProgress = progress * TESTIMONIALS.length;
                const newIndex = Math.min(
                    TESTIMONIALS.length - 1,
                    Math.floor(cardProgress)
                );

                setActiveIndex(newIndex);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-40 lg:py-48 bg-brand-beige-black text-white relative overflow-hidden"
            style={{ minHeight: `${TESTIMONIALS.length * 100}vh` }}
        >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-20" />

            <div className="container mx-auto px-6 max-w-[1900px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    {/* Left Column - Sticky Header */}
                    <div className="sticky top-32">
                        <span className="text-brand-gold font-black tracking-[0.5em] uppercase text-xs mb-6 block">Validation</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 tracking-tighter leading-tight">
                            Field <span className="text-brand-gold">Intelligence.</span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-md">
                            Real-world feedback from leading agricultural conglomerates across the region.
                        </p>

                        {/* Progress Indicator */}
                        <div className="mt-12 flex items-center gap-4">
                            {TESTIMONIALS.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`h-1 rounded-full transition-all duration-500 ${idx === activeIndex
                                            ? 'w-12 bg-brand-red'
                                            : idx < activeIndex
                                                ? 'w-8 bg-brand-gold/50'
                                                : 'w-4 bg-white/20'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Stacked Cards */}
                    <div
                        ref={containerRef}
                        className="sticky top-32 h-[600px] relative"
                    >
                        {TESTIMONIALS.map((testimonial, idx) => {
                            const isActive = idx === activeIndex;
                            const isPast = idx < activeIndex;
                            const isFuture = idx > activeIndex;

                            // Calculate transform based on position
                            const baseOffset = idx * 20;
                            const activeOffset = isActive ? 0 : isPast ? -100 : baseOffset;
                            const scale = isActive ? 1 : isPast ? 0.95 : 1 - (idx - activeIndex) * 0.05;
                            const opacity = isActive ? 1 : isPast ? 0 : 1 - (idx - activeIndex) * 0.2;

                            return (
                                <div
                                    key={idx}
                                    className="absolute inset-0 transition-all duration-700 ease-out"
                                    style={{
                                        transform: `translateY(${activeOffset}px) scale(${scale})`,
                                        opacity: opacity,
                                        zIndex: TESTIMONIALS.length - idx,
                                        pointerEvents: isActive ? 'auto' : 'none',
                                    }}
                                >
                                    <div className="bg-white/5 p-10 md:p-12 rounded-[3rem] border border-white/10 relative h-full backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-500">
                                        {/* Quote Icon */}
                                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shadow-2xl shadow-brand-gold/30">
                                            <Quote className="text-white" size={24} />
                                        </div>

                                        {/* Quote Text */}
                                        <p className="text-xl md:text-2xl font-medium text-slate-300 italic mb-8 leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-4 mt-auto">
                                            <div className="w-14 h-14 rounded-xl bg-brand-gold/20 border border-brand-gold/30 overflow-hidden">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-outfit font-bold text-white tracking-tight">
                                                    {testimonial.name}
                                                </h4>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-brand-gold" />
                                                    <p className="text-brand-gold font-black uppercase tracking-[0.2em] text-[8px]">
                                                        {testimonial.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Number Indicator */}
                                        <div className="absolute bottom-8 right-8 text-6xl font-ubuntu font-bold text-white/5 leading-none">
                                            0{idx + 1}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StackedTestimonials;

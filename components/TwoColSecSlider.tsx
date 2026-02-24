import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award, ArrowRight } from 'lucide-react';
import { PARTNER_DETAILS } from '../constants';

const TwoColSecSlider: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % PARTNER_DETAILS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % PARTNER_DETAILS.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + PARTNER_DETAILS.length) % PARTNER_DETAILS.length);

    const getSlideClass = (index: number) => {
        if (index === current) return 'opacity-100 translate-x-0 scale-100 z-10';
        if (index < current) return 'opacity-0 -translate-x-full scale-95 z-0';
        return 'opacity-0 translate-x-full scale-95 z-0';
    };

    return (
        <section className="py-24 md:py-40 bg-brand-beige-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-emerald/[0.02] -skew-x-12 transform translate-x-1/4" />

            <div className="container mx-auto px-6 relative z-10 max-w-[1900px]">
                <div className="grid grid-cols-1 min-[756px]:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Static Text Content (Visible > 756px) */}
                    <div className="min-[756px]:col-span-6 hidden min-[756px]:block">
                        <div className="max-w-xl">
                            <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Supply Chain Architecture</span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-bold text-brand-beige-black mb-8 tracking-tighter leading-tight">
                                Global <span className="text-brand-emerald">Alliances.</span>
                            </h2>
                            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-lg">
                                We partner with the world's leading biotechnologists to bring pharmaceutical-grade additives to Bangladesh's poultry sector.
                            </p>
                            <div className="mt-12 flex items-center gap-4">
                                <div className="h-1 w-12 bg-brand-emerald rounded-full" />
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Strategic Global Partnerships</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Slider (Full width < 756px) */}
                    <div className="min-[756px]:col-span-6 relative">
                        <div className="relative aspect-square sm:aspect-video md:aspect-square lg:aspect-[4/3] w-full max-w-xl mx-auto min-[756px]:mx-0">
                            {PARTNER_DETAILS.map((partner, index) => (
                                <div
                                    key={partner.name}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${getSlideClass(index)}`}
                                >
                                    {/* Refined Partner Card with Background Image */}
                                    <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col h-full group overflow-hidden relative">

                                        {/* Upper Area: Background Image + Title/Desc */}
                                        <div className="relative h-2/3 w-full overflow-hidden">
                                            <div className="absolute inset-0 z-0">
                                                <img
                                                    src={partner.bgImage || partner.logo}
                                                    alt=""
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black via-brand-beige-black/60 to-brand-beige-black/20" />
                                            </div>

                                            <div className="absolute inset-0 z-10 p-8 md:p-12 flex flex-col justify-end">
                                                <div className="mb-4">
                                                    <div className="flex items-center gap-2 bg-brand-emerald/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-emerald/20 w-fit mb-4">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                        <span className="text-white text-[10px] font-black uppercase tracking-widest">
                                                            Partner Node
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-outfit font-bold text-white mb-4 tracking-tight leading-tight">
                                                    {partner.name}
                                                </h3>
                                                <p className="text-slate-200 leading-relaxed text-base md:text-lg font-medium line-clamp-3 md:line-clamp-4">
                                                    {partner.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Lower Area: Strategic Logo + Node Info */}
                                        <div className="h-1/3 p-8 md:p-10 flex items-center gap-6 md:gap-8 bg-white relative z-20">
                                            <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-4 md:p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex-shrink-0 transition-colors group-hover:bg-brand-emerald/5">
                                                <img
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-1000"
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-center min-w-0">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Award size={16} className="text-brand-gold" />
                                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 truncate">Strategic Alliance</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-brand-emerald font-bold text-[10px] md:text-xs uppercase tracking-widest truncate">Biological Node</span>
                                                    <div className="w-10 h-10 rounded-full bg-brand-beige-black text-white flex items-center justify-center group-hover:bg-brand-emerald transition-all transform group-hover:translate-x-1">
                                                        <ArrowRight size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation Buttons (HeroSlider style - Bottom Right overlay) */}
                            <div className="absolute -bottom-10 -right-6 min-[756px]:bottom-10 min-[756px]:right-10 z-30 flex space-x-4">
                                <button
                                    onClick={prevSlide}
                                    className="w-16 h-16 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-600 hover:bg-brand-emerald hover:text-white hover:border-brand-emerald transition-all group shadow-xl active:scale-95"
                                >
                                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={28} />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="w-16 h-16 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-600 hover:bg-brand-emerald hover:text-white hover:border-brand-emerald transition-all group shadow-xl active:scale-95"
                                >
                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={28} />
                                </button>
                            </div>
                        </div>

                        {/* Progress Indicators (Mobile only or center) */}
                        <div className="flex gap-3 mt-20 justify-center min-[756px]:hidden">
                            {PARTNER_DETAILS.map((partner, i) => (
                                <button
                                    key={partner.name}
                                    onClick={() => setCurrent(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-12 bg-brand-emerald' : 'w-3 bg-slate-200'
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TwoColSecSlider;

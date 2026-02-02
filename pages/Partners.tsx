
import React from 'react';
import { Globe, ArrowRight, Award } from 'lucide-react';
import { PARTNER_DETAILS } from '../constants';

const Partners: React.FC = () => {
    return (
        <div className="bg-brand-beige-white min-h-screen">
            {/* Global Network Header */}
            <section className="bg-brand-beige-black pt-48 pb-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-gold/10"></div>
                <div className="absolute -bottom-1 w-[120%] h-40 bg-brand-beige-white -rotate-2 translate-x-[-10%] z-20"></div>

                <div className="container mx-auto px-6 relative z-30 max-w-[1900px]">
                    <div className="max-w-4xl">
                        <span className="text-brand-red font-black tracking-[0.5em] uppercase text-xs mb-6 block">Supply Chain Architecture</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-8 tracking-tighter leading-tight max-w-3xl">
                            Global <span className="text-brand-red">Alliances.</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                            We partner with the world's leading biotechnologists to bring pharmaceutical-grade additives to Bangladesh's poultry sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="-mt-20 pb-32 relative z-20">
                <div className="container mx-auto px-6 max-w-[1900px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PARTNER_DETAILS.map((partner, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 p-8 flex flex-col hover:border-brand-emerald/30 transition-all hover:shadow-2xl duration-500"
                            >
                                <div className="h-40 flex items-center justify-center p-6 bg-slate-50 rounded-[2rem] mb-8 group-hover:bg-brand-emerald/5 transition-colors">
                                    {partner.logo.includes('placeholder') || !partner.logo ? (
                                        <div className="text-center">
                                            <Globe size={48} className="text-slate-300 mx-auto mb-2" />
                                            <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">Global Partner</span>
                                        </div>
                                    ) : (
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsYXNzPSJncmF5c2NhbGUiPjx0ZXh0IHg9IjEwIiB5PSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjY2NjIj5QYXJ0bmVyIExvZ288L3RleHQ+PC9nPjwvc3ZnPg==';
                                            }}
                                        />
                                    )}
                                </div>

                                <div className="flex-1 flex flex-col items-start">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Award size={18} className="text-brand-gold" />
                                        <span className="text-xs font-black uppercase tracking-widest text-slate-400">Strategic Partner</span>
                                    </div>
                                    <h3 className="text-2xl font-outfit font-bold text-slate-900 mb-4 group-hover:text-brand-emerald transition-colors leading-tight">
                                        {partner.name}
                                    </h3>
                                    <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                                        {partner.desc}
                                    </p>

                                    <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-brand-emerald/20 transition-colors" />

                                    <button className="flex items-center gap-2 text-brand-emerald font-bold text-sm uppercase tracking-widest group/btn">
                                        <span>Learn More</span>
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;


import React from 'react';
import { Link } from 'react-router-dom';

import { Globe, ArrowRight, Award } from 'lucide-react';
import { PARTNER_DETAILS } from '../constants';

const Partners: React.FC = () => {
    return (
        <div className="bg-brand-beige-white min-h-screen">
            {/* Global Network Header */}
            <section className="bg-brand-beige-black pt-48 pb-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-gold/10"></div>
                <div className="absolute -bottom-1 w-[120%] h-40 bg-emerald-600 -rotate-2 translate-x-[-10%] z-20 shadow-2xl shadow-slate-700/50"></div>

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


            {/* Partners - Dynamic Grid */}
            <section className="py-20 md:py-40 lg:py-48 bg-brand-beige-white">
                <div className="container mx-auto px-6 max-w-[1900px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-12 mb-16 text-center">
                            <span className="text-brand-emerald font-black tracking-[0.4em] uppercase text-xs mb-6 block">Global Network</span>
                            <h2 className="text-5xl md:text-7xl font-ubuntu font-bold text-brand-beige-black tracking-tighter leading-tight mb-8">Strategic <span className="bg-brand-emerald text-white px-4 py-2 rounded-xl">Allies.</span></h2>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-2xl mx-auto mb-10">Collaborating with global leaders in biotechnology to bring terminal solutions to Bangladesh.</p>
                            <Link to="/about" className="inline-flex items-center gap-4 text-brand-beige-black hover:text-brand-red font-black uppercase tracking-[0.2em] text-xs transition-colors group">
                                <span>View All Collaborators</span>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {PARTNER_DETAILS.map((p, idx) => (
                                <div key={idx} className="group relative overflow-hidden rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 aspect-[4/3]">
                                    {/* Full Background Image */}
                                    <img
                                        src={p.logo}
                                        alt={p.name}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                    />

                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black/90 via-brand-beige-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm" />

                                    {/* Text Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl md:text-2xl font-outfit font-bold text-white uppercase tracking-tight leading-none mb-2 drop-shadow-lg">{p.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">Global Provider</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;

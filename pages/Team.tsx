import React from 'react';
import { Mail, Linkedin, Twitter, ArrowRight, Quote } from 'lucide-react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-brand-beige-white min-h-screen">
      {/* Leadership Header */}
      <section className="bg-brand-beige-black pt-48 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-gold/10"></div>
        <div className="absolute -bottom-1 w-[120%] h-40 bg-brand-beige-white -rotate-2 translate-x-[-10%] z-20"></div>

        <div className="container mx-auto px-6 relative z-30 max-w-[1900px]">
          <div className="max-w-4xl">
            <span className="text-brand-red font-black tracking-[0.5em] uppercase text-xs mb-6 block">Human Intelligence</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-8 tracking-tighter leading-tight max-w-3xl">
              The <span className="text-brand-red">Strategists.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              Orchestrating agricultural transformation through decades of deep-sector specialized knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Spotlight Interface */}
      <section className="-mt-20 pb-32 relative z-20">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row max-w-6xl mx-auto">
            <div className="lg:w-2/5 h-[400px] lg:h-[600px] relative group">
              <img src={TEAM[0].image} alt={TEAM[0].name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black/80 via-transparent to-transparent lg:hidden"></div>
              <div className="absolute bottom-10 left-10 lg:hidden text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-emerald mb-2">Since 1987</p>
                <h2 className="text-3xl font-outfit font-bold tracking-tighter">{TEAM[0].name}</h2>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 md:p-16 lg:p-20 flex flex-col justify-center bg-brand-beige-black">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-brand-emerald" />
                <span className="text-brand-emerald font-black uppercase tracking-[0.4em] text-xs">Founder & Executive Director</span>
              </div>

              <h2 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-8 tracking-tighter leading-tight">
                {TEAM[0].name}
              </h2>

              <div className="mb-12 relative">
                <Quote className="absolute -top-8 -left-8 text-brand-emerald opacity-20" size={64} />
                <p className="text-slate-400 text-2xl md:text-3xl leading-relaxed italic font-medium relative z-10">
                  "{TEAM[0].bio} Our commitment to animal health is the cornerstone of AR Group's vision."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href={`mailto:${TEAM[0].socials.email}`}
                  className="bg-brand-emerald hover:bg-white hover:text-brand-beige-black text-white px-8 py-4 rounded-xl font-ubuntu font-bold text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Mail size={18} />
                  <span>Email CEO</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dept Leaders Matrix Removed as per updates */}
    </div>
  );
};


export default Team;

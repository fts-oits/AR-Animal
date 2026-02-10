
import React, { useEffect, useRef } from 'react';
import { Target, Eye, Shield, Globe, Flag, Factory, TrendingUp, Zap, CheckCircle2, Quote, Mail, Subtitles } from 'lucide-react';
import { MILESTONES, PARTNER_DETAILS, TEAM } from '../constants';

const TimelineItem: React.FC<{ milestone: typeof MILESTONES[0], index: number, isLast: boolean }> = ({ milestone, index, isLast }) => {
  const IconMap: any = { Flag, Globe, Factory, TrendingUp, Zap };
  const Icon = IconMap[milestone.icon] || Flag;

  return (
    <div className={`relative mb-32 min-[756px]:flex min-[756px]:items-center min-[756px]:justify-between group ${index % 2 === 0 ? 'min-[756px]:flex-row' : 'min-[756px]:flex-row-reverse'}`}>
      {/* Mobile Connector */}
      {!isLast && (
        <div className="absolute top-12 left-[23px] w-px h-[calc(100%+4rem)] bg-brand-red opacity-10 min-[756px]:hidden"></div>
      )}

      {/* Desktop Spacer */}
      <div className="hidden min-[756px]:block w-5/12"></div>

      {/* Content Card with Integrated Icon */}
      <div className={`relative min-[756px]:w-5/12 ${index % 2 === 0 ? 'text-left' : 'min-[756px]:text-right text-left'}`}>
        <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-xl border border-slate-100 group-hover:border-brand-red hover:shadow-2xl hover:shadow-brand-red/10 transition-all duration-700 relative">

          {/* Integrated Icon Node - Positioned based on alignment (Inner side) */}
          <div className={`absolute -top-6 z-30 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-brand-beige-black border-4 border-brand-red rounded-[2rem] shadow-2xl group-hover:rotate-12 transition-all duration-700 ${index % 2 === 0 ? '-right-6' : 'min-[756px]:-left-6 -right-6'}`}>
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-red" />
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-brand-beige-black font-black text-xs shadow-lg">
              {milestone.year.toString().slice(-2)}
            </div>
          </div>

          <span className="text-brand-red font-ubuntu font-bold text-4xl md:text-6xl block mb-6 tracking-tighter">{milestone.year}</span>
          <h4 className="mb-6 font-ubuntu font-bold text-brand-beige-black text-2xl md:text-4xl tracking-tight leading-tight">{milestone.title}</h4>
          <p className="text-slate-500 leading-relaxed font-medium text-lg md:text-xl">{milestone.description}</p>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="bg-brand-beige-white min-h-screen">
      {/* Terminal Hero */}
      <section className="bg-brand-beige-black pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-gold/10"></div>
        <div className="absolute -bottom-1 w-[120%] h-40 bg-brand-red -rotate-3 translate-x-[-10%] z-20"></div>

        <div className="container mx-auto px-6 relative z-30 max-w-[1900px]">
          <div className="max-w-4xl">
            <span className="text-brand-red font-black tracking-[0.5em] uppercase text-xs mb-6 block">Legacy Protocol</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-8 tracking-tighter leading-tight max-w-3xl">
              The Scientific <span className="text-brand-red">Odyssey.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-3xl font-medium leading-relaxed max-w-3xl">
              De-coding poultry health excellence since 2010. Orchestrating a future where biotechnology and sustainability converge.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 lg:py-48 bg-brand-beige-black relative overflow-visible">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-1/2 h-full bg-brand-red/[0.03] -skew-x-12 transform translate-x-1/4" />
        <div className="absolute top-20 -bottom-20 right-20 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* CEO Portrait Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-emerald to-brand-gold rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                  <img
                    src={TEAM[0].image}
                    alt={TEAM[0].name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge Card */}
              <div className="absolute -top-10 -right-6 md:right-10 bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-white/20 flex items-center gap-4 animate-bounce-slow">
                <div className="w-14 h-14 bg-brand-emerald rounded-2xl flex items-center justify-center text-emerald-900 shadow-lg shadow-emerald-500/20">
                  <Quote size={20} />
                </div>
                <div>
                  <p className="font-ubuntu font-black text-white leading-none text-xl">{TEAM[0].name}</p>
                  <p className="text-[10px] text-brand-emerald font-black uppercase tracking-tighter mt-1">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Story Content Side */}
            <div className="lg:col-span-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-brand-emerald" />
                  <span className="text-brand-emerald font-black tracking-[0.4em] uppercase text-xs">Origin Story</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-8 leading-tight tracking-tighter max-w-4xl">
                  The <span className="text-brand-red">Strategist</span>
                </h2>
                <p className="text-lg text-white md:text-lg text-white-500 mb-10 leading-relaxed font-medium max-w-4xl">With over <span className="text-emerald-500 font-bold">35 years</span> of specialized intelligence in animal feed additives, we orchestrate the processing of high-grade resources to ensure national food security.
                  <hr className="my-4 text-red-500" />Under the Visionary leadership of <span className="text-emerald-500 font-bold">Mr. Atiar Rahman</span>, Former specialist at Biman Poultry Complex since 1987, AR Animal Health Ltd has evolved into a strategic nexus for biotechnological advancement in Bangladesh's poultry sector.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-emerald/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
                    <span className="block text-3xl md:text-4xl font-outfit font-bold text-white mb-2">2010</span>
                    <span className="text-[10px] font-inter font-black uppercase tracking-widest text-brand-emerald leading-tight">System Launch</span>
                  </div>
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/10 rounded-full blur-xl group-hover:scale-150 transition-transform" />
                    <span className="block text-3xl md:text-4xl font-outfit font-bold text-white mb-2">ISO+</span>
                    <span className="text-[10px] font-inter font-black uppercase tracking-widest text-brand-gold leading-tight">Terminal Grade</span>
                  </div>
                </div>
                {/* <div className="container mx-auto">
                  <div className="w-full p-6 md:p-8 rounded-[2rem] md:rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transform hover:-translate-y-1 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                      <a href={`mailto:${TEAM[0].socials.email}`} className="inline-flex items-center gap-2 text-white hover:text-brand-emerald font-ubuntu font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-colors group/btn flex-shrink-0">
                        <Mail size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                        <span>Contact</span>
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

          </div>
        </div>

        {/* Bio Card - Absolutely positioned at 77% from top of this section, overlapping below */}
        {/* <div className="absolute top-[77%] left-0 right-0 z-40 px-6">
          <div className="container mx-auto">
            <div className="w-full p-6 md:p-8 rounded-[2rem] md:rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transform hover:-translate-y-1 transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-emerald rounded-2xl flex items-center justify-center text-emerald-900 shadow-lg shadow-emerald-500/20 flex-shrink-0">
                    <Quote size={22} className="md:hidden" />
                    <Quote size={28} className="hidden md:block" />
                  </div>
                  <div>
                    <span className="text-brand-emerald font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-1 block">Since 1987</span>
                    <h2 className="text-lg md:text-2xl font-outfit font-bold text-white tracking-tighter leading-none">{TEAM[0].name}</h2>
                  </div>
                </div>
                <a href={`mailto:${TEAM[0].socials.email}`} className="inline-flex items-center gap-2 text-white hover:text-brand-emerald font-ubuntu font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-colors group/btn flex-shrink-0">
                  <Mail size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Technical Timeline */}
      <section className="py-32 md:py-60 relative">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="text-center mb-32 md:mb-48">
            <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Evolution Log</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold text-brand-beige-black tracking-tighter leading-tight mb-8 max-w-4xl mx-auto">
              Terminal <span className="text-brand-emerald">Scale.</span>
            </h2>
            <div className="inline-flex items-center gap-4 bg-brand-beige-black text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl">
              <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>Real-time Historical Data</span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative px-6 min-[756px]:px-0">
            {/* Desktop Vertical Axis (> 756px) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-brand-red via-brand-red/5 to-transparent hidden min-[756px]:block"></div>

            <div className="relative">
              {MILESTONES.map((milestone, idx) => (
                <TimelineItem key={idx} milestone={milestone} index={idx} isLast={idx === MILESTONES.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio-Equilibrium Section */}
      <section className="py-32 md:py-60 bg-brand-beige-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,150,105,0.1)_0%,transparent_50%)]" />

        <div className="container mx-auto px-6 max-w-[1900px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-emerald/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img
                  src="img/services-1.jpg"
                  alt="Sustainable Tech"
                  className="relative rounded-[4rem] border-8 border-white/5 shadow-2xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-[2s]"
                />
                <div className="absolute top-12 left-12 flex gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-3 h-3 rounded-full bg-brand-emerald animate-pulse" style={{ animationDelay: `${i * 300}ms` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-8 block">Equilibrium Protocol</span>
              <h2 className="text-5xl md:text-8xl font-ubuntu font-bold text-white mb-10 tracking-tighter leading-none">
                Sustainable <br /> <span className="text-brand-emerald">Integrity.</span>
              </h2>
              <p className="text-slate-400 text-2xl font-medium leading-relaxed mb-16 max-w-xl">
                Ensuring a terminal balance between high-industrial yield and ecological preservation.
              </p>

              <div className="space-y-10">
                {[
                  { title: "Circular Eco-Matrix", desc: "Terminal zero-discharge water purification systems." },
                  { title: "Pure Element Sourcing", desc: "Phosphates audited for zero heavy metal contamination." },
                  { title: "Technical Literacy", desc: "Training 5,000+ nodes in the value chain annually." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-all duration-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-ubuntu font-bold text-2xl mb-2">{item.title}</h4>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Hub */}
      <section className="py-32 md:py-60 bg-brand-beige-white">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: "Mission Data", desc: "To provide high-quality biotechnology that ensures poultry health and regional food security.", color: "text-brand-emerald", bg: "bg-brand-emerald/10" },
              { icon: Eye, title: "Vision Matrix", desc: "To be the leading innovator in Asian poultry animal health care.", color: "text-brand-gold", bg: "bg-brand-gold/10" },
              { icon: Shield, title: "Core Protocol", desc: "Global standards, local integrity, and commitment to farmers.", color: "text-brand-red", bg: "bg-brand-red/10" }
            ].map((box, idx) => (
              <div key={idx} className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-xl hover:-translate-y-4 transition-all duration-700 group">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:rotate-12 transition-transform ${box.bg} ${box.color}`}>
                  <box.icon size={36} />
                </div>
                <h3 className="text-3xl font-ubuntu font-bold mb-6 text-brand-beige-black tracking-tight">{box.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default About;

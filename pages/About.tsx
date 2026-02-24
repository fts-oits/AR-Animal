import React from 'react';
import { Globe, CheckCircle2, Quote, Flag, Factory, TrendingUp, Zap } from 'lucide-react';
import { MILESTONES, TEAM } from '../constants';
import TwoColSecSlider from '../components/TwoColSecSlider';

const TimelineItem: React.FC<{ milestone: typeof MILESTONES[0], index: number, isLast: boolean }> = ({ milestone, index, isLast }) => {
  const IconMap: any = { Flag, Globe, Factory, TrendingUp, Zap };
  const Icon = IconMap[milestone.icon] || Flag;

  return (
    <div className={`relative mb-32 min-[756px]:flex min-[756px]:items-center min-[756px]:justify-between group ${index % 2 === 0 ? 'min-[756px]:flex-row' : 'min-[756px]:flex-row-reverse'}`}>
      {/* Mobile Connector */}
      {!isLast && (
        <div className="absolute top-10 left-[20px] w-px h-[calc(100%+4rem)] bg-brand-red opacity-20 min-[756px]:hidden"></div>
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

      <section className="pt-32 pb-10 md:pt-48 md:pb-20 bg-brand-beige-black relative overflow-visible">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-10 w-1/2 h-full bg-brand-red/[0.03] -skew-x-12 transform translate-x-1/4" />
        <div className="absolute top-10 -bottom-10 right-10 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

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
              <div className="absolute -top-10 -right-10 md:right-20 bg-white/20 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl border border-white/20 flex items-center gap-4 animate-bounce-slow">
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

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-6 leading-tight tracking-tighter max-w-4xl">
                  The <span className="text-brand-red">Strategist</span>
                </h2>
                <div className="text-base md:text-lg text-white mb-10 leading-relaxed font-medium max-w-4xl space-y-4">
                  <p>
                    With over <span className="text-brand-emerald font-bold">35 years</span> of specialized intelligence in animal feed additives, we orchestrate the processing of high-grade resources to ensure national food security.
                  </p>
                  <hr className="border-brand-red/30" />
                  <p>
                    Under the <span className="italic">Visionary leadership</span> of <span className="text-brand-emerald font-bold">Mr. Atiar Rahman</span>, Former specialist at Biman Poultry Complex since 1987, AR Animal Health Ltd has evolved into a strategic nexus for biotechnological advancement in Bangladesh's poultry sector.
                  </p>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <TwoColSecSlider />

      <section className="py-10 md:py-20 bg-brand-beige-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,150,105,0.1)_0%,transparent_50%)]" />

        <div className="container mx-auto px-6 max-w-[1700px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-emerald/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img
                  src="img/blog/blog-recent-4.jpg"
                  alt="Sustainable Tech"
                  className="relative rounded-[4rem] border-8 border-white/5 shadow-2xl object-cover w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-[2s]"
                />
                <div className="absolute top-12 left-12 flex gap-4">
                  {['dot-1', 'dot-2', 'dot-3'].map((dotId, i) => (
                    <div key={dotId} className="w-3 h-3 rounded-full bg-brand-emerald animate-pulse" style={{ animationDelay: `${(i + 1) * 300}ms` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-8 block">Equilibrium Protocol</span>
              <h2 className="text-5xl md:text-8xl font-ubuntu font-bold text-white mb-10 tracking-tighter leading-none">
                Sustainable <br /> <span className="text-brand-emerald">Innovation.</span>
              </h2>
              <p className="text-slate-400 text-2xl font-medium leading-relaxed mb-16 max-w-xl">
                Ensuring a terminal balance between high-industrial yield and ecological preservation.
              </p>

              <div className="space-y-10">
                {[
                  { title: "Circular Eco-Matrix", desc: "Terminal zero-discharge water purification systems." },
                  { title: "Pure Element Sourcing", desc: "Phosphates audited for zero heavy metal contamination." },
                  { title: "Technical Literacy", desc: "Training 5,000+ nodes in the value chain annually." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-8 group">
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
      <section className="py-24 md:py-40 relative">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="text-center mb-32 md:mb-48">
            <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Evolution Log</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold text-brand-beige-black tracking-tighter leading-tight mb-8 max-w-4xl mx-auto">
              Terminal <span className="text-brand-emerald">Scale.</span>
            </h2>
            <div className="inline-flex items-center gap-4 bg-brand-beige-black text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl">
              <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span>Historical Acceleration</span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative px-6 min-[756px]:px-0">
            {/* Desktop Vertical Axis (> 756px) */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-brand-red via-brand-red/5 to-transparent hidden min-[756px]:block"></div>

            <div className="relative">
              {MILESTONES.map((milestone) => (
                <TimelineItem key={milestone.year} milestone={milestone} index={MILESTONES.indexOf(milestone)} isLast={MILESTONES.indexOf(milestone) === MILESTONES.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default About;


import React, { useEffect, useRef } from 'react';
import { Target, Eye, Shield, Globe, Flag, Factory, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { MILESTONES, PARTNER_DETAILS } from '../constants';

const TimelineItem: React.FC<{ milestone: typeof MILESTONES[0], index: number, isLast: boolean }> = ({ milestone, index, isLast }) => {
  const IconMap: any = { Flag, Globe, Factory, TrendingUp, Zap };
  const Icon = IconMap[milestone.icon] || Flag;

  return (
    <div className="relative pl-8 md:pl-0 md:mb-24 md:flex md:items-center md:justify-between group">
      {/* Mobile Vertical Line */}
      {!isLast && (
        <div className="absolute top-8 left-[19px] w-0.5 h-[calc(100%+2rem)] bg-slate-200 md:hidden"></div>
      )}

      {/* Desktop Spacer */}
      <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}></div>

      {/* Icon/Dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:relative z-10 order-2 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-white border-4 md:border-8 border-slate-100 rounded-full shadow-lg group-hover:scale-110 group-hover:border-emerald-100 transition-all duration-300">
        <Icon className="w-4 h-4 md:w-6 md:h-6 text-emerald-600" />
      </div>

      {/* Content Card */}
      <div className={`mb-12 md:mb-0 relative order-1 md:w-5/12 ${index % 2 === 0 ? 'md:order-3 md:text-left md:pl-10' : 'md:text-right md:pr-10'}`}>
        <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
          <span className="text-emerald-600 font-black text-3xl md:text-4xl block mb-2">{milestone.year}</span>
          <h4 className="mb-3 font-black text-slate-900 text-xl tracking-tight">{milestone.title}</h4>
          <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">{milestone.description}</p>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* Hero Header */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1625246333195-58197bd47d26?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 font-bold uppercase tracking-widest text-xs mb-6 backdrop-blur-md">
            Since 2010
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Our Legacy</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Pioneering animal health excellence through innovation and global partnerships in Bangladesh.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white rounded-t-[3rem] -mt-10 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4 block">The Journey</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Driving Agricultural Prosperity</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  AR Animal Health Ltd stands as a young, innovative leader in the global fertilizer and feed additives sector.
                </p>
                <p>
                  Under Mr. Atiar Rahman's visionary leadership (35+ years experience), we've built a legacy of trust, focusing on deep processing of phosphorus resources for national agricultural prosperity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="block text-3xl font-black text-slate-900 mb-1">2010</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Founded</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <span className="block text-3xl font-black text-slate-900 mb-1">ISO</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Certified</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img src="img/about.jpg" alt="Facility" className="rounded-[2rem] shadow-lg w-full h-48 md:h-64 object-cover" />
                <div className="bg-emerald-600 p-8 rounded-[2rem] text-white shadow-lg flex flex-col justify-center h-48 md:h-64">
                  <h4 className="text-3xl font-black mb-2">GMP</h4>
                  <p className="font-bold opacity-80 text-sm">International Quality Standards Compliance</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-lg flex flex-col justify-center h-48 md:h-64">
                  <h4 className="text-3xl font-black mb-2">R&D</h4>
                  <p className="font-bold opacity-80 text-sm">Continuous Innovation in Biotechnology</p>
                </div>
                <img src="img/services-1.jpg" alt="Production" className="rounded-[2rem] shadow-lg w-full h-48 md:h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Milestones of Growth</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">A decade of commitment to agricultural excellence.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-slate-200 hidden md:block rounded-full"></div>

            <div className="relative">
              {MILESTONES.map((milestone, idx) => (
                <TimelineItem key={idx} milestone={milestone} index={idx} isLast={idx === MILESTONES.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 bg-slate-900 text-white rounded-t-[3rem]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide high-quality biotechnology that ensures national food security.", color: "bg-emerald-500", delay: "0" },
              { icon: Eye, title: "Our Vision", desc: "To be the leading innovator in Asian animal health care.", color: "bg-teal-500", delay: "100" },
              { icon: Shield, title: "Our Values", desc: "Global standards, local integrity, and commitment to farmers.", color: "bg-indigo-500", delay: "200" }
            ].map((box, idx) => (
              <div key={idx} className="bg-slate-800/50 p-10 rounded-[2.5rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg ${box.color}`}>
                  <box.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{box.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

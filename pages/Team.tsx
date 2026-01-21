
import React from 'react';
import { Mail, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-emerald-900 pt-32 pb-24 text-center rounded-b-[3rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block">Our Leadership</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Meet the Experts</h1>
          <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Driving innovation with over three decades of agricultural expertise.
          </p>
        </div>
      </section>

      {/* CEO Special Spotlight */}
      <section className="py-16 md:py-24 -mt-10 md:-mt-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative">
              <img src={TEAM[0].image} alt={TEAM[0].name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:hidden"></div>
              <div className="absolute bottom-6 left-6 lg:hidden text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Since 1987</p>
                <h2 className="text-3xl font-black">{TEAM[0].name}</h2>
              </div>
            </div>

            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="hidden lg:block text-emerald-600 font-black uppercase tracking-widest text-xs mb-4">Founder & CEO</span>
              <h2 className="hidden lg:block text-5xl font-black text-slate-900 mb-6 tracking-tighter">{TEAM[0].name}</h2>
              <div className="mb-8">
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic font-medium">
                  "{TEAM[0].bio} Our commitment to animal health is the cornerstone of AR Group's vision."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${TEAM[0].socials.email}`}
                  className="bg-slate-900 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Mail size={18} />
                  <span>Contact CEO</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Department Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {TEAM.slice(1).map((member) => (
              <div key={member.id} className="group bg-white p-6 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
                <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-square">
                  <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors z-10 transition-all"></div>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-3">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.socials.email && (
                      <a href={`mailto:${member.socials.email}`} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors">
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

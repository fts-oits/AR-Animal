
import { Mail, Linkedin, Twitter, ArrowRight, Quote } from 'lucide-react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-brand-beige-white min-h-screen">
      {/* Leadership Header */}
      <section className="bg-brand-beige-black pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/20 via-transparent to-brand-gold/10"></div>
        <div className="absolute -bottom-1 w-[120%] h-40 bg-brand-beige-white -rotate-2 translate-x-[-10%]"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-[1900px]">
          <div className="max-w-4xl">
            <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Human Intelligence</span>
            <h1 className="text-6xl md:text-9xl font-ubuntu font-bold text-white mb-8 tracking-tighter leading-none">
              The <span className="text-brand-emerald">Strategists.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              Orchestrating agricultural transformation through decades of deep-sector specialized knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Spotlight Interface */}
      <section className="-mt-20 pb-32 relative z-20">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-[500px] lg:h-auto relative group">
              <img src={TEAM[0].image} alt={TEAM[0].name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black/80 via-transparent to-transparent lg:hidden"></div>
              <div className="absolute bottom-10 left-10 lg:hidden text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-emerald mb-2">Since 1987</p>
                <h2 className="text-4xl font-ubuntu font-bold tracking-tighter">{TEAM[0].name}</h2>
              </div>
            </div>

            <div className="lg:w-1/2 p-12 md:p-20 lg:p-24 flex flex-col justify-center bg-brand-beige-black">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-brand-emerald" />
                <span className="text-brand-emerald font-black uppercase tracking-[0.4em] text-xs">Founder & Executive Director</span>
              </div>

              <h2 className="hidden lg:block text-5xl md:text-7xl font-ubuntu font-bold text-white mb-10 tracking-tighter leading-tight">
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
                  className="bg-brand-emerald hover:bg-white hover:text-brand-beige-black text-white px-12 py-6 rounded-2xl font-ubuntu font-bold text-xs uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center gap-4 active:scale-95"
                >
                  <Mail size={20} />
                  <span>Encrypted Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dept Leaders Matrix */}
      <section className="py-24 md:py-48">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="text-center mb-32">
            <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Hierarchy Log</span>
            <h2 className="text-5xl md:text-8xl font-ubuntu font-bold text-brand-beige-black tracking-tighter leading-none">
              Department <span className="text-brand-emerald">Nodes.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {TEAM.slice(1).map((member) => (
              <div key={member.id} className="group bg-white p-8 rounded-[4rem] border border-slate-100 shadow-xl hover:shadow-brand-emerald/10 transition-all duration-700 hover:-translate-y-4">
                <div className="relative mb-10 overflow-hidden rounded-[3rem] aspect-[4/5] border border-slate-50">
                  <div className="absolute inset-0 bg-brand-emerald/0 group-hover:bg-brand-emerald/10 transition-all z-10 duration-700"></div>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110" />

                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-brand-beige-black/80 backdrop-blur-2xl rounded-3xl border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 z-20">
                    <p className="text-white text-xs font-medium leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="text-center px-4">
                  <h3 className="text-3xl font-ubuntu font-bold text-brand-beige-black mb-2 tracking-tight group-hover:text-brand-emerald transition-colors">{member.name}</h3>
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                    <p className="text-brand-emerald font-black text-[10px] uppercase tracking-[0.3em]">{member.role}</p>
                  </div>

                  <div className="flex justify-center gap-4">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="w-14 h-14 rounded-2xl bg-brand-beige-white flex items-center justify-center text-slate-400 hover:bg-brand-beige-black hover:text-white transition-all shadow-inner hover:-rotate-6">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.socials.email && (
                      <a href={`mailto:${member.socials.email}`} className="w-14 h-14 rounded-2xl bg-brand-beige-white flex items-center justify-center text-slate-400 hover:bg-brand-beige-black hover:text-white transition-all shadow-inner hover:rotate-6">
                        <Mail size={20} />
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

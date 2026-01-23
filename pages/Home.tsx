
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Zap, ShieldCheck, Globe, ArrowRight,
  TrendingUp, Droplets, Users, Package,
  CheckCircle2, Star, Quote, Shield, RefreshCw, Truck
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { PARTNER_DETAILS, TESTIMONIALS, PROCESS_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-slate-50">
      <HeroSlider />

      {/* Feature Section - Horizontal Scroll on Mobile */}
      <section className="py-24 md:py-48 relative overflow-hidden bg-brand-beige-white">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="text-center mb-20 md:mb-32 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-emerald" />
              <span className="text-brand-emerald font-black tracking-[0.4em] uppercase text-xs">Innovation Hub</span>
              <div className="h-px w-8 bg-brand-emerald" />
            </div>
            <h2 className="text-5xl md:text-8xl font-ubuntu font-bold text-brand-beige-black mb-10 tracking-tighter leading-[0.9]">
              Biotech For <span className="text-brand-emerald">Modern</span> Farming.
            </h2>
            <p className="text-slate-500 leading-relaxed text-xl md:text-2xl font-medium max-w-2xl mx-auto">
              Science-backed solutions designed to optimize yield and health across Bangladesh's agricultural sector.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-12 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {[
              { icon: Award, title: "Premium Grade", desc: "Rigorous ISO-compliant testing ensures only the highest grade materials." },
              { icon: Zap, title: "Nano-Tech", desc: "Utilizing advanced enzyme technology from world leaders like VTR Bio-Tech." },
              { icon: ShieldCheck, title: "Field Advice", desc: "Consultancy from industry leaders with over 35 years of specialized leadership." },
              { icon: Globe, title: "Global Axis", desc: "Strategic alliances with Sichuan Chanhen for best-in-class mineral sources." }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="min-w-[300px] md:min-w-0 snap-center bg-white p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-emerald/10 hover:-translate-y-4 transition-all duration-700 group border border-slate-100"
              >
                <div className="w-20 h-20 bg-brand-beige-white text-brand-emerald rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-emerald group-hover:text-white transition-all duration-500 shadow-inner">
                  <feature.icon size={40} />
                </div>
                <h3 className="text-3xl font-ubuntu font-bold text-brand-beige-black mb-6 tracking-tight leading-none">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Premium Redesign */}
      <section className="py-24 md:py-48 bg-brand-beige-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-emerald/[0.03] -skew-x-12 transform translate-x-1/4" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Visual Content (Left Side on LG) */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-emerald to-brand-gold rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="img/slide/slide-2.jpg"
                    alt="Innovation in Agriculture"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black/80 via-transparent to-transparent" />

                  {/* Floating Metric Card */}
                  <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-brand-emerald rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-emerald/30">
                        <Users size={32} />
                      </div>
                      <div>
                        <p className="text-4xl font-ubuntu font-bold text-white leading-none">10,000+</p>
                        <p className="text-emerald-300 font-bold text-xs uppercase tracking-widest mt-1">Farmers Empowered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CEO Small Card - Subtle inclusion */}
              <div className="absolute -top-10 -right-6 md:right-10 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-emerald">
                  <img src="img/team/1.jpg" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-ubuntu font-bold text-slate-900 leading-none">Atiar Rahman</p>
                  <p className="text-[10px] text-brand-emerald font-black uppercase tracking-tighter mt-1">Founder & CEO</p>
                </div>
              </div>
            </div>

            {/* Text Content (Right Side on LG) */}
            <div className="lg:col-span-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-brand-emerald" />
                  <span className="text-brand-emerald font-black tracking-[0.4em] uppercase text-xs">Our Story</span>
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-ubuntu font-bold text-brand-beige-black mb-10 leading-[0.9] tracking-tighter">
                  Nurturing <span className="text-brand-emerald">Growth</span> Since 2010.
                </h2>

                <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
                  AR Animal Health Ltd stands at the intersection of traditional expertise and modern biotechnology. We're not just suppliers; we are partners in Bangladesh's agricultural transformation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                  {[
                    { title: "Scientific Integrity", desc: "Data-driven nutrition solutions." },
                    { title: "Global Network", desc: "Partnerships with world leaders." }
                  ].map((cite, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-ubuntu font-bold text-slate-900 mb-2">{cite.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{cite.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <Link to="/about" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-beige-black hover:bg-brand-emerald text-white px-12 py-6 rounded-2xl font-ubuntu font-bold text-xl shadow-2xl transition-all duration-500 group">
                    <span>Explore History</span>
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                        <img src={`img/testimonials/${i % 3 + 1}.jpg`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-emerald flex items-center justify-center text-white text-xs font-bold">+5k</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Process Section - Technical Workflow */}
      <section className="py-32 md:py-60 bg-brand-beige-black text-white relative overflow-hidden">
        {/* Background Decorative Mesh */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-brand-beige-white to-transparent opacity-10" />

        <div className="container mx-auto px-6 relative z-10 max-w-[1900px]">
          <div className="text-center mb-24 md:mb-40">
            <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Supply Chain</span>
            <h2 className="text-5xl md:text-8xl font-ubuntu font-bold mb-10 tracking-tighter leading-none">
              Precision In <span className="text-brand-emerald">Execution.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium text-xl leading-relaxed">From global sourcing to nationwide distribution, we maintain the terminal standards of safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, idx) => {
              const IconMap: any = { Globe, Shield, Zap, TrendingUp };
              const Icon = IconMap[step.icon] || Globe;
              return (
                <div key={idx} className="relative group">
                  <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 h-full hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-4 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-brand-emerald rounded-2xl flex items-center justify-center mb-10 shadow-2xl shadow-brand-emerald/30 group-hover:rotate-12 transition-transform">
                      <Icon size={36} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-ubuntu font-bold mb-6 tracking-tight">{step.title}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed mb-10">{step.desc}</p>
                    <div className="absolute top-12 right-12 text-7xl font-ubuntu font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors leading-none">0{step.id}</div>

                    {/* Status Light */}
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Active Node</span>
                    </div>
                  </div>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-brand-emerald to-transparent opacity-30 z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories Preview - Premium Cards */}
      <section className="py-32 md:py-60 bg-brand-beige-white">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-40">
            <div className="max-w-2xl">
              <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Intelligence Center</span>
              <h2 className="text-5xl md:text-8xl font-ubuntu font-bold text-brand-beige-black tracking-tighter leading-none">
                Technical <span className="text-brand-emerald">Catalog.</span>
              </h2>
            </div>
            <Link to="/products" className="mt-12 md:mt-0 group flex items-center gap-6 bg-brand-beige-black text-white px-12 py-6 rounded-2xl font-ubuntu font-bold text-xl hover:bg-brand-emerald transition-all shadow-2xl">
              <span>View Data Sheets</span>
              <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { name: "Bio-Additives", count: "20+ Solutions", icon: Droplets, img: "img/services-1.jpg" },
              { name: "Mineral Matrix", count: "10+ Nodes", icon: TrendingUp, img: "img/services-2.jpg" },
              { name: "Vet-Care", count: "15+ Systems", icon: ShieldCheck, img: "img/services-3.jpg" }
            ].map((cat, idx) => (
              <Link to="/products" key={idx} className="group relative h-[600px] overflow-hidden rounded-[4rem] shadow-2xl border-4 border-white">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-outgrayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black via-brand-beige-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                <div className="absolute top-10 right-10 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:bg-brand-emerald group-hover:border-brand-emerald transition-all duration-500">
                  <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-700" size={24} />
                </div>

                <div className="absolute bottom-0 left-0 p-12 text-white w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <cat.icon className="text-brand-emerald mb-6" size={56} />
                  <h3 className="text-4xl md:text-5xl font-ubuntu font-bold mb-3 tracking-tighter leading-none">{cat.name}</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-brand-emerald" />
                    <p className="text-slate-300 font-black tracking-[0.2em] text-[10px] uppercase">{cat.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Terminal Feedback */}
      <section className="py-32 md:py-60 bg-brand-beige-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-emerald to-transparent opacity-20" />

        <div className="container mx-auto px-6 max-w-[1900px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-brand-gold font-black tracking-[0.5em] uppercase text-xs mb-6 block">Validation</span>
              <h2 className="text-5xl md:text-8xl font-ubuntu font-bold mb-10 tracking-tighter leading-none">
                Field <span className="text-brand-emerald">Intelligence.</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl">
                Real-world feedback from leading agricultural conglomerates across the region.
              </p>
            </div>

            <div className="space-y-10">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 relative group hover:bg-white/[0.08] transition-all duration-700">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-brand-emerald rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-emerald/30">
                    <Quote className="text-white" size={32} />
                  </div>
                  <p className="text-2xl font-medium text-slate-300 italic mb-10 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand-emerald/20 border border-brand-emerald/30 overflow-hidden">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <h4 className="text-xl font-ubuntu font-bold text-white tracking-tight">{t.name}</h4>
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-brand-emerald" />
                        <p className="text-brand-gold font-black uppercase tracking-[0.2em] text-[10px]">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners - Dynamic Grid */}
      <section className="py-32 md:py-60 bg-brand-beige-white">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-4">
              <span className="text-brand-emerald font-black tracking-[0.4em] uppercase text-xs mb-6 block">Global Network</span>
              <h2 className="text-5xl md:text-7xl font-ubuntu font-bold text-brand-beige-black tracking-tighter leading-tight mb-10">Strategic <br /><span className="text-brand-emerald">Allies.</span></h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-12">Collaborating with global leaders in biotechnology to bring terminal solutions to Bangladesh.</p>
              <Link to="/about" className="inline-flex items-center gap-4 text-brand-beige-black hover:text-brand-emerald font-black uppercase tracking-[0.2em] text-xs transition-colors group">
                <span>View All Collaborators</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {PARTNER_DETAILS.map((p, idx) => (
                <div key={idx} className="group relative">
                  <div className="bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 grayscale hover:grayscale-0 border border-slate-100 flex flex-col items-center justify-center aspect-[4/5]">
                    <h3 className="text-3xl font-ubuntu font-bold text-slate-200 group-hover:text-brand-emerald transition-colors text-center uppercase break-words leading-none">{p.name}</h3>
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 rounded-full bg-brand-emerald" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">Global Provider</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Stats / Impact */}
      <section className="py-32 md:py-60 bg-brand-emerald relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-beige-black/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4" />

        <div className="container mx-auto px-6 max-w-[1900px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              { label: "Technical Leadership", val: "35Y+", icon: Award },
              { label: "Units Distributed", val: "1M+", icon: Package },
              { label: "Districts Served", val: "64D", icon: Globe }
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left group">
                <div className="mb-10 w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
                  <stat.icon size={40} />
                </div>
                <h2 className="text-7xl md:text-9xl font-ubuntu font-bold text-white mb-6 tracking-tighter leading-none">{stat.val}</h2>
                <p className="text-white/80 font-ubuntu font-bold text-2xl tracking-tight">{stat.label}</p>
                <div className="h-1.5 w-20 bg-brand-gold mt-10 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

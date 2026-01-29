
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
      <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden bg-brand-beige-white">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-emerald" />
              <span className="font-black tracking-[0.4em] uppercase text-xs"><span className="text-brand-emerald">Innovation</span> <span className="text-red-900">Hub</span></span>
              <div className="h-px w-8 bg-red-900" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-brand-beige-black mb-8 tracking-tighter leading-tight max-w-3xl mx-auto">
              <span className="text-brand-emerald">Biotech</span> For <span className="text-brand-gold">Modern</span> Farming.
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Science-backed solutions designed to optimize yield and health across Bangladesh's agricultural sector.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-12 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {[
              { icon: Award, title: "Premium Grade", desc: "Rigorous ISO-compliant testing ensures only the highest grade materials.", img: "img/gallery/gallery-1.jpg" },
              { icon: Zap, title: "Nano-Tech", desc: "Utilizing advanced enzyme technology from world leaders like VTR Bio-Tech.", img: "img/gallery/gallery-3.jpg" },
              { icon: ShieldCheck, title: "Field Advice", desc: "Consultancy from industry leaders with over 35 years of specialized leadership.", img: "img/gallery/gallery-5.jpg" },
              { icon: Globe, title: "Global Axis", desc: "Strategic alliances with Sichuan Chanhen for best-in-class mineral sources.", img: "img/gallery/gallery-7.jpg" }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="min-w-[320px] md:min-w-0 snap-center bg-white p-10 rounded-[4rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-red/10 hover:-translate-y-4 transition-all duration-700 group border border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                  <img src={feature.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-16 bg-brand-beige-white text-brand-red rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-500 shadow-inner">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-outfit font-bold text-brand-beige-black mb-4 tracking-tight leading-none">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Premium Redesign */}
      <section className="py-20 md:py-32 lg:py-40 bg-brand-beige-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/[0.03] -skew-x-12 transform translate-x-1/4" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Visual Content (Left Side on LG) */}
            <div className="lg:col-span-6 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-red to-brand-gold rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
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
                      <div className="w-16 h-16 bg-brand-emerald rounded-2xl flex items-center justify-center text-red-900 shadow-lg shadow-emerald-600/30">
                        <Users size={32} />
                      </div>
                      <div>
                        <p className="text-4xl font-ubuntu font-bold text-white leading-none">10,000+</p>
                        <p className="text-brand-emerald font-bold text-xs uppercase tracking-widest mt-1">Farmers Empowered</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CEO Small Card - Subtle inclusion */}
              <div className="absolute -top-10 -right-6 md:right-10 bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-red">
                  <img src="img/team/1.jpg" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-ubuntu font-black text-brand-emerald leading-none text-xl">Atiar Rahman</p>
                  <p className="text-[10px] text-red-900 font-black uppercase tracking-tighter mt-1">Founder & CEO</p>
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

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-brand-beige-black mb-8 leading-tight tracking-tighter max-w-xl">
                  Nurturing <span className="text-brand-red">Growth</span> Since <span className="text-brand-emerald">2010</span>.
                </h2>

                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-xl">
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
                  <Link to="/about" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-beige-black hover:bg-brand-red text-white px-12 py-6 rounded-2xl font-ubuntu font-bold text-xl shadow-2xl transition-all duration-500 group">
                    <span>Explore History</span>
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                        <img src={`img/testimonials/${i % 3 + 1}.jpg`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-brand-red flex items-center justify-center text-white text-xs font-bold">+5k</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Process Section - Technical Workflow */}
      <section className="py-20 md:py-40 lg:py-48 bg-brand-beige-black text-white relative overflow-hidden">
        {/* Background Decorative Mesh */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #7f1d1d 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-brand-beige-white to-transparent opacity-10" />

        <div className="container mx-auto px-6 relative z-10 max-w-[1900px]">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-brand-emerald font-black tracking-[0.5em] uppercase text-xs mb-6 block">Supply Chain</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-8 tracking-tighter leading-tight max-w-4xl mx-auto">
              Precision In <span className="text-brand-emerald">Execution.</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium text-lg md:text-xl leading-relaxed">
              From global sourcing to nationwide distribution, we maintain the terminal standards of safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, idx) => {
              const IconMap: any = { Globe, Shield, Zap, TrendingUp };
              const Icon = IconMap[step.icon] || Globe;
              return (
                <div key={idx} className="relative group">
                  <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 h-full hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-4 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-brand-gold rounded-2xl flex items-center justify-center mb-10 shadow-2xl shadow-brand-gold/30 group-hover:rotate-12 transition-transform">
                      <Icon size={36} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-ubuntu font-bold mb-6 tracking-tight text-brand-emerald">{step.title}</h3>
                    <p className="text-slate-400 font-medium leading-relaxed mb-10">{step.desc}</p>
                    <div className="absolute top-12 right-12 text-7xl font-ubuntu font-bold text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors leading-none">0{step.id}</div>

                    {/* Status Light */}
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">Active Node</span>
                    </div>
                  </div>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-brand-gold to-transparent opacity-30 z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Categories Preview - Premium Cards */}
      <section className="py-20 md:py-32 bg-brand-beige-white">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
            <div className="max-w-2xl">
              <span className="text-brand-red font-black tracking-[0.5em] uppercase text-xs mb-4 block">Intelligence Center</span>
              <h2 className="text-4xl md:text-6xl font-outfit font-bold text-brand-beige-black tracking-tighter leading-tight">
                Technical <span className="text-brand-red">Catalog.</span>
              </h2>
            </div>
            <Link to="/products" className="mt-8 md:mt-0 group flex items-center gap-3 bg-brand-beige-black text-white px-6 py-3 rounded-xl font-inter font-bold text-base hover:bg-brand-red transition-all shadow-xl">
              <span>Catalog</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { name: "Bio-Additives", count: "20+ Solutions", icon: Droplets, img: "img/services-1.jpg" },
              { name: "Mineral Matrix", count: "10+ Nodes", icon: TrendingUp, img: "img/services-2.jpg" },
              { name: "Vet-Care", count: "15+ Systems", icon: ShieldCheck, img: "img/services-3.jpg" }
            ].map((cat, idx) => (
              <Link to="/products" key={idx} className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-[3rem] shadow-xl border-4 border-white">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s] ease-outgrayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black via-brand-beige-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center text-white border border-white/20 group-hover:bg-brand-red group-hover:border-brand-red transition-all duration-500">
                  <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-700" size={20} />
                </div>

                <div className="absolute bottom-0 left-0 p-8 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <cat.icon className="text-brand-gold mb-4" size={40} />
                  <h3 className="text-3xl md:text-4xl font-ubuntu font-bold mb-2 tracking-tighter leading-none">{cat.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-brand-red" />
                    <p className="text-slate-300 font-black tracking-[0.2em] text-[10px] uppercase">{cat.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Achievements - Combined Section */}
      <section className="py-20 md:py-40 lg:py-48 bg-brand-red relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-beige-black/5" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/4" />

        <div className="container mx-auto px-6 max-w-[1900px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Column - Achievements */}
            <div className="lg:col-span-5">
              <span className="bg-emerald-700 text-white px-4 py-2 rounded-lg font-black tracking-[0.5em] uppercase text-xs mb-6 inline-block">Validation</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-12 tracking-tighter leading-tight text-white">
                Field <span className="bg-emerald-700 px-3 py-1 rounded-lg">Intelligence.</span>
              </h2>

              {/* Achievement Stats */}
              <div className="space-y-12">
                {[
                  { label: "Technical Leadership", val: "35Y+", icon: Award },
                  { label: "Units Distributed", val: "1M+", icon: Package },
                  { label: "Districts Served", val: "64D", icon: Globe }
                ].map((stat, idx) => (
                  <div key={idx} className="group flex items-center gap-8">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform flex-shrink-0">
                      <stat.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-2 tracking-tighter leading-none">{stat.val}</h3>
                      <p className="text-white/80 font-inter font-bold text-base tracking-tight">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Testimonials */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-6">
                {TESTIMONIALS.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 p-8 rounded-3xl border border-white/10 relative group hover:bg-white/10 transition-all duration-500 backdrop-blur-sm"
                  >
                    {/* Quote Icon */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-white/10 border-2 border-brand-emerald rounded-xl flex items-center justify-center shadow-xl shadow-emerald-600/30">
                      <Quote className="text-brand-emerald" size={20} />
                    </div>

                    {/* Quote Text */}
                    <p className="text-base md:text-lg font-medium text-white/90 italic mb-6 leading-relaxed pl-4">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pl-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-gold/20 border border-brand-gold/30 overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-outfit font-bold text-white tracking-tight">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-brand-gold" />
                          <p className="text-brand-gold font-black uppercase tracking-wider text-[9px]">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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

export default Home;

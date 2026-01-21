
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Zap, ShieldCheck, Globe, ArrowRight,
  TrendingUp, Droplets, Users, Package,
  CheckCircle2
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { PARTNER_DETAILS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-slate-50">
      <HeroSlider />

      {/* Feature Section - Horizontal Scroll on Mobile */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
            <span className="text-emerald-600 font-extrabold tracking-widest uppercase text-xs md:sm mb-4 block animate-bounce">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">Biotech for Modern Farming</h2>
            <p className="text-slate-500 leading-relaxed text-lg md:text-xl font-medium">
              We provide science-backed solutions designed to optimize crop yield and animal health across Bangladesh's agricultural sector.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {[
              { icon: Award, title: "Premium Quality", desc: "Rigorous ISO-compliant testing ensures only the highest grade materials." },
              { icon: Zap, title: "Biotech Innovation", desc: "Utilizing advanced enzyme technology from world leaders like VTR Bio-Tech." },
              { icon: ShieldCheck, title: "Trusted Advice", desc: "Consultancy from industry leaders with over 35 years of poultry sector leadership." },
              { icon: Globe, title: "Global Partners", desc: "Strategic alliances with Sichuan Chanhen and Esigma for best-in-class mineral sources." }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="min-w-[280px] md:min-w-0 snap-center bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-500 group border border-slate-100/50"
              >
                <div className="w-16 h-16 bg-slate-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500 shadow-inner">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Highlight - Marquee Style Concept for Mobile */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20">
            <div className="max-w-xl">
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Partners</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Global Leaders</h2>
            </div>
            <Link to="/about" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-emerald-600 font-bold transition-colors">
              <span>View All Partners</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {PARTNER_DETAILS.map((p, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center p-8 rounded-[3rem] bg-slate-50 hover:bg-emerald-600 transition-colors duration-500 cursor-default">
                <div className="h-20 md:h-24 w-full flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 group-hover:brightness-0 group-hover:invert transition-all duration-500 opacity-60 group-hover:opacity-100">
                  {/* Using text fallback for logos if images fail, or stylized text */}
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-slate-300 group-hover:text-white">{p.name}</h3>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 group-hover:text-emerald-200">Global Provider</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview - Stacked Cards */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">Catalog</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Advanced Nutrition</h2>
            </div>
            <Link to="/products" className="mt-6 md:mt-0 group flex items-center space-x-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-colors shadow-lg">
              <span>View All Products</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Feed Additives", count: "20+ Products", icon: Droplets, img: "img/services-1.jpg" },
              { name: "Minerals", count: "10+ Products", icon: TrendingUp, img: "img/services-2.jpg" },
              { name: "Veterinary Health", count: "15+ Products", icon: ShieldCheck, img: "img/services-3.jpg" }
            ].map((cat, idx) => (
              <Link to="/products" key={idx} className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-[3rem] shadow-xl">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-300">
                  <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 p-10 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <cat.icon className="text-emerald-400 mb-4" size={40} />
                  <h3 className="text-3xl md:text-4xl font-black mb-2 tracking-tight leading-none">{cat.name}</h3>
                  <p className="text-slate-300 font-bold tracking-wide text-sm uppercase">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Teaser - Split Layout */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-50" />

              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10">
                <img src="img/team/1.jpg" alt="AR Animal Health CEO" className="w-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:hidden"></div>
                <div className="absolute bottom-6 left-6 right-6 lg:hidden text-white">
                  <p className="font-bold">- Mr. Atiar Rahman, CEO</p>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 max-w-sm border border-slate-100">
                <p className="text-slate-600 italic mb-6 leading-relaxed font-medium text-lg">"Our mission is to nurture the livestock of our nation with world-class biotechnology and integrity."</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">AR</div>
                  <div>
                    <p className="font-black text-slate-900 leading-none">Mr. Atiar Rahman</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Founding CEO</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">Dedicated to Nutritional Excellence</h2>
              <p className="text-slate-600 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                Since 2010, AR Animal Health Ltd has been a cornerstone of Bangladesh's veterinary sector. We combine deep local expertise with world-class scientific partnerships to deliver results that matter.
              </p>
              <ul className="space-y-6 mb-12">
                {["Pioneering animal health innovation", "Strategic partnerships with Sichuan Chanhen & VTR", "Data-driven scientific nutrition approach", "Committed to sustainable national food security"].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4 text-slate-700 font-bold md:items-center">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-1 md:mt-0">
                      <CheckCircle2 size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center gap-3 bg-slate-900 hover:bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-slate-900/20 transition-all duration-300">
                <span>Read Full Story</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Grid Layout */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-emerald-800/50">
            {[
              { label: "Farmers Served", val: "10k+", icon: Users },
              { label: "Products", val: "60+", icon: Package },
              { label: "Years Experience", val: "35+", icon: Award },
              { label: "Partner Brands", val: "12+", icon: Globe }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-4">
                <stat.icon size={32} className="mb-6 text-emerald-400" />
                <span className="text-5xl md:text-6xl font-black mb-3 tracking-tighter">{stat.val}</span>
                <span className="text-emerald-200/80 font-bold tracking-widest uppercase text-[10px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

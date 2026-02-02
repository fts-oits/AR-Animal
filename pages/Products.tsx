
import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, Info, Tag, X, CheckCircle, MessageSquare, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-brand-beige-white min-h-screen pb-32">
      {/* Terminal Header */}
      <section className="bg-brand-beige-black pt-48 pb-56 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-gold/10"></div>
        <div className="absolute -bottom-1 w-[120%] h-40 bg-brand-beige-white -rotate-2 translate-x-[-10%] z-20"></div>

        <div className="container mx-auto px-6 relative z-30 max-w-[1900px]">
          <div className="max-w-4xl">
            <span className="text-brand-red font-black tracking-[0.5em] uppercase text-xs mb-6 block">Intelligence Index</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-8 tracking-tighter leading-tight max-w-3xl">
              Technical <span className="text-brand-red">Catalog.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              Precision-engineered biotechnology solutions for the modern poultry spectrum.
            </p>
          </div>
        </div>
      </section>

      {/* Control Strip */}
      <section className="sticky top-0 z-40 bg-brand-beige-white/80 backdrop-blur-2xl py-6 border-b border-brand-red/10 shadow-2xl">
        <div className="container mx-auto px-6 max-w-[1900px]">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Terminal Search */}
            <div className="relative w-full lg:w-[400px]">
              <input
                type="text"
                placeholder="Query Database..."
                className="w-full bg-white border-2 border-slate-100 rounded-2xl px-14 py-4 focus:outline-none focus:border-brand-gold transition-all font-ubuntu font-bold text-slate-800 placeholder-slate-300 shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-gold" size={20} />
            </div>

            {/* Matrix Filters */}
            <div className="hidden lg:flex items-center gap-3">
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2 ${selectedCategory === cat
                    ? 'bg-brand-beige-black text-white border-brand-beige-black shadow-xl shadow-brand-beige-black/20'
                    : 'bg-white text-slate-400 border-slate-100 hover:border-brand-gold hover:text-brand-gold'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Interface */}
            <button
              className="lg:hidden w-full flex items-center justify-between bg-white border-2 border-slate-100 px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className="flex items-center gap-4">
                <Filter size={18} className="text-brand-red" />
                <span>Node Filter: {selectedCategory}</span>
              </div>
              <ChevronDown size={18} className={`transform transition-transform duration-500 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Overlay */}
          <div className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${isFilterOpen ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid grid-cols-2 gap-3 pb-4">
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                  className={`px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${selectedCategory === cat
                    ? 'bg-brand-red text-white border-brand-red'
                    : 'bg-white text-slate-400 border-slate-100'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Output Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-[1900px]">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-[4rem] p-6 shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(127,29,29,0.2)] hover:-translate-y-3 transition-all duration-700 border border-slate-100 group flex flex-col h-full cursor-pointer overflow-hidden"
                  onClick={() => setSelectedProduct(p)}
                >
                  <div className="aspect-square rounded-[3rem] relative overflow-hidden bg-brand-beige-white mb-8 border border-slate-100 group-hover:border-brand-red/20 transition-colors">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain p-16 group-hover:scale-105 transition-transform duration-700 mix-blend-multiply relative z-10"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        <span className="text-brand-beige-black text-[10px] font-black uppercase tracking-widest">
                          {p.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-outfit font-bold text-brand-beige-black mb-4 tracking-tight leading-tight group-hover:text-brand-red transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-slate-500 mb-10 leading-relaxed flex-grow text-lg font-medium line-clamp-3">
                      {p.description}
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                      <div className="flex items-center gap-2">
                        <Tag size={16} className="text-brand-gold" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Biological Node</span>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-brand-beige-black text-white flex items-center justify-center group-hover:bg-brand-red transition-colors">
                        <Info size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-48 text-center bg-white rounded-[4rem] border border-dashed border-slate-200 shadow-inner">
              <div className="w-32 h-32 bg-brand-beige-white rounded-full flex items-center justify-center mb-8 text-slate-300">
                <Search size={48} className="animate-pulse" />
              </div>
              <h3 className="text-4xl font-ubuntu font-bold text-brand-beige-black mb-4 tracking-tighter">Zero Data Points Found</h3>
              <p className="text-slate-400 text-xl font-medium mb-12 max-w-md">The requested entity does not exist in our current biotechnology framework.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="bg-brand-beige-black text-white font-ubuntu font-bold px-12 py-5 rounded-2xl hover:bg-brand-red transition-all shadow-2xl active:scale-95 text-xs uppercase tracking-widest"
              >
                Reset Engine
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Logic Modal Interface */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center lg:p-12">
          <div
            className="absolute inset-0 bg-brand-beige-black/80 backdrop-blur-xl transition-opacity duration-700"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-white w-full lg:max-w-6xl h-[95vh] lg:h-auto lg:max-h-[90vh] overflow-y-auto rounded-t-[4rem] lg:rounded-[5rem] shadow-[0_0_100px_rgba(5,150,105,0.3)] flex flex-col lg:flex-row animate-in slide-in-from-bottom-20 duration-700">
            {/* Close Command */}
            <button
              className="absolute top-10 right-10 z-[110] w-14 h-14 bg-brand-beige-white hover:bg-brand-red hover:text-white rounded-3xl flex items-center justify-center text-brand-beige-black transition-all shadow-xl border border-slate-100"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={24} />
            </button>

            {/* Visual Node */}
            <div className="lg:w-1/2 bg-brand-beige-white p-12 lg:p-20 flex items-center justify-center min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(127,29,29,0.4)_0%,transparent_70%)]" />
              <div className="absolute inset-0 bg-grid-slate-200/[0.05] [mask-image:radial-gradient(white,transparent)]" />
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain mix-blend-multiply relative z-10 p-12 lg:p-20"
              />
            </div>

            {/* Data Node */}
            <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-xs leading-none">{selectedProduct.category}</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-brand-beige-black mb-8 tracking-tighter leading-tight">{selectedProduct.name}</h2>

              <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium">
                {selectedProduct.description}
              </p>

              <div className="mb-12 bg-brand-beige-white p-10 rounded-[3rem] border border-slate-100 shadow-inner">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Technical Specifications</h4>
                <div className="grid grid-cols-1 gap-4">
                  {selectedProduct.specifications.map((spec, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <CheckCircle className="text-brand-red group-hover:text-white" size={14} />
                      </div>
                      <span className="text-brand-beige-black font-bold text-lg leading-tight">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <button className="bg-brand-red hover:bg-red-800 text-white font-ubuntu font-bold py-4 rounded-3xl flex items-center justify-center gap-4 transition-all active:scale-95 shadow-2xl shadow-brand-red/30 text-xs uppercase tracking-widest">
                  <MessageSquare size={20} />
                  <span>Contact Sales</span>
                </button>
                <button className="bg-white border-2 border-slate-100 hover:border-brand-gold text-brand-beige-black hover:text-brand-gold font-ubuntu font-bold py-4 rounded-3xl flex items-center justify-center gap-4 transition-all active:scale-95 text-xs uppercase tracking-widest">
                  <Download size={20} />
                  <span>Data Sheet (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Products;

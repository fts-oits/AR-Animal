import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, Info, Tag, X, CheckCircle, MessageSquare, ChevronDown } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';
import { searchProducts } from '../utils/searchUtils';
import ContactSalesModal from '../components/ContactSalesModal';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) {
      setSearchTerm(query);
      // Optional: scroll to grid if needed
      const grid = document.getElementById('product-grid');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let results = PRODUCTS;

    // 1. Fuzzy Search
    if (searchTerm) {
      results = searchProducts(PRODUCTS, searchTerm);
    }

    // 2. Category Filter
    if (selectedCategory !== 'All') {
      results = results.filter(p => p.category === selectedCategory);
    }

    return results;
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
            <div className="hidden lg:flex items-center justify-center gap-3 flex-wrap">
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
      <section className="py-24" id="product-grid">
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
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 lg:p-8">
          <div
            className="absolute inset-0 bg-brand-beige-black/80 backdrop-blur-xl transition-opacity duration-700"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-white w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-t-[3rem] sm:rounded-[4rem] shadow-[0_0_100px_rgba(5,150,105,0.3)] flex flex-col animate-in slide-in-from-bottom-20 duration-700">
            {/* Close Command */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[110] w-12 h-12 sm:w-14 sm:h-14 bg-white/90 hover:bg-brand-red hover:text-white rounded-2xl sm:rounded-3xl flex items-center justify-center text-brand-beige-black transition-all shadow-xl border border-slate-100"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={20} className="sm:hidden" />
              <X size={24} className="hidden sm:block" />
            </button>

            {/* Visual Node - Large Image Area */}
            <div className="w-full bg-gradient-to-br from-brand-beige-white to-slate-50 p-8 sm:p-12 md:p-16 lg:p-20 flex items-center justify-center min-h-[350px] sm:min-h-[450px] md:min-h-[500px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(127,29,29,0.4)_0%,transparent_70%)]" />
              <div className="absolute inset-0 bg-grid-slate-200/[0.05] [mask-image:radial-gradient(white,transparent)]" />

              {/* Category Badge */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/95 backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-slate-200 shadow-lg">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-brand-red font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs leading-none">{selectedProduct.category}</span>
                </div>
              </div>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-w-md sm:max-w-lg md:max-w-xl h-full object-contain drop-shadow-2xl relative z-10"
              />
            </div>

            {/* Data Node - Content Below */}
            <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16 bg-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-brand-beige-black mb-4 sm:mb-6 tracking-tighter leading-tight">{selectedProduct.name}</h2>

              <p className="text-slate-500 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed font-medium max-w-4xl">
                {selectedProduct.description}
              </p>

              {/* Technical Specifications */}
              <div className="mb-8 sm:mb-10 bg-gradient-to-br from-brand-beige-white to-slate-50 p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-sm">
                <h4 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest mb-5 sm:mb-6 flex items-center gap-2">
                  <div className="w-1 h-4 bg-brand-red rounded-full" />
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {selectedProduct.specifications.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4 group bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 hover:border-brand-red/20 hover:shadow-md transition-all">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red group-hover:border-brand-red transition-colors">
                        <CheckCircle className="text-brand-red group-hover:text-white transition-colors" size={14} />
                      </div>
                      <span className="text-brand-beige-black font-bold text-sm sm:text-base leading-tight flex-1">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsContactModalOpen(true);
                  }}
                  className="flex-1 bg-brand-red hover:bg-red-800 text-white font-ubuntu font-bold py-5 sm:py-6 rounded-2xl sm:rounded-3xl flex items-center justify-center gap-3 sm:gap-4 transition-all active:scale-95 shadow-2xl shadow-brand-red/30 text-xs sm:text-sm uppercase tracking-widest"
                >
                  <MessageSquare size={20} className="sm:hidden" />
                  <MessageSquare size={22} className="hidden sm:block" />
                  <span>Contact Sales Team</span>
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="sm:w-auto px-8 bg-slate-100 hover:bg-slate-200 text-brand-beige-black font-ubuntu font-bold py-5 sm:py-6 rounded-2xl sm:rounded-3xl flex items-center justify-center gap-3 transition-all active:scale-95 text-xs sm:text-sm uppercase tracking-widest"
                >
                  <X size={18} />
                  <span className="sm:inline">Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};


export default Products;

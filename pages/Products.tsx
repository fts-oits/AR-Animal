
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
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-emerald-600/10 opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <span className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Premium Catalog</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            Explore our range of premium additives, mineral sources, and veterinary solutions.
          </p>
        </div>
      </section>

      {/* Mobile Search & Filter Mobile Toggle */}
      <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100 py-4 transition-all">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-slate-100/50 border border-slate-200 rounded-full px-12 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all font-bold text-slate-700 placeholder-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center space-x-2 overflow-x-auto no-scrollbar max-w-full">
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${selectedCategory === cat
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-500 border-slate-200 hover:border-emerald-500 hover:text-emerald-600'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden w-full flex items-center justify-between bg-white border border-slate-200 px-6 py-3 rounded-full text-sm font-bold text-slate-700"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-emerald-600" />
                <span>Filter: {selectedCategory}</span>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Filter Dropdown */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isFilterOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}>
            <div className="flex flex-wrap gap-2 pb-2">
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${selectedCategory === cat
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-slate-500 border-slate-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-20 px-4 md:px-0">
        <div className="container mx-auto px-2 md:px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group flex flex-col h-full cursor-pointer relative"
                  onClick={() => setSelectedProduct(p)}
                >
                  <div className="h-64 rounded-[1.5rem] relative overflow-hidden bg-slate-50 mb-6">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/80 backdrop-blur text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 pb-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-slate-500 mb-6 leading-relaxed flex-grow text-sm font-medium line-clamp-3">
                      {p.description}
                    </p>

                    <button className="w-full bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300">
                      <span>View Details</span>
                      <Info size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-300">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 font-medium mb-8">Try adjusting your search or filter</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="bg-emerald-600 text-white font-bold px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center sm:p-6 animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-white w-full md:max-w-5xl h-[90vh] md:h-auto md:max-h-[90vh] overflow-y-auto rounded-t-[2.5rem] md:rounded-[3rem] shadow-2xl flex flex-col md:flex-row animate-in slide-in-from-bottom-10 duration-300">
            <button
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full flex items-center justify-center text-slate-500 transition-all"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={20} />
            </button>

            <div className="md:w-5/12 bg-slate-50 p-10 flex items-center justify-center min-h-[300px]">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="md:w-7/12 p-8 md:p-12 flex flex-col">
              <span className="text-emerald-600 font-black uppercase tracking-widest text-xs mb-3">{selectedProduct.category}</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter leading-none">{selectedProduct.name}</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                {selectedProduct.description}
              </p>

              <div className="mb-10 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Specifications</h4>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProduct.specifications.map((spec, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="text-emerald-500 mt-0.5" size={16} />
                      <span className="text-slate-700 font-bold text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all active:scale-95">
                  <MessageSquare size={18} />
                  <span>Request Quote</span>
                </button>
                <button className="bg-white border-2 border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-600 font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all active:scale-95">
                  <Download size={18} />
                  <span>Download Spec</span>
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

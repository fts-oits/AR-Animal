
import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, Info, Tag, X, CheckCircle, MessageSquare } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
      <section className="bg-emerald-600 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Catalog</h1>
          <p className="text-emerald-100 text-xl max-w-2xl leading-relaxed font-medium">
            Explore our range of premium additives, mineral sources, and veterinary solutions designed for high-performance agriculture.
          </p>
        </div>
      </section>

      {/* Filtering Section */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-lg shadow-sm py-6 border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-1/3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-slate-100 border border-slate-200 rounded-2xl px-12 py-4 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:bg-white focus:border-emerald-500 transition-all font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-4.5 text-slate-400" size={20} />
            </div>

            {/* Categories */}
            <div className="flex items-center space-x-3 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
              <div className="flex items-center text-slate-500 mr-2 font-bold text-sm uppercase tracking-widest">
                <Filter size={16} className="mr-2" />
                <span>Filter:</span>
              </div>
              {['All', ...Object.values(Category)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-8 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === cat 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-105' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-500 hover:text-emerald-600'
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((p) => (
                <div 
                  key={p.id} 
                  className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group flex flex-col h-full cursor-pointer"
                  onClick={() => setSelectedProduct(p)}
                >
                  <div className="h-80 relative overflow-hidden bg-slate-50">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
                        <Tag size={12} className="mr-2" />
                        {p.category}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed flex-grow text-lg line-clamp-2 font-medium">
                      {p.description}
                    </p>
                    
                    <button className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-5 rounded-[1.5rem] flex items-center justify-center space-x-2 shadow-xl active:scale-95 transition-all duration-300">
                      <Info size={20} />
                      <span>Product Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm border-2 border-dashed border-slate-200 max-w-4xl mx-auto">
              <Search size={48} className="mx-auto text-slate-300 mb-8" />
              <h3 className="text-3xl font-black text-slate-900 mb-4">No matching products</h3>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="bg-emerald-600 text-white font-bold px-10 py-4 rounded-full shadow-xl transition-all"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-12 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-white w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-[4rem] shadow-2xl flex flex-col lg:flex-row border border-white/20 animate-in zoom-in slide-in-from-bottom-10 duration-500">
            <button 
              className="absolute top-8 right-8 z-10 w-14 h-14 bg-slate-100 hover:bg-emerald-600 hover:text-white rounded-full flex items-center justify-center text-slate-900 shadow-xl transition-all"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={28} />
            </button>
            
            <div className="lg:w-5/12 h-[50vh] lg:h-auto relative overflow-hidden bg-slate-50 flex items-center justify-center">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full h-full object-contain p-12" 
              />
              <div className="absolute top-10 left-10">
                <span className="bg-emerald-600 text-white text-xs font-black px-6 py-3 rounded-full uppercase tracking-widest shadow-2xl">
                  {selectedProduct.category}
                </span>
              </div>
            </div>
            
            <div className="lg:w-7/12 p-10 lg:p-20 flex flex-col justify-center">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tighter">{selectedProduct.name}</h2>
              <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium">
                {selectedProduct.description}
              </p>
              
              <div className="mb-12">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Key Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProduct.specifications.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-500/30 transition-all">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-emerald-600" size={16} />
                      </div>
                      <span className="text-slate-700 font-bold text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="flex-grow bg-emerald-600 hover:bg-emerald-700 text-white font-black py-6 rounded-3xl flex items-center justify-center space-x-3 shadow-2xl shadow-emerald-600/20 active:scale-95 transition-all">
                  <Download size={24} />
                  <span>Technical Data Sheet</span>
                </button>
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-black py-6 px-10 rounded-3xl flex items-center justify-center space-x-3 active:scale-95 transition-all">
                  <MessageSquare size={24} />
                  <span>Quick Inquiry</span>
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

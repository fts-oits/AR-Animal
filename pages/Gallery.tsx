
import React, { useState, useEffect, useMemo } from 'react';
import { GALLERY } from '../constants';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Dynamic categories from data
  const categories = useMemo(() => {
    const cats = new Set(GALLERY.map(item => item.category));
    return ['All', ...Array.from(cats)].sort();
  }, []);

  const filteredItems = useMemo(() => {
    return activeTab === 'All' 
      ? GALLERY 
      : GALLERY.filter(item => item.category === activeTab);
  }, [activeTab]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/30 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Visual Excellence</h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Our state-of-the-art facilities and strategic presence across Bangladesh's agricultural landscape.
          </p>
        </div>
      </section>

      {/* Tabs Filter */}
      <section className="py-12 bg-white sticky top-20 z-30 shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelectedIndex(null); }}
                className={`px-10 py-4 rounded-3xl text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeTab === tab 
                  ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-600/30 scale-105' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group relative h-[450px] overflow-hidden rounded-[3rem] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-10 left-10 right-10 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-emerald-500 px-4 py-2 rounded-full mb-6 inline-block shadow-lg">
                      {item.category}
                    </span>
                    <h3 className="text-3xl font-black tracking-tight leading-none">{item.title}</h3>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 hover:bg-white hover:text-emerald-600 scale-75 group-hover:scale-100">
                    <Maximize2 size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Carousel */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-10 right-10 w-16 h-16 bg-white/10 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-all z-[110] shadow-2xl active:scale-90"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          {/* Nav Arrows */}
          <button 
            className="absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-[110] active:scale-90"
            onClick={prevImage}
            title="Previous Image"
          >
            <ChevronLeft size={40} />
          </button>
          
          <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center">
            <div className="relative group/img overflow-hidden rounded-[3rem] shadow-[0_0_100px_rgba(5,150,105,0.2)]">
              <img 
                src={filteredItems[selectedIndex].image} 
                alt={filteredItems[selectedIndex].title} 
                className="max-w-full max-h-[75vh] object-contain animate-in zoom-in slide-in-from-bottom-10 duration-700" 
              />
            </div>
            
            <div className="mt-12 text-center max-w-2xl animate-in fade-in slide-in-from-top-4 duration-1000">
              <span className="text-emerald-400 font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                {filteredItems[selectedIndex].category}
              </span>
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tighter leading-none">
                {filteredItems[selectedIndex].title}
              </h3>
              
              {/* Pagination Dots */}
              <div className="flex space-x-2 justify-center mt-8">
                {filteredItems.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${selectedIndex === i ? 'w-10 bg-emerald-500' : 'w-2 bg-white/20'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <button 
            className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-[110] active:scale-90"
            onClick={nextImage}
            title="Next Image"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

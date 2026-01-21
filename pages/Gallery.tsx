
import React, { useState, useEffect, useMemo } from 'react';
import { GALLERY } from '../constants';
import { Maximize2, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

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
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-24 text-center relative overflow-hidden rounded-b-[3rem] md:rounded-b-[4rem]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block">Our Work</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Visual Excellence</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            State-of-the-art facilities and strategic presence across Bangladesh.
          </p>
        </div>
      </section>

      {/* Tabs Filter - Sticky on Mobile */}
      <section className="sticky top-20 z-30 py-6 md:py-8 pointer-events-none">
        <div className="container mx-auto px-6">
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto gap-3 md:gap-4 md:justify-center dark-scrollbar pointer-events-auto pb-4 md:pb-0">
            {categories.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelectedIndex(null); }}
                className={`flex-shrink-0 px-6 md:px-8 py-3 rounded-full text-xs md:text-sm font-black tracking-widest uppercase transition-all duration-300 border ${activeTab === tab
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105'
                    : 'bg-white/80 backdrop-blur-md text-slate-500 border-slate-200 hover:border-emerald-500 hover:text-emerald-600'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 pt-4 md:pt-10 px-4 md:px-0">
        <div className="container mx-auto px-2 md:px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group break-inside-avoid relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay on hover (desktop) or always visible minimal info (mobile) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-emerald-300 mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-tight">{item.title}</h3>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Maximize2 size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Carousel */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-0 md:p-12 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-all z-[110] active:scale-90"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          {/* Nav Arrows - Hidden on mobile if swipe (not implemented) but we keep buttons */}
          <button
            className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-[110] active:scale-90"
            onClick={prevImage}
            title="Previous Image"
          >
            <ChevronLeft size={24} className="md:w-10 md:h-10" />
          </button>

          <div
            className="relative w-full h-full flex flex-col items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          // Prevent close when clicking content area
          >
            <div className="relative max-w-5xl w-full max-h-[70vh] md:max-h-[85vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].title}
                className="w-full h-full object-contain bg-black/50"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 md:p-10 text-center">
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-[10px] mb-2 block">
                  {filteredItems[selectedIndex].category}
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter">
                  {filteredItems[selectedIndex].title}
                </h3>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex space-x-2 justify-center mt-6">
              {filteredItems.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === i ? 'w-8 bg-emerald-500' : 'w-1.5 bg-white/20'}`}
                ></div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-[110] active:scale-90"
            onClick={nextImage}
            title="Next Image"
          >
            <ChevronRight size={24} className="md:w-10 md:h-10" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

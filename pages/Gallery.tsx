import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const NEW_GALLERY = [
  { id: '1', image: 'img/gallery/new/202e15b1-3da7-4731-bed0-4a427f0a98da.jpeg' },
  { id: '2', image: 'img/gallery/new/5dbe0efa-a8ec-46f8-8753-cdc191491fff.jpeg' },
  { id: '3', image: 'img/gallery/new/74d041bb-3351-42c0-b10b-9d98d6b54d08.jpeg' },
  { id: '4', image: 'img/gallery/new/IMG_9012.jpeg' },
  { id: '5', image: 'img/gallery/new/IMG_9019.jpeg' },
  { id: '6', image: 'img/gallery/new/IMG_9023.jpeg' },
  { id: '7', image: 'img/gallery/new/IMG_9046.jpeg' },
  { id: '8', image: 'img/gallery/new/IMG_9053.jpeg' },
  { id: '9', image: 'img/gallery/new/e70eb596-6203-496d-a472-64858f0190e0.jpeg' },
  { id: '10', image: 'img/gallery/new/f678486e-ddbe-44d8-ad1f-e01e540deb2d.jpeg' },
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Only show All, Products, and Facilities filters
  const categories = ['All', 'Products', 'Facilities'];

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
      setSelectedIndex((selectedIndex + 1) % NEW_GALLERY.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + NEW_GALLERY.length) % NEW_GALLERY.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="bg-brand-beige-white min-h-screen">
      {/* Visual Header */}
      <section className="bg-brand-beige-black pt-48 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 via-transparent to-brand-gold/10"></div>
        <div className="absolute -bottom-1 w-[120%] h-40 bg-amber-600 -rotate-2 translate-x-[-10%] z-20 shadow-2xl shadow-slate-800/50"></div>

        <div className="container mx-auto px-6 relative z-30 max-w-[1900px]">
          <div className="max-w-4xl">
            <span className="text-brand-red font-black tracking-[0.5em] uppercase text-xs mb-6 block">Optical Feed</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white mb-8 tracking-tighter leading-tight max-w-3xl">
              Visual <span className="text-brand-red">Evidence.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
              De-coding the physical manifestations of biotechnology. A visual archive of our global footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content Wrapper - Filter is sticky within this container */}
      <div>
        {/* Logic Filter Strip */}
        <section className="sticky top-0 z-40 bg-brand-beige-white/80 backdrop-blur-2xl py-2.5 md:py-3 border-b border-brand-red/10 shadow-2xl">
          <div className="container mx-auto px-4 md:px-6 max-w-[1900px]">
            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar scroll-smooth justify-start lg:justify-center">
              {categories.map(tab => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setSelectedIndex(null); }}
                  className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black tracking-wider md:tracking-widest uppercase transition-all duration-500 border-2 whitespace-nowrap ${activeTab === tab
                    ? 'bg-brand-beige-black text-white border-brand-beige-black shadow-xl shadow-brand-beige-black/20 scale-105'
                    : 'bg-white text-slate-400 border-slate-100 hover:border-brand-gold hover:text-brand-gold'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid Interface */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-[1900px]">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group break-inside-avoid relative overflow-hidden rounded-[3.5rem] cursor-pointer shadow-xl hover:shadow-brand-red/20 transition-all duration-700 bg-white border border-slate-100"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-beige-black/80 via-brand-beige-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">
                    <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-px bg-brand-red" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-outfit font-bold text-white tracking-tight leading-tight">{item.title}</h3>
                    </div>
                  </div>

                  <div className="absolute top-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 hover:bg-brand-red hover:border-brand-red">
                    <Maximize2 size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div> {/* End Gallery Content Wrapper */}

      {/* Lightbox Terminal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brand-beige-black/95 backdrop-blur-2xl flex items-center justify-center p-8 lg:p-24 animate-in fade-in duration-700"
          onClick={closeLightbox}
        >
          {/* Close Logic */}
          <button
            className="absolute top-10 right-10 w-16 h-16 bg-white/5 hover:bg-brand-red text-white border border-white/10 rounded-3xl flex items-center justify-center transition-all z-[110] active:scale-90"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          {/* Navigation Controls */}
          <button
            className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 hover:bg-brand-red backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center text-white transition-all z-[110] active:scale-95 group"
            onClick={prevImage}
          >
            <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 hover:bg-brand-red backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center text-white transition-all z-[110] active:scale-95 group"
            onClick={nextImage}
          >
            <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div
            className="relative w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-6xl w-full max-h-[80vh] rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(127,29,29,0.2)] border border-white/10 p-4 bg-white/5">
              <img
                src={NEW_GALLERY[selectedIndex].image}
                alt={`Gallery Image ${selectedIndex + 1}`}
                className="w-full h-full object-contain bg-brand-beige-black/50 rounded-[3rem]"
              />
            </div>

            {/* Matrix Pagination */}
            <div className="flex items-center gap-4 mt-12 bg-white/5 px-8 py-4 rounded-2xl border border-white/10">
              {NEW_GALLERY.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${selectedIndex === i ? 'w-12 bg-brand-red' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

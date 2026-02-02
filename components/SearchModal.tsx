import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Package, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS, PARTNER_DETAILS } from '../constants';
import { searchProducts, searchPartners } from '../utils/searchUtils';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
        if (!isOpen) {
            setTimeout(() => setQuery(''), 300); // Clear after potential animation
        }
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const filteredProducts = searchProducts(PRODUCTS, query).slice(0, 5);
    const filteredPartners = searchPartners(PARTNER_DETAILS, query).slice(0, 3);

    const handleProductClick = (productName: string) => {
        navigate(`/products?search=${encodeURIComponent(productName)}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-brand-beige-black/90 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
                {/* Header / Input */}
                <div className="flex items-center gap-4 p-6 border-b border-slate-100">
                    <Search className="text-brand-red" size={24} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search Products & Partners..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 text-2xl font-outfit font-bold text-brand-beige-black placeholder-slate-300 focus:outline-none bg-transparent"
                    />
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={24} className="text-slate-400" />
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto p-6 space-y-8">
                    {query.trim() === '' ? (
                        <div className="text-center py-12 text-slate-400">
                            <p className="text-lg font-medium">Type to explore our biological catalog.</p>
                        </div>
                    ) : (
                        <>
                            {/* Products Section */}
                            {filteredProducts.length > 0 && (
                                <SectionWrapper title="Products" icon={<Package size={14} />}>
                                    {filteredProducts.map(product => (
                                        <button
                                            key={product.id}
                                            onClick={() => handleProductClick(product.name)}
                                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group w-full text-left border border-transparent hover:border-slate-100"
                                        >
                                            <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-lg bg-slate-100" />
                                            <div className="flex-1">
                                                <h4 className="font-bold text-brand-beige-black group-hover:text-brand-red transition-colors">{product.name}</h4>
                                                <span className="text-xs text-slate-500 font-medium">{product.category}</span>
                                            </div>
                                            <ArrowRight size={16} className="text-slate-300 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                                        </button>
                                    ))}
                                </SectionWrapper>
                            )}

                            {/* Partners Section */}
                            {filteredPartners.length > 0 && (
                                <SectionWrapper title="Global Partners" icon={<Globe size={14} />}>
                                    {filteredPartners.map((partner, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                            <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain rounded-lg bg-white p-1" />
                                            <div>
                                                <h4 className="font-bold text-brand-beige-black">{partner.name}</h4>
                                                <p className="text-xs text-slate-500 line-clamp-1">{partner.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </SectionWrapper>
                            )}

                            {filteredProducts.length === 0 && filteredPartners.length === 0 && (
                                <div className="text-center py-12 text-slate-400">
                                    <p>No results found for "{query}"</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

const SectionWrapper = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <div>
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
            {icon} {title}
        </h3>
        <div className="grid gap-3">
            {children}
        </div>
    </div>
);

export default SearchModal;

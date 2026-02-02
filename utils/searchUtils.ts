import Fuse from 'fuse.js';
import { Product, Partner } from '../types';

// Options for Product Search
const productOptions = {
    keys: [
        { name: 'name', weight: 0.7 },
        { name: 'category', weight: 0.5 },
        { name: 'description', weight: 0.3 },
        { name: 'specifications', weight: 0.2 }
    ],
    threshold: 0.4, // 0.0 = perfect match, 1.0 = match anything
    includeScore: true,
    ignoreLocation: true // Search anywhere in the string
};

// Options for Partner Search
const partnerOptions = {
    keys: ['name', 'desc'],
    threshold: 0.4,
    includeScore: true,
    ignoreLocation: true
};

export const searchProducts = (products: Product[], query: string): Product[] => {
    if (!query) return products;
    const fuse = new Fuse(products, productOptions);
    return fuse.search(query).map(result => result.item);
};

export const searchPartners = (partners: any[], query: string): any[] => {
    if (!query) return partners;
    const fuse = new Fuse(partners, partnerOptions);
    return fuse.search(query).map(result => result.item);
};

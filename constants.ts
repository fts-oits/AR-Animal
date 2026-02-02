
import { Category, Product, TeamMember, GalleryItem } from './types';

// Updated product catalog using high-quality company assets
// Updated product catalog based on Animal Health focus
export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Diclazuril Micro Granular Premix',
    category: Category.COCCIDIOSTAT,
    description: '0.5% Diclazuril Premix for potent coccidiosis prevention.',
    image: 'img/services-1.jpg',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 200-400g/MT (Prevention)', 'Origin: China']
  },
  {
    id: 'p2',
    name: 'Maduramicin Ammonium Premix',
    category: Category.COCCIDIOSTAT,
    description: '1% Maduramicin Ammonium for effective coccidiosis control.',
    image: 'img/services-2.jpg',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 500g/MT', 'Origin: China']
  },
  {
    id: 'p3',
    name: 'S-Gaurd-O (Natural Mould Inhibitor)',
    category: Category.MOULD_INHIBITOR,
    description: 'Synergistic organic acid-based mould inhibitor for feed safety.',
    image: 'img/services-3.jpg',
    specifications: ['Species: Poultry', 'Application: Feed Storage', 'Dosage: 0.5-1.0kg/MT', 'Origin: India']
  },
  {
    id: 'p4',
    name: 'Toxin-O-Plus (Hybrid Toxin Binder)',
    category: Category.TOXIN_BINDER,
    description: 'Advanced adsorbent with organic acids for mycotoxin management.',
    image: 'img/services-4.jpg',
    specifications: ['Species: Poultry', 'Type: Toxin Adsorbent', 'Origin: India']
  },
  {
    id: 'p5',
    name: 'A-Gaurd (Propionic Acid 70%)',
    category: Category.TOXIN_BINDER,
    description: 'Powerful liquid mould inhibitor and preservative.',
    image: 'img/services-5.jpg',
    specifications: ['Species: Poultry', 'Type: Acidifier', 'Origin: India']
  },
  {
    id: 'p6',
    name: 'AR-Lysine (L-Lysine HCL 98.5%)',
    category: Category.AMINO_ACID,
    description: 'High-purity essential amino acid for poultry growth.',
    image: 'img/departments-1.jpg',
    specifications: ['Species: Poultry', 'Purity: 98.5% min', 'Origin: China']
  },
  {
    id: 'p7',
    name: 'AR-Threonine (L-Threonine 98.5%)',
    category: Category.AMINO_ACID,
    description: 'Essential amino acid for improved feed conversion.',
    image: 'img/departments-2.jpg',
    specifications: ['Species: Poultry', 'Purity: 98.5% min', 'Origin: China']
  },
  {
    id: 'p8',
    name: 'L-Valine',
    category: Category.AMINO_ACID,
    description: 'Critical amino acid for maximizing poultry productivity.',
    image: 'img/departments-3.jpg',
    specifications: ['Species: Poultry', 'Origin: China']
  },
  {
    id: 'p9',
    name: 'Choline Chloride',
    category: Category.VITAMIN,
    description: 'Essential vitamin-like nutrient for fat metabolism and growth.',
    image: 'img/departments-4.jpg',
    specifications: ['Species: Poultry', 'Type: 60% Corn Cob/70% Liquid', 'Origin: China']
  },
  {
    id: 'p10',
    name: 'AR-Methionine (DL-Methionine 99%)',
    category: Category.AMINO_ACID,
    description: 'Primary essential amino acid for feathering and growth.',
    image: 'img/departments-5.jpg',
    specifications: ['Species: Poultry', 'Purity: 99% min', 'Origin: China']
  },
  {
    id: 'p11',
    name: 'DCP (Dicalcium Phosphate)',
    category: Category.MINERAL,
    description: '18% Phosphorus high-availability mineral supplement.',
    image: 'img/vtr-100.jpg',
    specifications: ['Species: Poultry', 'Purity: 18% P min', 'Origin: China/Middle East']
  },
  {
    id: 'p12',
    name: 'MCP (Monocalcium Phosphate)',
    category: Category.MINERAL,
    description: '22% Phosphorus premium solubility mineral for efficient growth.',
    image: 'img/vtr2.jpg',
    specifications: ['Species: Poultry', 'Purity: 22% P min', 'Origin: China']
  },
  {
    id: 'p13',
    name: 'MDCP (Monodicalcium Phosphate)',
    category: Category.MINERAL,
    description: '21% Phosphorus mineral blend for optimized feed formulation.',
    image: 'img/chanhen-2.jpg',
    specifications: ['Species: Poultry', 'Purity: 21% P min', 'Origin: China']
  },
  {
    id: 'p14',
    name: 'Phytase (5000/10000 FTU)',
    category: Category.ENZYME,
    description: 'High-efficiency enzyme to optimize phosphorus utilization.',
    image: 'img/services-6.jpg',
    specifications: ['Species: Poultry', 'Activity: 5,000/10,000 FTU/g', 'Origin: China']
  },
  {
    id: 'p15',
    name: 'Sodium Bicarbonate',
    category: Category.MINERAL,
    description: 'Essential buffer for heat stress management and digestive health.',
    image: 'img/departments-1.jpg',
    specifications: ['Species: Poultry', 'Purity: 99% min', 'Origin: China/Turkey']
  },
  {
    id: 'p16',
    name: 'Magnesium Oxide',
    category: Category.MINERAL,
    description: 'Crucial mineral for metabolic functions and bone development.',
    image: 'img/departments-2.jpg',
    specifications: ['Species: Poultry', 'Origin: China']
  },
  {
    id: 'p17',
    name: 'Vitamin Premix (Customized)',
    category: Category.VITAMIN,
    description: 'Precision-blends of essential vitamins for different growth stages.',
    image: 'img/departments-3.jpg',
    specifications: ['Species: Poultry', 'Form: Powder', 'Origin: Europe/China']
  },
  {
    id: 'p18',
    name: 'Broad Spectrum Antibiotics',
    category: Category.THERAPEUTIC,
    description: 'Effective therapeutic solutions for bacterial disease management.',
    image: 'img/departments-4.jpg',
    specifications: ['Species: Poultry', 'Type: Water Soluble/Feed Grade', 'Origin: China']
  },
  {
    id: 'p19',
    name: 'Anthelmintics',
    category: Category.THERAPEUTIC,
    description: 'Potent solutions for internal parasite control in poultry flocks.',
    image: 'img/departments-5.jpg',
    specifications: ['Species: Poultry', 'Origin: India/China']
  },
  {
    id: 'p20',
    name: 'Liver Tonics',
    category: Category.THERAPEUTIC,
    description: 'Bio-stimulants for optimized liver function and detoxification.',
    image: 'img/services-1.jpg',
    specifications: ['Species: Poultry', 'Origin: India']
  }
];

// Expanded team with new professional consultant headshots
export const TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Mr. Atiar Rahman',
    role: 'Chief Executive Officer',
    image: 'img/team/1.jpg',
    bio: 'Visionary leader with 35+ years of experience in the poultry sector. Former specialist at Biman Poultry Complex since 1987.',
    socials: { linkedin: 'https://linkedin.com/in/atiar-rahman', email: 'aranimalhealth@gmail.com' }
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Modern Production Unit', category: 'Facilities', image: 'img/gallery/gallery-1.jpg' },
  { id: 'g2', title: 'Corporate Headquarters', category: 'Facilities', image: 'img/portfolio/branding-1.jpg' },
  { id: 'g3', title: 'Digital Health Solutions', category: 'Innovation', image: 'img/gallery/gallery-3.jpg' },
  { id: 'g4', title: 'Digital Feed Analysis Interface', category: 'Innovation', image: 'img/gallery/gallery-4.jpg' },
  { id: 'g5', title: 'Annual Scientific Symposium', category: 'Events', image: 'img/gallery/gallery-5.jpg' },
  { id: 'g6', title: 'Health Management Dashboard', category: 'Innovation', image: 'img/gallery/gallery-6.jpg' },
  { id: 'g7', title: 'Published Research Manuals', category: 'CSR', image: 'img/gallery/gallery-7.jpg' },
  { id: 'g8', title: 'Community Training Program', category: 'CSR', image: 'img/gallery/gallery-8.jpg' }
];

export const HERO_SLIDES = [
  {
    title: "Global Expertise, Local Success",
    subtitle: "Partnering with world-class manufacturers like Chanhen and VTR to bring biotechnology to Bangladesh’s poultry sector.",
    image: "img/slide/slide-1.jpg"
  },
  {
    title: "Innovation in Animal Health",
    subtitle: "Leading the market in high-efficiency enzymes and pharmaceutical-grade feed additives.",
    image: "img/slide/slide-2.jpg"
  },
  {
    title: "Nurturing a Greener Tomorrow",
    subtitle: "Sustainable solutions for the next generation of poultry farming.",
    image: "img/slide/slide-3.jpg"
  }
];

export const PARTNER_DETAILS = [
  {
    name: 'Chanhen',
    desc: 'Asia’s largest supplier of Monocalcium Phosphate and Monopotassium Phosphate. Specilized in mining phosphate rock.',
    logo: 'img/chanhen2-logo.jpg'
  },
  {
    name: 'Sunward Chemicals',
    desc: 'Invested by Yunnan Copper Industry. Annual production capacity of Feed Grade DCP/MCP of 260,000 tons.',
    logo: 'img/Sunward-Office-2.jpg'
  },
  {
    name: 'ESIGMA',
    desc: 'Established 1997, a Chinese leading feedstuff pharmaceutical additive factory. Market leader in China.',
    logo: 'img/EsigmaOffice-1.jpg'
  },
  {
    name: 'VTR Bio-Tech',
    desc: 'The largest animal feed enzyme manufacturer in China. Ranks No. 1 in the feed enzyme industry in Asia.',
    logo: 'img/vtr-100.jpg'
  }
];

export const MILESTONES = [
  {
    year: '2010',
    title: 'Founding Year',
    description: 'AR Animal Health Ltd was established with a vision to revolutionize the poultry health care supply chain.',
    icon: 'Flag'
  },
  {
    year: '2013',
    title: 'Global Partnership with Esigma',
    description: 'Strategic alliance with Esigma Animal Health to bring international quality feed additives to our local market.',
    icon: 'Globe'
  },
  {
    year: '2016',
    title: 'Manufacturing Plant Launch',
    description: 'Opened our first state-of-the-art production facility specializing in calcium hydrogen products.',
    icon: 'Factory'
  },
  {
    year: '2019',
    title: 'Regional Expansion',
    description: 'Expanded operations to serve over 10,000+ farmers nationwide through 500+ distributors.',
    icon: 'TrendingUp'
  },
  {
    year: '2023',
    title: 'Innovation in Enzymes',
    description: 'Launched a new line of VTR-partnered bio-enzymes, setting new industry standards.',
    icon: 'Zap'
  }
];

export const TESTIMONIALS = [
  {
    name: "Rahim Uddin",
    role: "Poultry Farm Owner",
    quote: "AR Animal Health's additives increased our broiler weight gain by 15% in just one cycle. Their consulting is invaluable.",
    image: "img/testimonials/1.jpg"
  },
  {
    name: "Dr. Farhana Ahmed",
    role: "Veterinary Surgeon",
    quote: "I consistently recommend their enzyme products. The quality and purity are unmatched in the local market.",
    image: "img/testimonials/2.jpg"
  },
  {
    name: "Karim Enterprises",
    role: "Distributor",
    quote: "Reliable supply chain and excellent dealer support make them our top partner for poultry feed additive distribution.",
    image: "img/testimonials/3.jpg"
  }
];

export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Sourcing",
    desc: "We select only ISO-certified raw materials from global leaders.",
    icon: "Globe"
  },
  {
    id: 2,
    title: "Quality Control",
    desc: "Rigorous lab testing ensures purity before any processing begins.",
    icon: "Shield"
  },
  {
    id: 3,
    title: "Processing",
    desc: "Advanced enzyme technology formulation for maximum bioavailability.",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Distribution",
    desc: "Efficient nationwide network delivering fresh stock to farmers.",
    icon: "TrendingUp"
  }
];

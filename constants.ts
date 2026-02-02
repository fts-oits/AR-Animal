
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
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 500-600g/MT (Control)', 'Origin: China']
  },
  {
    id: 'p3',
    name: 'Robenidine Hydrochloride Premix',
    category: Category.COCCIDIOSTAT,
    description: '10% Robenidine HCL for broad-spectrum coccidiosis treatment.',
    image: 'img/services-3.jpg',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 300-600g/MT (Treatment)', 'Origin: China']
  },
  {
    id: 'p4',
    name: 'Nicarbazin & Maduramicin Combination',
    category: Category.COCCIDIOSTAT,
    description: 'Nicarbazin 8% + 0.07% Maduramicin for dual-action control.',
    image: 'img/services-4.jpg',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 500-600g/MT (Dual Action)', 'Origin: China']
  },
  {
    id: 'p5',
    name: 'Salinomycin Sodium Premix',
    category: Category.COCCIDIOSTAT,
    description: '12% Salinomycin, a trusted ionophore coccidiostat.',
    image: 'img/services-5.jpg',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 400-500g/MT (Ionophore)', 'Origin: China']
  },
  {
    id: 'p6',
    name: 'Biomix 3x - Gut Bioregulator',
    category: Category.GROWTH_PROMOTER,
    description: 'Organic Acids, Prebiotics & Intestinal Regenerating Factors.',
    image: 'img/services-6.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: Broiler/Breeder: 500g/MT; Layer: 250g/MT', 'Origin: India']
  },
  {
    id: 'p7',
    name: 'Avsorb Mos',
    category: Category.TOXIN_BINDER,
    description: 'Organic Acids, MOS & Calcium Montmorillonite blend.',
    image: 'img/services-1.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: 1kg/MT (Mycotoxin Binding)', 'Origin: India']
  },
  {
    id: 'p8',
    name: 'Avsorb Plus',
    category: Category.TOXIN_BINDER,
    description: 'Selected Clays and Organic Acids for broad toxin adsorption.',
    image: 'img/services-2.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: 2kg/MT (Toxin Adsorption)', 'Origin: India']
  },
  {
    id: 'p9',
    name: 'HY-Bond Pellet Binder',
    category: Category.OTHER,
    description: 'Polymethylolcarbamide (PMC) 95% for durable pellets.',
    image: 'img/services-3.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: Broiler: 1-2kg; Pullet: 1.5kg', 'Origin: China']
  },
  {
    id: 'p10',
    name: 'Nutriox',
    category: Category.OTHER,
    description: 'Ethoxyquin/Propyl Gallate/Synergism for feed stabilization.',
    image: 'img/services-4.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: 75-225g/MT (Feed Stabilization)', 'Origin: India']
  },
  {
    id: 'p11',
    name: 'Yiduozyme P-8601',
    category: Category.ENZYME,
    description: 'A powerful multi-enzyme complex for improved digestion.',
    image: 'img/services-5.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: 150-180g/MT (Broilers/Layers/Breeders)', 'Origin: China']
  },
  {
    id: 'p12',
    name: 'Microtech 5000 Plus',
    category: Category.ENZYME,
    description: 'Heat Tolerant Phytase (Granular) for phosphorus liberation.',
    image: 'img/services-6.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: 80-100g/MT (Phosphorus Liberation)', 'Origin: China']
  },
  {
    id: 'p13',
    name: 'Lipidin',
    category: Category.OTHER,
    description: 'LPC, LPE, PLA & LPI Complex to improve fat absorption.',
    image: 'img/services-1.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: 500g/MT (Fat Absorption)', 'Origin: India']
  },
  {
    id: 'p14',
    name: 'Choline Chloride 60%',
    category: Category.OTHER,
    description: '60% concentration on a corn cob carrier.',
    image: 'img/services-2.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: As per Nutritionist (Methyl Donor)', 'Origin: China']
  },
  {
    id: 'p15',
    name: 'Avilyte',
    category: Category.OTHER,
    description: 'Balanced Electrolyte with Vitamin C for stress and hydration.',
    image: 'img/services-3.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: Feed: 500g/MT; Water: 0.5-1.0g/L', 'Origin: India']
  },
  {
    id: 'p16',
    name: 'DL-Methionine',
    category: Category.AMINO_ACID,
    description: '99% Pure DL-Methionine, a critical essential amino acid.',
    image: 'img/services-4.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: As per Nutritionist', 'Origin: Germany']
  },
  {
    id: 'p17',
    name: 'L-Lysine',
    category: Category.AMINO_ACID,
    description: '98.5% Pure L-Lysine, a vital building block for protein.',
    image: 'img/services-5.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: As per Nutritionist', 'Origin: Singapore']
  },
  {
    id: 'p18',
    name: 'DCP Granular (New Hope)',
    category: Category.MINERAL,
    description: 'Dicalcium Phosphate with P=18% Min, Ca=22.5%.',
    image: 'img/services-6.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: As per Nutritionist', 'Origin: China']
  },
  {
    id: 'p19',
    name: 'DCP Granular (Sunward)',
    category: Category.MINERAL,
    description: 'Dicalcium Phosphate with P=18% Min, Ca=22.5%.',
    image: 'img/services-1.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: As per Nutritionist', 'Origin: China']
  },
  {
    id: 'p20',
    name: 'MCP Micro Granular',
    category: Category.MINERAL,
    description: 'Monocalcium Phosphate with P=22% Min, Ca=13% Min.',
    image: 'img/services-2.jpg',
    specifications: ['Species: Poultry', 'Type: OTC', 'Dosage: As per Nutritionist', 'Origin: China']
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

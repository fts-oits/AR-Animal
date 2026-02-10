
import { Category, Product, TeamMember, GalleryItem } from './types';

// Updated product catalog using high-quality company assets
// Updated product catalog based on Animal Health focus
// Updated product catalog based on ARAnimalhealthWebsitecontent.html
export const PRODUCTS: Product[] = [
  // Coccidiostats
  {
    id: 'p1',
    name: 'Diclazuril Micro Granular Premix',
    category: Category.COCCIDIOSTAT,
    description: '0.5% Diclazuril Premix for potent coccidiosis prevention.',
    image: 'img/products/Diclazuril Micro Granular Premix.png',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 200-400g/MT (Prevention)', 'Origin: China']
  },
  {
    id: 'p2',
    name: 'Maduramicin Ammonium Premix',
    category: Category.COCCIDIOSTAT,
    description: '1% Maduramicin Ammonium for effective coccidiosis control.',
    image: 'img/products/Maduramicin Ammonium Premix.png',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 500-600g/MT', 'Origin: China']
  },
  {
    id: 'p3',
    name: 'Robenidine Hydrochloride Premix',
    category: Category.COCCIDIOSTAT,
    description: '10% Robenidine HCL for broad-spectrum coccidiosis treatment.',
    image: 'img/products/Robenidine Hydrochloride Premix.png',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 300-600g/MT', 'Origin: China']
  },
  {
    id: 'p4',
    name: 'Nicarbazin & Maduramicin Combination',
    category: Category.COCCIDIOSTAT,
    description: 'Nicarbazin 8% + 0.07% Maduramicin for dual-action control.',
    image: 'img/products/Nicarbazin & Maduramicin Combination.png',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 500-600g/MT', 'Origin: China']
  },
  {
    id: 'p5',
    name: 'Salinomycin Sodium Premix',
    category: Category.COCCIDIOSTAT,
    description: '12% Salinomycin, a trusted ionophore coccidiostat.',
    image: 'img/products/Salinomycin Sodium Premix.png',
    specifications: ['Species: Poultry', 'Type: Rx', 'Dosage: 400-500g/MT', 'Origin: China']
  },

  // Growth Promoters
  {
    id: 'p6',
    name: 'Biomix 3x',
    category: Category.GROWTH_PROMOTER,
    description: 'Gut Bioregulator with Organic Acids, Prebiotics & Intestinal Regenerating Factors.',
    image: 'img/products/Biomix 3x.png',
    specifications: ['Species: Poultry', 'Dosage: Broiler/Breeder 500g/MT, Layer 250g/MT', 'Origin: India']
  },

  // Toxin Binders
  {
    id: 'p7',
    name: 'Avsorb Mos',
    category: Category.TOXIN_BINDER,
    description: 'Superior Toxin Binder with Organic Acids, MOS & Calcium Montmorillonite.',
    image: 'img/products/Avsorb Mos.png',
    specifications: ['Species: General', 'Dosage: 1kg/MT', 'Origin: India']
  },

  // Other Additives
  {
    id: 'p9',
    name: 'HY-Bond Pellet Binder',
    category: Category.OTHER,
    description: 'Polymethylolcarbamide (PMC) 95% for durable pellets.',
    image: 'img/products/HY-Bond Pellet Binder.png',
    specifications: ['Species: Aqua/Poultry', 'Dosage: Poultry 1-2kg, Fish 2-5kg, Shrimp 4-7kg', 'Origin: China']
  },
  {
    id: 'p10',
    name: 'Nutriox',
    category: Category.OTHER,
    description: 'Antioxidant blend (Ethoxyquin/Propyl Gallate) for feed stabilization.',
    image: 'img/products/Nutriox.png',
    specifications: ['Species: General', 'Dosage: 75-225g/MT', 'Origin: India']
  },
  {
    id: 'p11',
    name: 'Lipidin',
    category: Category.OTHER,
    description: 'Natural Absorption Enhancer (Emulsifier) with LPC, LPE, PLA & LPI.',
    image: 'img/products/Lipidin.png',
    specifications: ['Species: General', 'Dosage: 500g/MT', 'Origin: India']
  },
  {
    id: 'p12',
    name: 'Choline Chloride 60% Corn Cob',
    category: Category.VITAMIN,
    description: 'Essential methyl donor on corn cob carrier.',
    image: 'img/products/Choline Chloride 60_ Corn Cob.png',
    specifications: ['Species: General', 'Dosage: As per Nutritionist', 'Origin: China']
  },
  {
    id: 'p13',
    name: 'Avilyte',
    category: Category.OTHER,
    description: 'Balanced Electrolyte with Vitamin C for stress and hydration.',
    image: 'img/products/Avilyte.png',
    specifications: ['Species: Poultry', 'Dosage: Feed 500g/MT, Water 0.5-1.0g/L', 'Origin: India']
  },

  // Enzymes
  {
    id: 'p14',
    name: 'Yiduozyme P-8601',
    category: Category.ENZYME,
    description: 'Multi-enzyme complex (Proteinase, Xylanase, etc.) for improved digestion.',
    image: 'img/products/Yiduozyme P-8601.png',
    specifications: ['Species: Poultry', 'Dosage: 150-180g/MT', 'Origin: China']
  },
  {
    id: 'p15',
    name: 'Microtech 5000 Plus',
    category: Category.ENZYME,
    description: 'Heat Tolerant Granular Phytase for phosphorus liberation.',
    image: 'img/products/Microtech 5000 Plus.png',
    specifications: ['Species: Poultry', 'Dosage: 80-100g/MT', 'Origin: China']
  },

  // Amino Acids
  {
    id: 'p16',
    name: 'DL-Methionine',
    category: Category.AMINO_ACID,
    description: '99% Pure DL-Methionine, a critical essential amino acid.',
    image: 'img/products/DL-Methionine.png',
    specifications: ['Species: General', 'Dosage: As per Nutritionist', 'Origin: Germany']
  },
  {
    id: 'p17',
    name: 'L-Lysine',
    category: Category.AMINO_ACID,
    description: '98.5% Pure L-Lysine for protein synthesis.',
    image: 'img/products/L-Lysine.png',
    specifications: ['Species: General', 'Dosage: As per Nutritionist', 'Origin: Singapore']
  },

  // Minerals
  {
    id: 'p18',
    name: 'DCP Granular',
    category: Category.MINERAL,
    description: 'Dicalcium Phosphate (P=18% Min, Ca=22.5%).',
    image: 'img/products/DCP Granular.png',
    specifications: ['Species: General', 'Dosage: As per Nutritionist', 'Origin: China']
  },
  {
    id: 'p20',
    name: 'MCP',
    category: Category.MINERAL,
    description: 'Monocalcium Phosphate (P=22% Min, Ca=13% Min).',
    image: 'img/products/MCP.png',
    specifications: ['Species: General', 'Dosage: As per Nutritionist', 'Origin: China']
  }
];

// Hero Carousel Slides
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

// Expanded Partner List from requirements
export const PARTNER_DETAILS = [
  {
    name: 'Zhejiang Esigma Animal Health Co. Ltd.',
    desc: 'A leading feedstuff pharmaceutical additive factory established in 1997. Market leader in China for coccidiostats.',
    logo: 'img/EsigmaOffice-1.jpg'
  },
  {
    name: 'Sichuan Chuanheng Chemical Corporation',
    desc: 'Asia’s largest supplier of Monocalcium Phosphate. Specialized in mining and processing phosphate rock.',
    logo: 'img/chanhen2-logo.jpg'
  },
  {
    name: 'Guangdong VTR Bio-Tech Co. Ltd.',
    desc: 'The largest animal feed enzyme manufacturer in China. Ranks No. 1 in the feed enzyme industry in Asia.',
    logo: 'img/vtr-100.jpg'
  },
  {
    name: 'Yunnan Copper Industry Sunward Chemicals',
    desc: 'Annual production capacity of Feed Grade DCP/MCP of 260,000 tons. A major player in mineral feeds.',
    logo: 'img/Sunward-Office-2.jpg'
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
  // Existing Gallery Images (Selected)
  { id: 'g1', title: 'Digital Health Solutions', category: 'Innovation', image: 'img/gallery/gallery-3.jpg' },
  { id: 'g2', title: 'Health Management Dashboard', category: 'Innovation', image: 'img/gallery/gallery-6.jpg' },
  { id: 'g3', title: 'Published Research Manuals', category: 'Research', image: 'img/gallery/gallery-7.jpg' },

  // Home Slider Images
  { id: 's1', title: 'Global Expertise, Local Success', category: 'Facilities', image: 'img/slide/slide-1.jpg' },
  { id: 's2', title: 'Innovation in Animal Health', category: 'Innovation', image: 'img/slide/slide-2.jpg' },
  { id: 's3', title: 'Sustainable Poultry Solutions', category: 'Sustainability', image: 'img/slide/slide-3.jpg' },

  // Product Images - Coccidiostats
  { id: 'p1', title: 'Diclazuril Micro Granular Premix', category: 'Products', image: 'img/products/Diclazuril Micro Granular Premix.png' },
  { id: 'p2', title: 'Maduramicin Ammonium Premix', category: 'Products', image: 'img/products/Maduramicin Ammonium Premix.png' },
  { id: 'p3', title: 'Robenidine Hydrochloride Premix', category: 'Products', image: 'img/products/Robenidine Hydrochloride Premix.png' },
  { id: 'p4', title: 'Nicarbazin & Maduramicin Combination', category: 'Products', image: 'img/products/Nicarbazin & Maduramicin Combination.png' },
  { id: 'p5', title: 'Salinomycin Sodium Premix', category: 'Products', image: 'img/products/Salinomycin Sodium Premix.png' },

  // Product Images - Growth Promoters & Toxin Binders
  { id: 'p6', title: 'Biomix 3x', category: 'Products', image: 'img/products/Biomix 3x.png' },
  { id: 'p7', title: 'Avsorb Mos', category: 'Products', image: 'img/products/Avsorb Mos.png' },

  // Product Images - Other Additives
  { id: 'p9', title: 'HY-Bond Pellet Binder', category: 'Products', image: 'img/products/HY-Bond Pellet Binder.png' },
  { id: 'p10', title: 'Nutriox', category: 'Products', image: 'img/products/Nutriox.png' },
  { id: 'p11', title: 'Lipidin', category: 'Products', image: 'img/products/Lipidin.png' },
  { id: 'p12', title: 'Choline Chloride 60% Corn Cob', category: 'Products', image: 'img/products/Choline Chloride 60_ Corn Cob.png' },
  { id: 'p13', title: 'Avilyte', category: 'Products', image: 'img/products/Avilyte.png' },

  // Product Images - Enzymes
  { id: 'p14', title: 'Yiduozyme P-8601', category: 'Products', image: 'img/products/Yiduozyme P-8601.png' },
  { id: 'p15', title: 'Microtech 5000 Plus', category: 'Products', image: 'img/products/Microtech 5000 Plus.png' },

  // Product Images - Amino Acids
  { id: 'p16', title: 'DL-Methionine', category: 'Products', image: 'img/products/DL-Methionine.png' },
  { id: 'p17', title: 'L-Lysine', category: 'Products', image: 'img/products/L-Lysine.png' },

  // Product Images - Minerals
  { id: 'p18', title: 'DCP Granular', category: 'Products', image: 'img/products/DCP Granular.png' },
  { id: 'p20', title: 'MCP', category: 'Products', image: 'img/products/MCP.png' },

  // New Gallery Images
  { id: 'ng1', title: 'Field Operations', category: 'Facilities', image: 'Updates/images/Gallery/202e15b1-3da7-4731-bed0-4a427f0a98da.jpeg' },
  { id: 'ng2', title: 'Quality Assurance', category: 'Facilities', image: 'Updates/images/Gallery/5dbe0efa-a8ec-46f8-8753-cdc191491fff.jpeg' },
  { id: 'ng3', title: 'Production Excellence', category: 'Facilities', image: 'Updates/images/Gallery/74d041bb-3351-42c0-b10b-9d98d6b54d08.jpeg' },
  { id: 'ng4', title: 'Industry Leadership', category: 'Facilities', image: 'Updates/images/Gallery/IMG_9012.jpeg' },
  { id: 'ng5', title: 'Team Collaboration', category: 'Facilities', image: 'Updates/images/Gallery/IMG_9019.jpeg' },
  { id: 'ng6', title: 'Technical Innovation', category: 'Innovation', image: 'Updates/images/Gallery/IMG_9023.jpeg' },
  { id: 'ng7', title: 'Manufacturing Process', category: 'Facilities', image: 'Updates/images/Gallery/IMG_9046.jpeg' },
  { id: 'ng8', title: 'Quality Standards', category: 'Facilities', image: 'Updates/images/Gallery/IMG_9053.jpeg' },
  { id: 'ng9', title: 'Operational Excellence', category: 'Facilities', image: 'Updates/images/Gallery/e70eb596-6203-496d-a472-64858f0190e0.jpeg' },
  { id: 'ng10', title: 'Professional Services', category: 'Facilities', image: 'Updates/images/Gallery/f678486e-ddbe-44d8-ad1f-e01e540deb2d.jpeg' }
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

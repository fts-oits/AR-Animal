
import { Category, Product, TeamMember, GalleryItem } from './types';

// Updated product catalog using high-quality company assets
export const PRODUCTS: Product[] = [
  {
    id: 'f1',
    name: 'NPK 15-15-15 Plus',
    category: Category.FERTILIZERS,
    description: 'A premium balanced fertilizer designed for general crop growth and soil revitalization. Optimized for maximum absorption in diverse soil conditions.',
    image: 'img/services-1.jpg',
    specifications: ['Nitrogen: 15%', 'Phosphorus: 15%', 'Potassium: 15%', 'Enhanced with Micro-nutrients']
  },
  {
    id: 'f2',
    name: 'Urea Diamond Grade',
    category: Category.FERTILIZERS,
    description: 'High-nitrogen fertilizer essential for the vegetative growth phase of crops. Provides a quick boost to leaf and stem development.',
    image: 'img/services-2.jpg',
    specifications: ['Nitrogen: 46%', 'Slow Release Formula', 'Industrial Grade Purity']
  },
  {
    id: '1',
    name: 'Lipidin - Feed Supplement',
    category: Category.FEED_ADDITIVES,
    description: 'Advanced nutritional supplement for livestock, enhancing lipid metabolism and growth efficiency. Formulated for high-performance animal health.',
    image: 'img/services-3.jpg',
    specifications: ['Lipid metabolism enhancer', 'Growth promoter', 'Highly digestible', 'Optimized for Poultry']
  },
  {
    id: '2',
    name: 'Loong Dicalcium Phosphate',
    category: Category.MINERALS,
    description: 'High-purity feed-grade mineral powder essential for bone development and overall metabolic health in aquatic and livestock feeds.',
    image: 'img/services-4.jpg',
    specifications: ['Phosphorus: 18% min', 'Calcium: 21% min', 'Feed Grade Powder', 'Certified Quality']
  },
  {
    id: '3',
    name: 'Huineng Animal Health Supplement',
    category: Category.FEED_ADDITIVES,
    description: 'Specialized animal health supplement manufactured under strict global quality standards in Zhejiang. Focuses on immunity and yield.',
    image: 'img/services-5.jpg',
    specifications: ['Veterinary Grade', 'Zhejiang Huineng Brand', 'Immunity Booster', 'GMP Certified']
  },
  {
    id: '4',
    name: 'Resilience CBD Gummies (Pet Line)',
    category: Category.FEED_ADDITIVES,
    description: 'Innovative broad-spectrum wellness supplements for companion animals, focusing on stress relief and joint health.',
    image: 'img/services-6.jpg',
    specifications: ['THC Free', 'Broad Spectrum', 'Vegan Formulations', 'Mixed Fruit Flavor']
  }
];

// Expanded team with new professional consultant headshots
export const TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Mr. Atair Rahman',
    role: 'Chief Executive Officer',
    image: 'img/team/1.jpg',
    bio: 'Visionary leader with 35+ years of experience in the agricultural and poultry sector. Former specialist at Biman Poultry Complex since 1987.',
    socials: { linkedin: 'https://linkedin.com/in/atiar-rahman', email: 'atiar@aranimalhealthltd.com' }
  },
  {
    id: 'medical-consultant',
    name: 'Dr. Sarah Wilson',
    role: 'Chief Veterinary Consultant',
    image: 'img/doctors/doctors-1.jpg',
    bio: 'Renowned expert in animal pathology and nutritional therapy with over 20 years of international field experience.',
    socials: { linkedin: 'https://linkedin.com', email: 'sarah.wilson@aranimalhealthltd.com' }
  },
  {
    id: 'ops-director',
    name: 'Engr. David Chen',
    role: 'Director of Operations',
    image: 'img/doctors/doctors-2.jpg',
    bio: 'Strategic lead for manufacturing excellence and supply chain logistics across South Asia.',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
  },
  {
    id: 'research-lead',
    name: 'Dr. Michael Lau',
    role: 'Lead Researcher',
    image: 'img/doctors/doctors-3.jpg',
    bio: 'Pioneering new bio-enzyme applications and sustainable mineral additives for modern poultry farming.',
    socials: { linkedin: 'https://linkedin.com', email: 'michael.lau@aranimalhealthltd.com' }
  },
  {
    id: 'clinical-specialist',
    name: 'Jessica Adams',
    role: 'Clinical Health Specialist',
    image: 'img/doctors/doctors-4.jpg',
    bio: 'Specializing in preventative health measures and vaccine distribution networks.',
    socials: { linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Modern Production Unit', category: 'Facilities', image: 'img/gallery/gallery-1.jpg' },
  { id: 'g2', title: 'Corporate Headquarters', category: 'Facilities', image: 'img/portfolio/branding-1.jpg' },
  { id: 'g3', title: 'Digital Health Solutions', category: 'Innovation', image: 'img/gallery/gallery-3.jpg' },
  { id: 'g4', title: 'Smart Farming App Interface', category: 'Innovation', image: 'img/gallery/gallery-4.jpg' },
  { id: 'g5', title: 'Annual Scientific Symposium', category: 'Events', image: 'img/gallery/gallery-5.jpg' },
  { id: 'g6', title: 'Health Management Dashboard', category: 'Innovation', image: 'img/gallery/gallery-6.jpg' },
  { id: 'g7', title: 'Published Research Manuals', category: 'CSR', image: 'img/gallery/gallery-7.jpg' },
  { id: 'g8', title: 'Community Training Program', category: 'CSR', image: 'img/gallery/gallery-8.jpg' }
];

export const HERO_SLIDES = [
  {
    title: "Global Expertise, Local Success",
    subtitle: "Partnering with world-class manufacturers like Chanhen and VTR to bring biotechnology to Bangladesh.",
    image: "img/slide/slide-1.jpg"
  },
  {
    title: "Innovation in Animal Health",
    subtitle: "Leading the market in high-efficiency enzymes and pharmaceutical-grade feed additives.",
    image: "img/slide/slide-2.jpg"
  },
  {
    title: "Nurturing a Greener Tomorrow",
    subtitle: "Sustainable agricultural solutions for the next generation of farmers.",
    image: "img/slide/slide-3.jpg"
  }
];

export const PARTNER_DETAILS = [
  {
    name: 'Chanhen',
    desc: 'Asia’s largest supplier of Monocalcium Phosphate and Monopotassium Phosphate. Specilized in mining phosphate rock.',
    logo: 'img/testimonials/2.jpg'
  },
  {
    name: 'Sunward Chemicals',
    desc: 'Invested by Yunnan Copper Industry. Annual production capacity of Feed Grade DCP/MCP of 260,000 tons.',
    logo: 'img/testimonials/3.jpg'
  },
  {
    name: 'ESIGMA',
    desc: 'Established 1997, a Chinese leading feedstuff pharmaceutical additive factory. Market leader in China.',
    logo: 'img/testimonials/1.jpg'
  },
  {
    name: 'VTR Bio-Tech',
    desc: 'The largest animal feed enzyme manufacturer in China. Ranks No. 1 in the feed enzyme industry in Asia.',
    logo: 'img/testimonials/4.jpg'
  }
];

export const MILESTONES = [
  {
    year: '2010',
    title: 'Founding Year',
    description: 'AR Animal Health Ltd was established with a vision to revolutionize the animal health care supply chain.',
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

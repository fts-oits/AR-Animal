
export enum Category {
  COCCIDIOSTAT = 'Coccidiostat',
  GROWTH_PROMOTER = 'Growth Promoter',
  TOXIN_BINDER = 'Toxin Binder',
  ENZYME = 'Enzyme',
  AMINO_ACID = 'Amino Acid',
  MINERAL = 'Mineral',
  VITAMIN = 'Vitamin',
  THERAPEUTIC = 'Therapeutic',
  MOULD_INHIBITOR = 'Mould Inhibitor',
  OTHER = 'Other'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  specifications: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

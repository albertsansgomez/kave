export interface Category {
  id: number;
  pimCode: string | null;
  name: string;
  description: string;
  depth: number;
  highlightImage: string;
  url: string;
  slug: string;
  seo: CategorySeo;
  analytics: CategoryAnalytics;
  algolia: CategoryAlgolia;
  mainChildren: CategoryChild[];
  extraChildren: CategoryChild[];
  mainParent: Category | null;
  extraParents: Category[];
  facetLinks: unknown | null;
  openGraphImages: string[];
  layout: string;
  thumbnails: CategoryThumbnail[];
  interlinks: CategoryInterlink[];
}

export interface CategorySeo {
  seoTitle: string;
  seoDescription: string;
  index: string;
  seoSecondDescription: string;
  seoCanonical: string | null;
  alternates: CategoryAlternate[];
}

export interface CategoryAlternate {
  rel: string;
  href: string;
  hreflang: string | null;
}

export interface CategoryAnalytics {
  nameEn: string;
  slugEn: string;
}

export interface CategoryAlgolia {
  replicaIndex: string;
  query: string;
  facets: string[];
}

export interface CategoryChild {
  id: number;
  pimCode: string | null;
  name: string;
  url: string;
  slug: string;
  highlightImage: string;
  analytics: CategoryAnalytics;
}

export interface CategoryThumbnail {
  id: number;
  objectId: number;
  name: string;
  highlightImage: string;
  url: string;
  modelType: string;
  analytics: CategoryAnalytics;
}

export interface CategoryInterlink {
  name: string;
  url: string;
}

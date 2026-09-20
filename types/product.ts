export interface Product {
  sku: string;
  title: string;
  description: string;
  slug: string;
  stock: number;
  price: number;
  ecoPart: number;
  salePrice: number | null;
  dimensionsImage: string | null;
  minUnitsToSell: number;
  images: ProductImage[];
  mainImage: ProductImage;
  documents: unknown[];
  collection: string;
  categories: string[];
  tags: string[];
  isCustomisable: boolean;
  attributes: ProductAttributes;
  brothers: {
    sizes: unknown[];
    colors: unknown[];
  };
  analyticsInfo: AnalyticsInfo;
  isPremium: boolean;
  material: string | null;
  secondaryMaterial: string | null;
  materialHighlight: string | null;
  requiresMaintenance: boolean;
  teaserDescription: string;
  teaserAssets: {
    urlMobile: string | null;
    urlDesktop: string | null;
  };
  storytellings: unknown[];
  isTopHeavy: boolean;
  augmentedReality: unknown | null;
  videos: unknown[];
  returnPolicy: string;
  bulletPoints: string[];
}

export interface ProductImage {
  code: string;
  url: string;
  type: 'V' | 'A' | 'D';
  order: number;
}

export interface ProductAttributes {
  width: ProductAttribute<number>;
  height: ProductAttribute<number>;
  length: ProductAttribute<number>;
  sizes: ProductAttribute<string>;
  technique: ProductAttribute<string | null>;
  edition: ProductAttribute<string | null>;
  descriptiveQuote: ProductAttribute<string | null>;
  descriptiveQuoteAuthor: ProductAttribute<string | null>;
  unpackingSuggestions: ProductAttribute<string>;
  structuredMaterials: ProductAttribute<string>;
}

export interface ProductAttribute<T> {
  label: string;
  value: T;
}

export interface AnalyticsInfo {
  effectivePrice: string;
  hasMatchMe: boolean;
  titleEn: string;
}

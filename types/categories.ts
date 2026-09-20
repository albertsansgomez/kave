export interface Categories {
  id: number;
  pimCode: string;
  name: string;
  description: string;
  slug: string;
  highlightImage: string;
  seoTitle: string;
  seoDescription: string;
  secondDescription: string;
  breadcrumbs: string;
  mainChildren: CategoriesSummary[];
  extraChildren: CategoriesSummary[];
  mainParent: CategoriesSummary | null;
  extraParents: CategoriesSummary[];
}

export interface CategoriesSummary {
  id: number;
  pimCode: string;
  name: string;
  slug: string;
  highlightImage: string;
}

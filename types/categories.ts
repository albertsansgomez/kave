export interface Category {
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
  mainChildren: CategorySummary[];
  extraChildren: CategorySummary[];
  mainParent: CategorySummary | null;
  extraParents: CategorySummary[];
}

export interface CategorySummary {
  id: number;
  pimCode: string;
  name: string;
  slug: string;
  highlightImage: string;
}

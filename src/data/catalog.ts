import catalogData from "./catalog.json";

export interface CatalogProduct {
  id: string;
  name: string;
  sizes: string;
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  summary: string;
  products: CatalogProduct[];
}

// Annotating the type makes TypeScript check every entry in the JSON file.
export const categories: Category[] = catalogData;

// Finds the category whose `slug` matches the one from the address bar.
// `slug` can be undefined because the address might not contain one.
// Returns undefined when no category matches.
export function findCategory(slug: string | undefined): Category | undefined {
  return categories.find(category => category.slug === slug);
}

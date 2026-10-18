import catalogData from "./catalog.json";

export interface CatalogProduct {
  id: string;
  name: string;
  // Either may be an empty string when the company lists none.
  sizes: string;
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  // Which section of the Products page the category appears in.
  group: string;
  summary: string;
  products: CatalogProduct[];
  // Set when the category lives on another website instead of its own page.
  externalUrl?: string;
}

// The sections of the Products page, in the order they appear.
// Draft grouping, pending owner review.
export const categoryGroups = [
  { id: "topcoats-systems", name: "Top Coats & Coating Systems" },
  { id: "primers", name: "Primers" },
  { id: "color-finishes", name: "Color & Stone Finishes" },
  { id: "reducers-cleaners", name: "Reducers & Cleaners" },
  { id: "floors-grip", name: "Floors, Roofs & Grip" },
  { id: "additives-extras", name: "Additives & Extras" },
];

// Annotating the type makes TypeScript check every entry in the JSON file.
export const categories: Category[] = catalogData;

// Finds the category whose `slug` matches the one from the address bar.
// `slug` can be undefined because the address might not contain one.
// Returns undefined when no category matches.
export function findCategory(slug: string | undefined): Category | undefined {
  return categories.find(category => category.slug === slug);
}

// Returns every category in one section of the Products page, in catalog order.
// Returns an empty list when no category belongs to that section.
export function categoriesInGroup(groupId: string): Category[] {
  return categories.filter(category => category.group === groupId);
}

import catalogData from "./catalog.json";

export interface CatalogProduct {
  id: string;
  name: string;
  // Either may be an empty string when the company lists none.
  sizes: string;
  description: string;
  // Path to the product photo in public/images/products, when there is one.
  image?: string;
  // Only for photos that show something the product name doesn't (like the
  // inside of a brochure). Without it, the photo is skipped by screen readers.
  imageAlt?: string;
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
  // Promotion: the last day (YYYY-MM-DD) the category appears in the home
  // page's spotlight and shows its badge.
  promoteUntil?: string;
  // Promotion: the word on the tag, like "New" or "Latest". Leave it out to
  // keep the spotlight without a tag.
  badge?: string;
  // Promotion: one or two sentences for the spotlight.
  pitch?: string;
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

// Whether a category should still be promoted on `today`.
// `today` is a parameter (instead of reading the clock inside) so it's easy
// to check what the site will show on any date.
export function isPromoted(category: Category, today: Date = new Date()): boolean {
  if (!category.promoteUntil) {
    return false;
  }

  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const todayString = `${today.getFullYear()}-${month}-${day}`;

  return todayString <= category.promoteUntil;
}

// Categories to promote right now, in catalog order.
export function promotedCategories(today: Date = new Date()): Category[] {
  return categories.filter((category) => isPromoted(category, today));
}

// Returns every category in one section of the Products page, in catalog order.
// Returns an empty list when no category belongs to that section.
export function categoriesInGroup(groupId: string): Category[] {
  return categories.filter(category => category.group === groupId);
}

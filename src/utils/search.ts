import { categories } from "../data/catalog";
import type { CatalogProduct, Category } from "../data/catalog";

// A product that matched, together with the category it belongs to
// (so the result can link to that category's page).
export interface ProductMatch {
  product: CatalogProduct;
  category: Category;
}

export interface CatalogSearchResults {
  categories: Category[];
  products: ProductMatch[];
}

// Turns one lowercase search word into its singular form, so "topcoats"
// finds "top coat" too. Only the visitor's words are changed: the singular is
// always found inside the plural ("primer" is inside "primers"), so the
// product text can stay as written.
export function toSingular(word: string): string {
  if (word.length <= 3 || word.endsWith("ss")) {
    return word;
  }

  const endings = ["shes", "ches", "xes", "sses"];

  if (endings.some((ending) => word.endsWith(ending))) {
    return word.slice(0, -2);
  }

  if (word.endsWith("s")) {
    return word.slice(0, -1);
  }

  return word;
}

// Decides whether one piece of text (a name plus a description) matches
// what the visitor typed. `query` arrives already trimmed and never empty.
export function matchesQuery(text: string, query: string): boolean {
  const normalizedText = text.toLowerCase();
  const words = query
    .toLowerCase()
    .trim()
    .split(/[\s-]+/)
    .filter(word => word !== "")
    .map(toSingular);
  if (words.length === 0) {
    return false;
  }

  const compactText = normalizedText.replace(/[\s-]+/g, "");
  const compactQuery = words.join("");

  return words.every(word => normalizedText.includes(word)) || compactText.includes(compactQuery);
}

// All the words on a product card, so a search for "aircraft" or "4 hours"
// still finds products whose specs moved out of the description.
function productSearchText(product: CatalogProduct): string {
  return [
    product.name,
    product.description,
    product.mixRatio,
    product.cureTimes,
    product.topCoatAfter,
    product.colors,
    ...(product.uses ?? []),
  ]
    .filter(Boolean)
    .join(" ");
}

// Searches category names and summaries, and everything on each product card.
// Returns null when the search box is empty, meaning "show the normal page".
export function searchCatalog(query: string): CatalogSearchResults | null {
  const trimmed = query.trim();
  if (trimmed === "") return null;

  return {
    categories: categories.filter((category) =>
      matchesQuery(`${category.name} ${category.summary}`, trimmed),
    ),
    products: categories.flatMap((category) =>
      category.products
        .filter((product) => matchesQuery(productSearchText(product), trimmed))
        .map((product) => ({ product, category })),
    ),
  };
}

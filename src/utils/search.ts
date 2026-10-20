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

// Decides whether one piece of text (a name plus a description) matches
// what the visitor typed. `query` arrives already trimmed and never empty.
export function matchesQuery(text: string, query: string): boolean {
  const normalizedText = text.toLowerCase();
  const words = query.toLowerCase().trim().split(/[\s-]+/).filter(word => word !== "");
  if (words.length === 0) {
    return false;
  }
  return words.every(word => normalizedText.includes(word));
}

// Searches category names and summaries, and product names and descriptions.
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
        .filter((product) => matchesQuery(`${product.name} ${product.description}`, trimmed))
        .map((product) => ({ product, category })),
    ),
  };
}

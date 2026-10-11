import productsData from "./products.json";

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
}

// Annotating the type makes TypeScript check every entry in the JSON file
// against the Product shape, so a missing or misspelled field is caught.
export const products: Product[] = productsData;

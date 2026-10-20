import { useState } from "react";
import "./Page.css";
import "./ProductsPage.css";
import { categoriesInGroup, categoryGroups } from "../data/catalog";
import CategoryCard from "../components/CategoryCard";
import SearchResults from "../components/SearchResults";
import { PRODUCTS_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";
import { searchCatalog } from "../utils/search";

// A short sentence announced to screen readers whenever the results change.
function describeResults(query: string, categoryCount: number, productCount: number) {
  const total = categoryCount + productCount;
  if (total === 0) return `No results for "${query}".`;
  const parts = [];
  if (categoryCount > 0) parts.push(`${categoryCount} ${categoryCount === 1 ? "category" : "categories"}`);
  if (productCount > 0) parts.push(`${productCount} ${productCount === 1 ? "product" : "products"}`);
  return `${parts.join(" and ")} match "${query}".`;
}

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const results = searchCatalog(query);

  return (
    <section className="page" aria-labelledby="products-title">
      <title>{formatPageTitle("Products")}</title>
      <meta name="description" content={PRODUCTS_DESCRIPTION} />
      <div className="page__inner">
        <h1 className="page__title" id="products-title">
          Products
        </h1>
        {/* Draft copy: pending owner review. */}
        <p className="page__intro">
          Products for licensed refinishing professionals, grouped by what they do.
          Choose a category to see sizes and details.
        </p>

        <div className="product-search" role="search">
          <label className="product-search__label" htmlFor="product-search">
            Search products
          </label>
          <div className="product-search__row">
            <input
              className="product-search__input"
              id="product-search"
              type="search"
              autoComplete="off"
              placeholder="For example: primer, reducer, stain"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query !== "" && (
              <button
                className="product-search__clear"
                type="button"
                onClick={() => setQuery("")}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Screen readers announce changes to this line as the visitor types. */}
        <p className="product-search__status" aria-live="polite">
          {results &&
            describeResults(query.trim(), results.categories.length, results.products.length)}
        </p>

        {results ? (
          <SearchResults query={query} results={results} />
        ) : (
          categoryGroups.map((group) => (
            <section
              key={group.id}
              className="catalog-group"
              aria-labelledby={`group-${group.id}`}
            >
              <h2 className="catalog-group__title" id={`group-${group.id}`}>
                {group.name}
              </h2>
              <ul className="card-grid">
                {categoriesInGroup(group.id).map((category) => (
                  <li key={category.slug}>
                    <CategoryCard category={category} />
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </div>
    </section>
  );
}

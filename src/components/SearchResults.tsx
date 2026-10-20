import { Link } from "react-router-dom";
import "./SearchResults.css";
import CategoryCard from "./CategoryCard";
import type { CatalogSearchResults } from "../utils/search";

interface SearchResultsProps {
  query: string;
  results: CatalogSearchResults;
}

export default function SearchResults({ query, results }: SearchResultsProps) {
  const { categories, products } = results;

  if (categories.length === 0 && products.length === 0) {
    return (
      <p className="page__text">
        Nothing matches &ldquo;{query.trim()}&rdquo;. Try a shorter word, or{" "}
        <Link to="/contact">contact us</Link> and we&apos;ll help you find it.
      </p>
    );
  }

  return (
    <>
      {categories.length > 0 && (
        <section className="search-group" aria-labelledby="results-categories">
          <h2 className="search-group__title" id="results-categories">
            Categories
          </h2>
          <ul className="card-grid">
            {categories.map((category) => (
              <li key={category.slug}>
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {products.length > 0 && (
        <section className="search-group" aria-labelledby="results-products">
          <h2 className="search-group__title" id="results-products">
            Products
          </h2>
          <ul className="search-results">
            {products.map(({ product, category }) => (
              <li className="search-result" key={product.id}>
                <Link className="search-result__link" to={`/products/${category.slug}`}>
                  {product.name}
                </Link>{" "}
                <span className="search-result__category">in {category.name}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

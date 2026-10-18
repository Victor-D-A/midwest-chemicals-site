import "./Page.css";
import { categories } from "../data/catalog";
import CategoryCard from "../components/CategoryCard";
import { PRODUCTS_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";

export default function ProductsPage() {
  return (
    <section className="page" aria-labelledby="products-title">
      <title>{formatPageTitle("Products")}</title>
      <meta name="description" content={PRODUCTS_DESCRIPTION} />
      <div className="page__inner">
        <h1 className="page__title" id="products-title">
          Products
        </h1>
        {/* Placeholder copy: replace with the real wording before launch. */}
        <p className="page__intro">
          A short placeholder sentence introducing the product catalog.
        </p>

        <ul className="card-grid">
          {categories.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

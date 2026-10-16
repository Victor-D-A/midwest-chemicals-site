import "./ProductsPage.css";
import { categories } from "./catalog";
import CategoryCard from "./CategoryCard";
import { formatPageTitle } from "./pageTitle";

export default function ProductsPage() {
  return (
    <section className="products-page" aria-labelledby="products-title">
      <title>{formatPageTitle("Products")}</title>
      <div className="products-page__inner">
        <h1 className="products-page__title" id="products-title">
          Products
        </h1>
        {/* Placeholder copy: replace with the real wording before launch. */}
        <p className="products-page__intro">
          A short placeholder sentence introducing the product catalog.
        </p>

        <ul className="products-page__grid">
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

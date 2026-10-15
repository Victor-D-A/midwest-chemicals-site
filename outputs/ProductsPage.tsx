import "./ProductsPage.css";
import { formatPageTitle } from "./pageTitle";
import ProductCard from "./ProductCard";
import { products } from "./products";

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
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

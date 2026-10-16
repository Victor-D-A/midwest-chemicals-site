import { Link, useParams } from "react-router-dom";
import "./ProductsPage.css";
import CatalogProductCard from "./CatalogProductCard";
import { findCategory } from "./catalog";
import { formatPageTitle } from "./pageTitle";

export default function CategoryPage() {
  // `slug` is the part of the address after /products/ (for example "top-coats").
  const { slug } = useParams();
  const category = findCategory(slug);

  if (!category) {
    return(
      <section className="products-page" aria-labelledby="category-not-found-title">
      <title>{formatPageTitle("Category not found")}</title>
      <div className="products-page__inner">
        <h1 className="products-page__title" id="category-not-found-title">
          Category not found
        </h1>
        <p className="products-page__intro">Head to the{" "}
          <Link to="/products">products page</Link>
        </p>
      </div>
      </section>
    );
  }

  return (
    <section className="products-page" aria-labelledby="category-title">
      <title>{formatPageTitle(category.name)}</title>
      <div className="products-page__inner">
        <p className="products-page__back">
          <Link to="/products">&larr; All products</Link>
        </p>
        <h1 className="products-page__title" id="category-title">
          {category.name}
        </h1>
        <p className="products-page__intro">{category.summary}</p>

        <ul className="products-page__grid">
          {category.products.map((product) => (
            <li key={product.id}>
              <CatalogProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { Link, useParams } from "react-router-dom";
import "./Page.css";
import Callouts from "../components/Callouts";
import CatalogProductCard from "../components/CatalogProductCard";
import PromoTag from "../components/PromoTag";
import { findCategory } from "../data/catalog";
import { formatPageTitle } from "../utils/pageTitle";
import { siteName } from "../utils/url";

export default function CategoryPage() {
  // `slug` is the part of the address after /products/ (for example "top-coats").
  const { slug } = useParams();
  const category = findCategory(slug);

  if (!category) {
    return(
      <section className="page" aria-labelledby="category-not-found-title">
      <title>{formatPageTitle("Category not found")}</title>
      <meta name="robots" content="noindex" />
      <div className="page__inner">
        <h1 className="page__title" id="category-not-found-title">
          Category not found
        </h1>
        <p className="page__intro">Head to the{" "}
          <Link to="/products">products page</Link>
        </p>
      </div>
      </section>
    );
  }

  return (
    <section className="page" aria-labelledby="category-title">
      <title>{formatPageTitle(category.name)}</title>
      <meta name="description" content={category.summary} />
      <div className="page__inner">
        <p className="page__back">
          <Link to="/products">&larr; All products</Link>
        </p>
        <h1 className="page__title" id="category-title">
          {category.name}
          <PromoTag category={category} />
        </h1>
        <p className="page__intro">{category.summary}</p>

        <Callouts />

        {category.externalUrl && (
          <p className="page__text">
            <a href={category.externalUrl}>
              Visit {siteName(category.externalUrl)}
            </a>
          </p>
        )}

        {category.products.length > 0 ? (
          <ul className="card-grid">
            {category.products.map((product) => (
              <li key={product.id}>
                <CatalogProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          !category.externalUrl && (
            <p className="page__text">
              For details, colors, or samples, <Link to="/contact">contact us</Link>.
            </p>
          )
        )}
      </div>
    </section>
  );
}

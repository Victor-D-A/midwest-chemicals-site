import { Link } from "react-router-dom";
import "./ProductsPage.css";

export default function NotFoundPage() {
  return (
    <section className="products-page" aria-labelledby="not-found-title">
      <div className="products-page__inner">
        <h1 className="products-page__title" id="not-found-title">
          Page not found
        </h1>
        <p className="products-page__intro">
          That page doesn&apos;t exist yet. <Link to="/">Go back home</Link>.
        </p>
      </div>
    </section>
  );
}

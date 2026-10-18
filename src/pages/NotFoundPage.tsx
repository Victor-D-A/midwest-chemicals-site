import { Link } from "react-router-dom";
import "./Page.css";
import { formatPageTitle } from "../utils/pageTitle";

export default function NotFoundPage() {
  return (
    <section className="page" aria-labelledby="not-found-title">
      <title>{formatPageTitle("Page not found")}</title>
      <meta name="robots" content="noindex" />
      <div className="page__inner">
        <h1 className="page__title" id="not-found-title">
          Page not found
        </h1>
        <p className="page__intro">
          That page doesn&apos;t exist yet. <Link to="/">Go back home</Link>.
        </p>
      </div>
    </section>
  );
}

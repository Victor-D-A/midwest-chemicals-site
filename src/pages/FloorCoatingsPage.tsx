import { Link } from "react-router-dom";
import "./Page.css";
import "./FloorCoatingsPage.css";
import { FLOOR_COATINGS_DESCRIPTION } from "../data/pageDescriptions";
import { stoneluxe } from "../data/stoneluxe";
import { formatPageTitle } from "../utils/pageTitle";
import { siteName } from "../utils/url";

// A custom page for Floor Coatings. It replaces the general category page
// because StoneLuxe500 has its own store, guides, and colors to point to.
export default function FloorCoatingsPage() {
  return (
    <section className="page" aria-labelledby="floor-coatings-title">
      <title>{formatPageTitle("Floor Coatings")}</title>
      <meta name="description" content={FLOOR_COATINGS_DESCRIPTION} />
      <div className="page__inner">
        <p className="page__back">
          <Link to="/products">&larr; All products</Link>
        </p>
        <h1 className="page__title" id="floor-coatings-title">
          Floor Coatings
        </h1>
        {/* Draft copy from the StoneLuxe500 store: pending owner review. */}
        <p className="page__intro">
          StoneLuxe500 is our roll-on floor coating system for a durable, stone-like
          finish on garages, workshops, patios, and commercial spaces. It is sold
          through its own online store.
        </p>
        <p className="floor-cta">
          <a className="floor-cta__button" href={stoneluxe.storeUrl}>
            Visit the StoneLuxe500 store
          </a>
          <span className="floor-cta__note">Opens {siteName(stoneluxe.storeUrl)}</span>
        </p>

        <section className="floor-section" aria-labelledby="floor-why">
          <h2 className="floor-section__title" id="floor-why">
            Why StoneLuxe500
          </h2>
          <ul className="card-grid">
            {stoneluxe.sellingPoints.map((point) => (
              <li key={point.title}>
                <article className="floor-point">
                  <h3 className="floor-point__title">{point.title}</h3>
                  <p className="floor-point__text">{point.text}</p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="floor-section" aria-labelledby="floor-steps">
          <h2 className="floor-section__title" id="floor-steps">
            How it works
          </h2>
          <ol className="floor-steps">
            {stoneluxe.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="page__text">
            <a href={stoneluxe.guideUrl}>Read the full application guide</a>
          </p>
        </section>

        <section className="floor-section" aria-labelledby="floor-store">
          <h2 className="floor-section__title" id="floor-store">
            Explore the store
          </h2>
          <ul className="floor-links">
            {stoneluxe.storeLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

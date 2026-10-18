import { Link } from "react-router-dom";
import "./Page.css";
import { ABOUT_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";

export default function AboutPage() {
  return (
    <section className="page" aria-labelledby="about-title">
      <title>{formatPageTitle("About")}</title>
      <meta name="description" content={ABOUT_DESCRIPTION} />
      <div className="page__inner">
        <h1 className="page__title" id="about-title">
          About Midwest Chemicals
        </h1>
        <p className="page__intro">
          Serving the refinishing industry since 1991 from Orlando, Florida.
        </p>
        {/* Placeholder copy: pending owner review. */}
        <p className="page__text">
          Placeholder: the company&apos;s story, what sets its products apart, and its
          warranty.
        </p>
        <p className="page__text">
          Questions? <Link to="/contact">Contact us</Link>.
        </p>
      </div>
    </section>
  );
}

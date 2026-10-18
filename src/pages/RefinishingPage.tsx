import { Link } from "react-router-dom";
import "./Page.css";
import { refinishingApplications } from "../data/refinishing";
import { REFINISHING_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";

export default function RefinishingPage() {
  return (
    <section className="page" aria-labelledby="refinishing-title">
      <title>{formatPageTitle("Refinishing")}</title>
      <meta name="description" content={REFINISHING_DESCRIPTION} />
      <div className="page__inner">
        <h1 className="page__title" id="refinishing-title">
          Refinishing
        </h1>
        {/* Placeholder copy: pending owner review. */}
        <p className="page__intro">
          Placeholder: how Midwest Chemicals products are used for each surface.
        </p>

        <ul className="page__list">
          {refinishingApplications.map((application) => (
            <li key={application}>{application}</li>
          ))}
        </ul>

        <p className="page__text">
          <Link to="/products">See all products</Link>
        </p>
      </div>
    </section>
  );
}

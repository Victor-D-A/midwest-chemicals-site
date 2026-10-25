import "./Page.css";
import SurfaceCard from "../components/SurfaceCard";
import { refinishingSurfaces } from "../data/refinishing";
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
        {/* Draft copy: pending owner review. */}
        <p className="page__intro">
          Pick a surface to see which products to use and how they go on.
        </p>

        <ul className="card-grid">
          {refinishingSurfaces.map((surface) => (
            <li key={surface.slug}>
              <SurfaceCard surface={surface} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

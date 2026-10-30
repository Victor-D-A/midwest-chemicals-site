import { Link, useParams } from "react-router-dom";
import "./Page.css";
import "./RefinishingSurfacePage.css";
import ColorGallery from "../components/ColorGallery";
import TroubleshootingGuide from "../components/TroubleshootingGuide";
import { audienceLabels, findSurface } from "../data/refinishing";
import { formatPageTitle } from "../utils/pageTitle";

export default function RefinishingSurfacePage() {
  // `slug` is the part of the address after /refinishing/ (for example "tile").
  const { slug } = useParams();
  const surface = findSurface(slug);

  if (!surface) {
    return (
      <section className="page" aria-labelledby="surface-not-found-title">
        <title>{formatPageTitle("Surface not found")}</title>
        <meta name="robots" content="noindex" />
        <div className="page__inner">
          <h1 className="page__title" id="surface-not-found-title">
            Surface not found
          </h1>
          <p className="page__intro">
            See every surface on the <Link to="/refinishing">Refinishing page</Link>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page" aria-labelledby="surface-title">
      <title>{formatPageTitle(surface.name)}</title>
      <meta name="description" content={surface.summary} />
      <div className="page__inner">
        <p className="page__back">
          <Link to="/refinishing">&larr; All surfaces</Link>
        </p>
        <h1 className="page__title" id="surface-title">
          {surface.name}
        </h1>
        {surface.audience && (
          <p className="surface__audience">{audienceLabels[surface.audience]}</p>
        )}

        {/* Draft copy from the current site: pending owner review. */}
        {surface.paragraphs.map((paragraph) => (
          <p className="page__text" key={paragraph}>
            {paragraph}
          </p>
        ))}

        {surface.colors && (
          <ColorGallery
            title="Color selection"
            colors={surface.colors}
            note={surface.colorNote}
          />
        )}

        {surface.processes?.map((process) => (
          <section className="surface__section" key={process.title}>
            <h2 className="surface__heading">{process.title}</h2>
            <ol className="surface__steps">
              {process.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        ))}

        {surface.notes && (
          <aside className="surface__notes" aria-labelledby="surface-notes-title">
            <h2 className="surface__notes-title" id="surface-notes-title">
              Important
            </h2>
            <ul>
              {surface.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>
        )}

        {surface.troubleshooting && (
          <TroubleshootingGuide issues={surface.troubleshooting} />
        )}

        {surface.relatedProducts && (
          <section className="surface__section">
            <h2 className="surface__heading">Products for this job</h2>
            <ul className="surface__products">
              {surface.relatedProducts.map((product) => (
                <li key={product.to}>
                  <Link to={product.to}>{product.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="page__text surface__contact">
          Questions about a job? <Link to="/contact">Contact us</Link>.
        </p>
      </div>
    </section>
  );
}

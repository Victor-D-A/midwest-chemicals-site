import { Link } from "react-router-dom";
import "./Page.css";
import "./MultiSpecExamplesPage.css";
import { contact } from "../data/contact";
import { multiSpecExamples } from "../data/multiSpecExamples";
import { MULTI_SPEC_EXAMPLES_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";
import { callHref } from "../utils/phone";

// Same address as on the company's current website, so old links and
// bookmarks still land here.
export default function MultiSpecExamplesPage() {
  const mainPhone = contact.phones[0];

  return (
    <section className="page" aria-labelledby="examples-title">
      <title>{formatPageTitle("Multi-Spec Examples")}</title>
      <meta name="description" content={MULTI_SPEC_EXAMPLES_DESCRIPTION} />
      <div className="page__inner">
        <p className="page__back">
          <Link to="/products/multi-spec-colors">&larr; Multi-Spec Colors</Link>
        </p>
        <h1 className="page__title" id="examples-title">
          Multi-Spec examples
        </h1>
        {/* Draft copy: pending owner review. */}
        <p className="page__intro">
          Real jobs finished with Multi-Spec. Pick a color in our{" "}
          <Link to="/products/multi-spec-colors">sample case</Link>, then see how to apply it
          in the <Link to="/refinishing/multi-spec-instructions">instructions</Link>.
        </p>

        <ul className="examples__grid">
          {multiSpecExamples.map((photo, index) => {
            // The first photo leads, full width; undefined (not "") leaves
            // the others without an empty class attribute.
            const itemClass = index === 0 ? "examples__item--lead" : undefined;

            return (
              <li key={photo.src} className={itemClass}>
                <figure className="examples__figure">
                  <img
                    className="examples__image"
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt}
                    // The lead photo is seen right away, so it loads now;
                    // the rest wait until someone scrolls near them.
                    loading={index > 0 ? "lazy" : "eager"}
                  />
                  <figcaption className="examples__caption">{photo.caption}</figcaption>
                </figure>
              </li>
            );
          })}
        </ul>

        <p className="examples__help">
          Want this look? Call <a href={callHref(mainPhone.number)}>{mainPhone.number}</a> or{" "}
          <Link to="/contact">contact us</Link> to order. Se habla español.
        </p>
      </div>
    </section>
  );
}

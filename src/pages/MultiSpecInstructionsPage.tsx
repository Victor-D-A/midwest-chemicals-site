import { Link } from "react-router-dom";
import "./Page.css";
import "./MultiSpecInstructionsPage.css";
import { contact } from "../data/contact";
import {
  multiSpecCabinetNote,
  multiSpecEquipment,
  multiSpecSteps,
} from "../data/multiSpecInstructions";
import { MULTI_SPEC_INSTRUCTIONS_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";
import { callHref } from "../utils/phone";

// The products the steps use, so a refinisher can go straight to each one.
const productsUsed = [
  { label: "Cleaners", detail: "Glass Etch and Premiere Cleaner", to: "/products/cleaners" },
  { label: "Primers", detail: "XL Aerospace", to: "/products/primers" },
  { label: "Multi-Spec", detail: "The color and its clear coats", to: "/products/multi-spec" },
  { label: "Multi-Spec Colors", detail: "Every color in the sample case", to: "/products/multi-spec-colors" },
];

// Same address as on the company's current website, so old links and
// bookmarks still land here.
export default function MultiSpecInstructionsPage() {
  const mainPhone = contact.phones[0];

  return (
    <section className="page" aria-labelledby="instructions-title">
      <title>{formatPageTitle("Multi-Spec Instructions")}</title>
      <meta name="description" content={MULTI_SPEC_INSTRUCTIONS_DESCRIPTION} />
      <div className="page__inner">
        <p className="page__back">
          <Link to="/refinishing">&larr; Refinishing</Link>
        </p>
        <h1 className="page__title" id="instructions-title">
          Multi-Spec instructions
        </h1>
        {/* Draft copy: pending owner review. */}
        <p className="page__intro">
          How professional refinishers apply Multi-Spec on countertops, sinks, bathtubs,
          ceramic tile, floors, cabinets, and interior walls.
        </p>

        <div className="instructions__layout">
          <div>
            <h2 className="instructions__heading">Steps</h2>
            <ol className="instructions__steps">
              {multiSpecSteps.map((step) => (
                <li key={step.title}>
                  <strong className="instructions__step-title">
                    {step.title}
                    {step.optional && <span className="instructions__optional">Optional</span>}
                  </strong>
                  <p className="instructions__step-text">{step.text}</p>
                </li>
              ))}
            </ol>

            <p className="instructions__note">
              <strong>Cabinets and interior walls:</strong> {multiSpecCabinetNote}
            </p>
          </div>

          <aside className="instructions__aside" aria-labelledby="instructions-equipment">
            <h2 className="instructions__aside-title" id="instructions-equipment">
              Spray equipment
            </h2>
            <p className="instructions__aside-text">{multiSpecEquipment}</p>

            <h2 className="instructions__aside-title" id="instructions-products">
              Products used
            </h2>
            <ul className="instructions__products" aria-labelledby="instructions-products">
              {productsUsed.map((product) => (
                <li key={product.to}>
                  <Link className="instructions__product-link" to={product.to}>
                    {product.label}
                  </Link>
                  <span className="instructions__product-detail">{product.detail}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <p className="instructions__help">
          Technical questions about Multi-Spec? Call{" "}
          <a href={callHref(mainPhone.number)}>{mainPhone.number}</a> or{" "}
          <Link to="/contact">contact us</Link>. Se habla español.
        </p>
      </div>
    </section>
  );
}

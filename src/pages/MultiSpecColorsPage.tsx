import { Link } from "react-router-dom";
import "./Page.css";
import "./MultiSpecColorsPage.css";
import ColorGallery from "../components/ColorGallery";
import { findCategory } from "../data/catalog";
import { multiSpecColors } from "../data/multiSpecColors";
import { formatPageTitle } from "../utils/pageTitle";

const category = findCategory("multi-spec-colors");

// A custom page for the full Multi-Spec color case, like the Metal Flake page:
// this category is all about seeing the colors.
export default function MultiSpecColorsPage() {
  return (
    <section className="page" aria-labelledby="multi-spec-colors-title">
      <title>{formatPageTitle("Multi-Spec Colors")}</title>
      {category && <meta name="description" content={category.summary} />}
      <div className="page__inner">
        <p className="page__back">
          <Link to="/products">&larr; All products</Link>
        </p>
        <h1 className="page__title" id="multi-spec-colors-title">
          Multi-Spec Colors
        </h1>
        {/* Draft copy: pending owner review. */}
        <p className="page__intro">
          Every color in our Multi-Spec sample case: {multiSpecColors.length} speckled stone
          finishes for countertops, bathtubs, tile, cabinets, and walls.
        </p>

        <div className="multi-spec__intro">
          {/* The real case, so refinishers can see the samples they'll be
              choosing from. */}
          <img
            className="multi-spec__case"
            src="/images/colors/multi-spec-sample-case.jpg"
            width={800}
            height={720}
            alt="Open carrying case holding three rows of Multi-Spec sample chips in speckled whites, tans, browns, grays, blacks, blues, and greens."
          />
          <div>
            <p className="page__text">
              Multi-Spec is a water-based, one-stage coating that sprays on with an HVLP gun
              and turbine system and dries to the look and feel of speckled stone.
            </p>
            <p className="page__text">
              Pick a color below to see it larger, or step through them with Previous and
              Next.
            </p>
            <p className="page__text">
              <Link to="/products/multi-spec">See Multi-Spec products</Link> or{" "}
              <Link to="/contact">contact us</Link> to order.
            </p>
          </div>
        </div>

        <ColorGallery
          title="All colors"
          colors={multiSpecColors}
          note="Colors may look up to 10% different on screen than in person."
        />
      </div>
    </section>
  );
}

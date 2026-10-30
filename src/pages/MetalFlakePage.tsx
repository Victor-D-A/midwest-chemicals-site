import { Link } from "react-router-dom";
import "./Page.css";
import ColorGallery from "../components/ColorGallery";
import { findCategory } from "../data/catalog";
import { metalFlakePairedColors, metalFlakePrimerColors } from "../data/metalFlakeColors";
import { formatPageTitle } from "../utils/pageTitle";

const category = findCategory("metal-flake-primer-colors");

// A custom page for Metal Flake Primer Colors. It replaces the general
// category page because this category is all about seeing the colors.
export default function MetalFlakePage() {
  return (
    <section className="page" aria-labelledby="metal-flake-title">
      <title>{formatPageTitle("Metal Flake Primer Colors")}</title>
      {category && <meta name="description" content={category.summary} />}
      <div className="page__inner">
        <p className="page__back">
          <Link to="/products">&larr; All products</Link>
        </p>
        <h1 className="page__title" id="metal-flake-title">
          Metal Flake Primer Colors
        </h1>
        {/* Draft copy from the current site: pending owner review. */}
        <p className="page__intro">
          Use our metal flake primer colors to enhance our Multi-Spec color selection. Paired
          with Multi-Spec, they give the finish a three-dimensional look with a flare.
        </p>
        <ColorGallery
          title="Primer Colors"
          colors={metalFlakePrimerColors}
          note="Colors may look up to 10% different on screen than in person."
        />
        <ColorGallery
          title="Paired with Multi-Spec"
          colors={metalFlakePairedColors}
          intro={<>A metal flake primer under Multi-Spec gives the finish a{" "}<strong>3D appearance.</strong></>}
        />
      </div>
    </section>
  );
}

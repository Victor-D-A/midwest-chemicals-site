import { Link } from "react-router-dom";
import "./ColorShowcase.css";
import { showcaseColorNames } from "../data/home";
import { multiSpecColors } from "../data/multiSpecColors";

const COLORS_PAGE = "/products/multi-spec-colors";

// Look the showcase colors up once; skip any name that isn't in the list.
const showcaseColors = showcaseColorNames
  .map((name) => multiSpecColors.find((color) => color.name === name))
  .filter((color) => color !== undefined);

// "Find your color": a row of round Multi-Spec swatches on the home page.
// Each one opens the colors page with that color already selected.
export default function ColorShowcase() {
  if (showcaseColors.length === 0) return null;

  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <div className="showcase__inner">
        <h2 className="showcase__title" id="showcase-title">
          Find your color
        </h2>
        <p className="showcase__intro">
          {multiSpecColors.length} Multi-Spec stone finishes. Tap one to see it up close.
        </p>

        {/* Scrolls sideways on narrow screens instead of stacking. */}
        <ul className="showcase__list">
          {showcaseColors.map((color) => (
            <li className="showcase__item" key={color.name}>
              <Link
                className="showcase__link"
                to={`${COLORS_PAGE}?color=${encodeURIComponent(color.name)}`}
              >
                {/* The visible name says which color it is, so the photo is
                    decorative here. The full description is on the colors page. */}
                <img className="showcase__swatch" src={color.image} alt="" loading="lazy" />
                <span className="showcase__name">{color.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="showcase__more">
          <Link className="showcase__button" to={COLORS_PAGE}>
            Browse all {multiSpecColors.length} colors
          </Link>
        </p>
      </div>
    </section>
  );
}

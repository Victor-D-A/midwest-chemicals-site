import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Page.css";
import "./MultiSpecColorsPage.css";
import ColorGallery, { type PreviewView } from "../components/ColorGallery";
import { findCategory } from "../data/catalog";
import { multiSpecColors } from "../data/multiSpecColors";
import { multiSpecExamples } from "../data/multiSpecExamples";
import { formatPageTitle } from "../utils/pageTitle";

const category = findCategory("multi-spec-colors");

// Turns the ?view= part of the address into a starting view for the gallery:
// "closeup", "bathroom" or "kitchen". Anyone can type anything there (or
// nothing, which gives null). Links made before the kitchen existed say
// ?view=countertop, including the home page's "See them on a countertop".
function readView(value: string | null): PreviewView {
  const normalized = (value ?? "closeup").toLowerCase();

  if (normalized === "kitchen") {
    return "kitchen";
  }

  if (normalized === "bathroom" || normalized === "countertop") {
    return "bathroom";
  }

  return "closeup";
}

// A custom page for the full Multi-Spec color case, like the Metal Flake page:
// this category is all about seeing the colors.
export default function MultiSpecColorsPage() {
  // A link like /products/multi-spec-colors?color=Bellagio opens the page with
  // that color selected. Null when the address has no ?color= part.
  const [searchParams] = useSearchParams();
  const colorName = searchParams.get("color");
  const view = readView(searchParams.get("view"));
  const galleryRef = useRef<HTMLDivElement>(null);

  // When a color was chosen from a link, jump down to the gallery so the
  // visitor sees it right away instead of the page intro. Waits one frame so
  // it runs after the app moves focus to the new page.
  useEffect(() => {
    if (!colorName && view === "closeup") return;
    const frame = requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      galleryRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [colorName, view]);

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
              Pick a color below to see it larger or on a countertop, or step through them
              with Previous and Next.
            </p>
            <p className="page__text">
              <Link to="/products/multi-spec">See Multi-Spec products</Link> or{" "}
              <Link to="/contact">contact us</Link> to order.
            </p>
            <p className="page__text">
              <Link to="/refinishing/multi-spec-instructions">How to apply Multi-Spec</Link>
            </p>
          </div>
        </div>

        {/* Finished jobs: one strong photo as proof, leading to the full
            gallery, so the colors below stay uncluttered. */}
        <section className="multi-spec-teaser" aria-labelledby="multi-spec-teaser-title">
          <img
            className="multi-spec-teaser__image"
            src={multiSpecExamples[0].src}
            width={multiSpecExamples[0].width}
            height={multiSpecExamples[0].height}
            loading="lazy"
            alt={multiSpecExamples[0].alt}
          />
          <div className="multi-spec-teaser__body">
            <h2 className="multi-spec-teaser__title" id="multi-spec-teaser-title">
              See Multi-Spec on real jobs
            </h2>
            {/* Draft copy: pending owner review. */}
            <p className="multi-spec-teaser__text">
              Tubs, countertops, vanities, and shower tile finished by refinishers using
              Multi-Spec.
            </p>
            <Link
              className="multi-spec-teaser__button"
              to="/refinishing/countertops/multi-spec-examples"
            >
              See all {multiSpecExamples.length} examples
            </Link>
          </div>
        </section>

        {/* `key` restarts the gallery when the color or view in the address
            changes, so it starts where the new link says. */}
        <div ref={galleryRef}>
          <ColorGallery
            key={`${colorName ?? "default"}-${view}`}
            title="All colors"
            colors={multiSpecColors}
            note="Colors may look up to 10% different on screen than in person."
            initialColorName={colorName}
            countertopView
            initialView={view}
          />
        </div>
      </div>
    </section>
  );
}

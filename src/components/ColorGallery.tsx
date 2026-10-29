import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ColorGallery.css";
import type { ColorSwatch } from "../data/customColors";

interface ColorGalleryProps {
  colors: ColorSwatch[];
  // Shown in a highlighted box above the colors, where people compare them.
  note?: string;
}

// A large preview of the selected color above (or beside) a grid of tiles.
export default function ColorGallery({ colors, note }: ColorGalleryProps) {
  const [selected, setSelected] = useState<ColorSwatch | undefined>(colors[0]);
  const previewRef = useRef<HTMLDivElement>(null);

  if (!selected) return null;

  function choose(color: ColorSwatch) {
    setSelected(color);

    // On a phone the preview sits above the grid, so after scrolling down to
    // a tile, bring the preview back into view. On wider screens it stays
    // pinned in place, so its top is never above the window and this skips.
    const preview = previewRef.current;
    if (!preview || preview.getBoundingClientRect().top >= 0) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    preview.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <section className="color-gallery" aria-labelledby="color-gallery-title">
      <h2 className="color-gallery__title" id="color-gallery-title">
        Color selection
      </h2>

      {note && (
        <p className="color-gallery__note">
          <strong>{note}</strong> If the exact shade matters, check with us before
          ordering. <Link to="/contact">Contact us</Link>
        </p>
      )}

      <div className="color-gallery__layout">
        <div className="color-gallery__preview" ref={previewRef}>
          {/* Shown at the photo's real size (300px) so it never looks blurry. */}
          <img
            className="color-gallery__preview-image"
            src={selected.image}
            width={300}
            height={300}
            alt={selected.imageAlt}
          />
          {/* Announces the new color to screen readers when it changes. */}
          <p className="color-gallery__preview-name" aria-live="polite">
            {selected.name}
          </p>
        </div>

        {/* Radio buttons, because the visitor picks exactly one color. The
            browser makes them one Tab stop, with arrow keys moving between
            colors and selecting as they go. */}
        <fieldset className="color-gallery__picker">
          <legend className="color-gallery__count">
            {colors.length} colors. Select one to see it larger.
          </legend>
          <ul className="color-gallery__grid">
            {colors.map((color) => (
              <li key={color.name}>
                <label className="color-gallery__tile">
                  <input
                    className="color-gallery__radio"
                    type="radio"
                    name="multistone-color"
                    value={color.name}
                    checked={color.name === selected.name}
                    onChange={() => choose(color)}
                    // Starts with the visible name, then adds what the photo shows.
                    aria-label={`${color.name}: ${color.imageAlt}`}
                  />
                  <img
                    className="color-gallery__image"
                    src={color.image}
                    width={300}
                    height={300}
                    loading="lazy"
                    alt=""
                  />
                  <span className="color-gallery__name">{color.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      </div>
    </section>
  );
}

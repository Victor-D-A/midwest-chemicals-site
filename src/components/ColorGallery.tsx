import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import "./ColorGallery.css";
import CountertopPreview from "./CountertopPreview";
import { countertopScenes, type CountertopRoom } from "../data/countertopScenes";
import type { ColorSwatch } from "../data/customColors";

interface ColorGalleryProps {
  title: string;
  colors: ColorSwatch[];
  // A sentence under the heading that describes these colors. ReactNode
  // accepts plain text or JSX, so a key phrase can be wrapped in <strong>.
  intro?: ReactNode;
  // A highlighted warning above the colors, where people compare them.
  note?: string;
  // The name of the color to show first, for example from a link like
  // ?color=Bellagio. Falls back to the first color.
  initialColorName?: string | null;
  // Adds a switch between the close-up and the color on a countertop, in a
  // bathroom or a kitchen.
  countertopView?: boolean;
  // Which picture the preview starts on, for example from a link like
  // ?view=kitchen. Falls back to the close-up.
  initialView?: PreviewView;
}

export type PreviewView = "closeup" | CountertopRoom;

// The countertop rooms, in button order.
const rooms = Object.keys(countertopScenes) as CountertopRoom[];

// A large preview of the selected color above (or beside) a grid of tiles.
export default function ColorGallery({
  title,
  colors,
  intro,
  note,
  initialColorName,
  countertopView = false,
  initialView = "closeup",
}: ColorGalleryProps) {
  const matchingColor = colors.find((color) => color.name === initialColorName);

  const startColor = matchingColor ?? colors[0];

  const [selected, setSelected] = useState<ColorSwatch | undefined>(startColor);
  // Which picture the preview shows. Kept when the color changes, so someone
  // comparing countertops can click through colors without switching back.
  const [view, setView] = useState<PreviewView>(initialView);
  const previewRef = useRef<HTMLDivElement>(null);
  // The enlarged countertop view, opened from the countertop picture.
  const viewerRef = useRef<HTMLDialogElement>(null);
  // A unique id for this gallery, so two galleries on one page don't share
  // a heading id or a radio group (which would let only one color be picked).
  const id = useId();

  if (!selected) return null;

  // Where the selected color sits in the list (0 for the first), for the
  // "6 of 13" counter and the Previous and Next buttons.
  const selectedIndex = colors.findIndex((color) => color.name === selected.name);

  // Moves to the next color (direction 1) or the previous one (direction -1).
  function step(direction: 1 | -1) {
    const nextIndex = (selectedIndex + direction + colors.length) % colors.length;

    const nextColor = colors[nextIndex];

    if (!nextColor) {
      return;
    }

    choose(nextColor);
  }

  function choose(color: ColorSwatch) {
    setSelected(color);

    // While the enlarged view is open, the page behind it shouldn't scroll.
    if (viewerRef.current?.open) return;

    // On a phone the preview sits above the grid, so after scrolling down to
    // a tile, bring the preview back into view. On wider screens it stays
    // pinned in place, so its top is never above the window and this skips.
    const preview = previewRef.current;
    if (!preview || preview.getBoundingClientRect().top >= 0) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    preview.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  function openViewer() {
    viewerRef.current?.showModal();
  }

  function closeViewer() {
    viewerRef.current?.close();
  }

  // Keys pressed inside the enlarged view. Escape (close) and Tab (move
  // between its buttons) already work, because it's a <dialog>.
  function handleViewerKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      step(-1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      step(1);
      return;
    }
  }

  return (
    <section className="color-gallery" aria-labelledby={`${id}-title`}>
      <h2 className="color-gallery__title" id={`${id}-title`}>
        {title}
      </h2>

      {intro && <p className="color-gallery__intro">{intro}</p>}

      {note && (
        <p className="color-gallery__note">
          <strong>{note}</strong> If the exact shade matters, check with us before
          ordering. <Link to="/contact">Contact us</Link>
        </p>
      )}

      <div
        className={`color-gallery__layout${countertopView ? " color-gallery__layout--wide" : ""}`}
      >
        <div className="color-gallery__preview" ref={previewRef}>
          {countertopView && (
            <div className="color-gallery__views" role="group" aria-label="Preview">
              <button
                type="button"
                className="color-gallery__view"
                aria-pressed={view === "closeup"}
                onClick={() => setView("closeup")}
              >
                Close-up
              </button>
              {rooms.map((room) => (
                <button
                  key={room}
                  type="button"
                  className="color-gallery__view"
                  aria-pressed={view === room}
                  onClick={() => setView(room)}
                >
                  {room[0].toUpperCase() + room.slice(1)}
                </button>
              ))}
            </div>
          )}

          {countertopView && view !== "closeup" ? (
            // Only the countertop can be enlarged: it's drawn, so it stays
            // sharp at any size. The close-up photos are 300px and would blur.
            <>
              <button
                className="color-gallery__enlarge"
                type="button"
                onClick={openViewer}
                aria-label={`Enlarge ${selected.name} on a ${view} countertop`}
              >
                <CountertopPreview color={selected} scene={countertopScenes[view]} />
                <span className="color-gallery__enlarge-badge" aria-hidden="true">
                  &#x2922; Enlarge
                </span>
              </button>
              <p className="color-gallery__hint">Tap the countertop to see it larger.</p>
            </>
          ) : (
            <>
              {/* Shown at the photo's real size (300px) so it never looks blurry. */}
              <img
                className="color-gallery__preview-image"
                src={selected.image}
                width={300}
                height={300}
                alt={selected.imageAlt}
              />
              {countertopView && (
                <p className="color-gallery__hint">
                  For a bigger view, choose <strong>Bathroom</strong> or{" "}
                  <strong>Kitchen</strong> and tap the picture.
                </p>
              )}
            </>
          )}
          {/* Announces the new color to screen readers when it changes. */}
          <p className="color-gallery__preview-name" aria-live="polite">
            {selected.name}
          </p>

          {/* Step through the colors without hunting for tiles: handy on
              phones, where the tiles are below the preview. */}
          <div className="color-gallery__stepper">
            {/* The arrows are decoration, so screen readers just say
                "Previous" and "Next". */}
            <button className="color-gallery__step" type="button" onClick={() => step(-1)}>
              <span aria-hidden="true">&larr; </span>Previous
            </button>
            <span className="color-gallery__position">
              {selectedIndex + 1} of {colors.length}
            </span>
            <button className="color-gallery__step" type="button" onClick={() => step(1)}>
              Next<span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
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
                    name={`${id}-color`}
                    value={color.name}
                    checked={color.name === selected.name}
                    onChange={() => choose(color)}
                    // Safari (and Firefox on a Mac) don't move focus to a radio
                    // button when it's clicked, so the arrow keys would scroll
                    // the page instead of changing colors. Focus it ourselves.
                    // preventScroll stops this from fighting the scroll to
                    // the preview in choose().
                    onClick={(event) => event.currentTarget.focus({ preventScroll: true })}
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

      {/* The enlarged countertop. A modal <dialog> keeps keyboard focus
          inside it, closes on Escape, and returns focus to the picture that
          opened it. Clicking the dark backdrop (the dialog itself, outside
          its content) also closes it. */}
      {countertopView && (
        <dialog
          className="color-gallery__viewer"
          ref={viewerRef}
          aria-labelledby={`${id}-viewer-title`}
          onKeyDown={handleViewerKeyDown}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeViewer();
          }}
        >
          <div className="color-gallery__viewer-content">
            <div className="color-gallery__viewer-header">
              <h3 className="color-gallery__viewer-title" id={`${id}-viewer-title`}>
                {selected.name}
              </h3>
              <button
                className="color-gallery__viewer-close"
                type="button"
                onClick={closeViewer}
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            {/* Only opened from a countertop picture, so view is a room. */}
            {view !== "closeup" && (
              <div className="color-gallery__viewer-frame">
                <CountertopPreview color={selected} scene={countertopScenes[view]} />
              </div>
            )}

            <div className="color-gallery__stepper color-gallery__viewer-nav">
              <button className="color-gallery__step" type="button" onClick={() => step(-1)}>
                <span aria-hidden="true">&larr; </span>Previous
              </button>
              <span className="color-gallery__position" aria-live="polite">
                {selectedIndex + 1} of {colors.length}
              </span>
              <button className="color-gallery__step" type="button" onClick={() => step(1)}>
                Next<span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}

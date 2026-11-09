import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import "./TroubleshootingGuide.css";
import type { TroubleshootingImage, TroubleshootingIssue } from "../data/bathtubTroubleshooting";

interface TroubleshootingGuideProps {
  issues: TroubleshootingIssue[];
}

// One picture in the enlarged view, with the problem it belongs to.
interface Slide {
  problem: string;
  description: string;
  image: TroubleshootingImage;
}

// "Illustration: Crazing, in patches", or just "Crazing" for a photo with no label.
function captionFor(problem: string, image: TroubleshootingImage): string {
  const prefix = image.illustration ? "Illustration: " : "";
  const label = image.label ? `, ${image.label}` : "";
  return `${prefix}${problem}${label}`;
}

interface IssuePictureProps {
  problem: string;
  image: TroubleshootingImage;
  onEnlarge: () => void;
}

// A picture of a problem with its caption. Used in the side panel on wide
// screens and inside the open row on phones (CSS shows one or the other).
// The picture is a button that opens the enlarged view.
function IssuePicture({ problem, image, onEnlarge }: IssuePictureProps) {
  const caption = captionFor(problem, image);
  return (
    <figure className="troubleshooting__figure">
      <button
        className="troubleshooting__zoom"
        type="button"
        onClick={onEnlarge}
        aria-label={`Enlarge picture: ${caption}`}
      >
        <img
          className="troubleshooting__image"
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </button>
      <figcaption className="troubleshooting__caption">{caption}</figcaption>
    </figure>
  );
}

// Each problem is a <details> row: the browser handles opening, closing, and
// keyboard support (Enter or Space on the summary). Giving every row the same
// `name` makes them an exclusive group, so opening one closes the others.
export default function TroubleshootingGuide({ issues }: TroubleshootingGuideProps) {
  // The problem whose row is open, for the side panel. Null when all are closed.
  const [openProblem, setOpenProblem] = useState<string | null>(null);
  const openIssue = issues.find((issue) => issue.problem === openProblem);

  // Each row's <details>, by problem name, so the enlarged view can open rows.
  const rowRefs = useRef(new Map<string, HTMLDetailsElement>());
  const viewerRef = useRef<HTMLDialogElement>(null);

  // Every picture of every problem, in list order: what the enlarged view
  // steps through. A problem with two pictures gets two slides.
  const slides: Slide[] = issues.flatMap((issue) =>
    (issue.images ?? []).map((image) => ({
      problem: issue.problem,
      description: issue.description,
      image,
    })),
  );
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = slides[slideIndex];

  // Whether any picture is an illustration, for the "About these pictures" note.
  const hasIllustrations = slides.some((candidate) => candidate.image.illustration);

  // While the enlarged view is open, keep the matching row open too, so the
  // list and panel show what the visitor was last looking at.
  useEffect(() => {
    if (!slide || !viewerRef.current?.open) return;
    const row = rowRefs.current.get(slide.problem);
    if (row) row.open = true;
  }, [slide]);

  // Called whenever a row opens or closes.
  function handleToggle(problem: string, isOpen: boolean) {
    if (isOpen) {
      setOpenProblem(problem);
      return;
    }

    setOpenProblem((current) => {
      if (current === problem) {
        return null;
      }

      return current;
    });
  }

  // Opens the enlarged view on one picture of one problem.
  function openViewer(image: TroubleshootingImage) {
    const index = slides.findIndex((candidate) => candidate.image === image);
    setSlideIndex(Math.max(index, 0));
    viewerRef.current?.showModal();
  }

  function closeViewer() {
    viewerRef.current?.close();
  }

  // Moves the enlarged view to the next (1) or previous (-1) picture, wrapping
  // around. The updater form reads the latest index, so fast key presses each
  // count, even before the page has redrawn.
  function step(direction: 1 | -1) {
    if (slides.length === 0) return;
    setSlideIndex((current) => (current + direction + slides.length) % slides.length);
  }

  // Arrow keys in the enlarged view. Escape (close) and Tab (move between the
  // buttons) are handled by the browser, so this must leave them alone.
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
    <section className="troubleshooting" aria-labelledby="troubleshooting-title">
      <h2 className="troubleshooting__title" id="troubleshooting-title">
        Troubleshooting guide
      </h2>
      <p className="troubleshooting__intro">
        Common problems bathtub refinishers run into, their likely causes, and how to fix
        them. Select a problem to see the details.
      </p>

      {/* Draft copy: pending owner review. Shown only while the guide has
          illustrations, so it goes away if they're replaced with photos. */}
      {hasIllustrations && (
        <aside className="troubleshooting__notice" aria-labelledby="troubleshooting-notice-title">
          <h3 className="troubleshooting__notice-title" id="troubleshooting-notice-title">
            About these pictures
          </h3>
          <p>
            The pictures in this guide are computer-generated illustrations, made to show what
            each problem typically looks like. They are close, but not exact: on a real job, a
            problem can look different depending on the color of the coating, the surface,
            the lighting, and how far it has progressed.
          </p>
          <p>
            Not sure what you&apos;re seeing? <Link to="/contact">Contact us</Link> and
            we&apos;ll help you figure it out.
          </p>
        </aside>
      )}

      <div className="troubleshooting__layout">
        <ul className="troubleshooting__list">
          {issues.map((issue) => (
            <li key={issue.problem}>
              <details
                className="troubleshooting__item"
                name="troubleshooting"
                ref={(element) => {
                  if (element) rowRefs.current.set(issue.problem, element);
                }}
                onToggle={(event) => handleToggle(issue.problem, event.currentTarget.open)}
              >
                <summary className="troubleshooting__problem">{issue.problem}</summary>
                <div className="troubleshooting__body">
                  {/* Phones: the pictures sit inside the open row. */}
                  {issue.images && issue.images.length > 0 && (
                    <div className="troubleshooting__inline-picture">
                      {issue.images.map((image) => (
                        <IssuePicture
                          key={image.src}
                          problem={issue.problem}
                          image={image}
                          onEnlarge={() => openViewer(image)}
                        />
                      ))}
                    </div>
                  )}
                  <p className="troubleshooting__description">{issue.description}</p>
                  <ol className="troubleshooting__fixes">
                    {issue.fixes.map((fix) => (
                      <li className="troubleshooting__fix" key={fix.cause}>
                        <p><strong>Possible cause: </strong>{fix.cause}</p>
                        <p><strong>Recommended solution: </strong>{fix.solution}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </details>
            </li>
          ))}
        </ul>

        {/* Wide screens: the open row's pictures, one below the other. CSS
            shows either this panel or the copy inside the row, never both,
            so screen readers also meet each picture only once. */}
        <div className="troubleshooting__panel">
          {openIssue?.images && openIssue.images.length > 0 ? (
            openIssue.images.map((image) => (
              <IssuePicture
                key={image.src}
                problem={openIssue.problem}
                image={image}
                onEnlarge={() => openViewer(image)}
              />
            ))
          ) : (
            <p className="troubleshooting__panel-empty">
              {openIssue
                ? `Picture of ${openIssue.problem.toLowerCase()} coming soon.`
                : "Select a problem to see what it looks like."}
            </p>
          )}
        </div>
      </div>

      {/* The enlarged view. A modal <dialog> keeps keyboard focus inside it,
          closes on Escape, and returns focus to the picture that opened it.
          Clicking the dark backdrop (the dialog itself, outside its content)
          also closes it. Its size never changes between pictures, so the
          buttons stay in the same place. */}
      <dialog
        className="troubleshooting__viewer"
        ref={viewerRef}
        aria-labelledby="troubleshooting-viewer-title"
        onKeyDown={handleViewerKeyDown}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeViewer();
        }}
      >
        <div className="troubleshooting__viewer-content">
          <div className="troubleshooting__viewer-header">
            <h3 className="troubleshooting__viewer-title" id="troubleshooting-viewer-title">
              {slide?.problem ?? "Picture"}
            </h3>
            <button
              className="troubleshooting__viewer-close"
              type="button"
              onClick={closeViewer}
              aria-label="Close"
            >
              &times;
            </button>
          </div>

          {slide && (
            <figure className="troubleshooting__viewer-figure">
              {/* A fixed 3:2 frame; each picture is fitted inside it. */}
              <div className="troubleshooting__viewer-frame">
                <img
                  className="troubleshooting__viewer-image"
                  src={slide.image.src}
                  width={slide.image.width}
                  height={slide.image.height}
                  alt={slide.image.alt}
                />
              </div>
              <figcaption className="troubleshooting__caption troubleshooting__viewer-caption">
                {captionFor(slide.problem, slide.image)}. {slide.description}
              </figcaption>
            </figure>
          )}

          <div className="troubleshooting__viewer-nav">
            <button className="troubleshooting__viewer-step" type="button" onClick={() => step(-1)}>
              <span aria-hidden="true">&larr; </span>Previous
            </button>
            <span className="troubleshooting__viewer-count" aria-live="polite">
              {slideIndex + 1} of {slides.length}
            </span>
            <button className="troubleshooting__viewer-step" type="button" onClick={() => step(1)}>
              Next<span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}

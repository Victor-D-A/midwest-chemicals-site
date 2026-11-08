import { useState } from "react";
import "./TroubleshootingGuide.css";
import type { TroubleshootingImage, TroubleshootingIssue } from "../data/bathtubTroubleshooting";

interface TroubleshootingGuideProps {
  issues: TroubleshootingIssue[];
}

// A picture of a problem with its caption. Used in the side panel on wide
// screens and inside the open row on phones (CSS shows one or the other).
function IssuePicture({ problem, image }: { problem: string; image: TroubleshootingImage }) {
  return (
    <figure className="troubleshooting__figure">
      <img
        className="troubleshooting__image"
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
      />
      <figcaption className="troubleshooting__caption">
        {image.illustration ? `Illustration: ${problem}` : problem}
      </figcaption>
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

  return (
    <section className="troubleshooting" aria-labelledby="troubleshooting-title">
      <h2 className="troubleshooting__title" id="troubleshooting-title">
        Troubleshooting guide
      </h2>
      <p className="troubleshooting__intro">
        Common problems bathtub refinishers run into, their likely causes, and how to fix
        them. Select a problem to see the details.
      </p>

      <div className="troubleshooting__layout">
        <ul className="troubleshooting__list">
          {issues.map((issue) => (
            <li key={issue.problem}>
              <details
                className="troubleshooting__item"
                name="troubleshooting"
                onToggle={(event) => handleToggle(issue.problem, event.currentTarget.open)}
              >
                <summary className="troubleshooting__problem">{issue.problem}</summary>
                <div className="troubleshooting__body">
                  {/* Phones: the picture sits inside the open row. */}
                  {issue.image && (
                    <div className="troubleshooting__inline-picture">
                      <IssuePicture problem={issue.problem} image={issue.image} />
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

        {/* Wide screens: one picture at a time, for whichever row is open.
            CSS shows either this panel or the copy inside the row, never
            both, so screen readers also meet the picture only once. */}
        <div className="troubleshooting__panel">
          {openIssue?.image ? (
            <IssuePicture problem={openIssue.problem} image={openIssue.image} />
          ) : (
            <p className="troubleshooting__panel-empty">
              {openIssue
                ? `Picture of ${openIssue.problem.toLowerCase()} coming soon.`
                : "Select a problem to see what it looks like."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

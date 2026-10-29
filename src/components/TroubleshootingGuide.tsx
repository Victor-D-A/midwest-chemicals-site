import "./TroubleshootingGuide.css";
import type { TroubleshootingIssue } from "../data/bathtubTroubleshooting";

interface TroubleshootingGuideProps {
  issues: TroubleshootingIssue[];
}

// Each problem is a <details> row: the browser handles opening, closing, and
// keyboard support (Enter or Space on the summary), with no React state.
export default function TroubleshootingGuide({ issues }: TroubleshootingGuideProps) {
  return (
    <section className="troubleshooting" aria-labelledby="troubleshooting-title">
      <h2 className="troubleshooting__title" id="troubleshooting-title">
        Troubleshooting guide
      </h2>
      <p className="troubleshooting__intro">
        Common problems bathtub refinishers run into, their likely causes, and how to fix
        them. Select a problem to see the details.
      </p>

      <ul className="troubleshooting__list">
        {issues.map((issue) => (
          <li key={issue.problem}>
            <details className="troubleshooting__item">
              <summary className="troubleshooting__problem">{issue.problem}</summary>
              <div className="troubleshooting__body">
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
    </section>
  );
}

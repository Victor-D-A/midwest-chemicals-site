import { Link, useLocation } from "react-router-dom";
import "./Callouts.css";
import { calloutsFor } from "../data/callouts";

// Shows the callouts for whichever page it's placed on. Draws nothing when
// the page has none, so it's safe to drop into any page.
export default function Callouts() {
  const { pathname } = useLocation();
  const pageCallouts = calloutsFor(pathname);

  if (pageCallouts.length === 0) {
    return null;
  }

  return (
    <aside className="callouts" aria-label="You might also need">
      <ul className="callouts__list">
        {pageCallouts.map((callout) => (
          <li className="callout" key={callout.to}>
            <p className="callout__text">{callout.text}</p>
            <Link className="callout__link" to={callout.to}>
              {callout.linkLabel}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

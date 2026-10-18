import "./Logo.css";

// Temporary logo: the "MC" badge plus the company name.
// When the real logo arrives, replace what this component renders (and
// public/favicon.svg), and every place that shows the logo updates.
export default function Logo() {
  return (
    <span className="logo">
      <span className="logo__mark" aria-hidden="true">MC</span>
      <span className="logo__name">Midwest Chemicals</span>
    </span>
  );
}

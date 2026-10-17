import "./SkipLink.css";

interface SkipLinkProps {
  targetId: string;
}

// The first thing keyboard users reach on every page. It lets them jump past
// the header straight to the page content.
export default function SkipLink({ targetId }: SkipLinkProps) {
  return (
    <a className="skip-link" href={`#${targetId}`}>
      Skip to main content
    </a>
  );
}

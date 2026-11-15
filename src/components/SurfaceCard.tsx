import { Link } from "react-router-dom";
// Shares the category card's look, so every card on the site matches.
import "./CategoryCard.css";
import { audienceLabels, type RefinishingSurface } from "../data/refinishing";

interface SurfaceCardProps {
  surface: RefinishingSurface;
  // The card's heading level: 2 on the Refinishing page, where each card is
  // a main item; 3 on the home page, where cards sit under a section's h2.
  // Screen reader users jump between headings, so levels must nest.
  headingLevel?: 2 | 3;
}

export default function SurfaceCard({ surface, headingLevel = 2 }: SurfaceCardProps) {
  // Capitalized, so JSX treats it as the tag to render.
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="category-card">
      <Heading className="category-card__name">
        <Link className="category-card__link" to={`/refinishing/${surface.slug}`}>
          {surface.name}
        </Link>
      </Heading>
      <p className="category-card__summary">{surface.summary}</p>
      {surface.audience && (
        <p className="category-card__external">{audienceLabels[surface.audience]}</p>
      )}
    </article>
  );
}

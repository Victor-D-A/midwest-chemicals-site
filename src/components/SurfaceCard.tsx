import { Link } from "react-router-dom";
// Shares the category card's look, so every card on the site matches.
import "./CategoryCard.css";
import { audienceLabels, type RefinishingSurface } from "../data/refinishing";

interface SurfaceCardProps {
  surface: RefinishingSurface;
}

export default function SurfaceCard({ surface }: SurfaceCardProps) {
  return (
    <article className="category-card">
      <h2 className="category-card__name">
        <Link className="category-card__link" to={`/refinishing/${surface.slug}`}>
          {surface.name}
        </Link>
      </h2>
      <p className="category-card__summary">{surface.summary}</p>
      {surface.audience && (
        <p className="category-card__external">{audienceLabels[surface.audience]}</p>
      )}
    </article>
  );
}

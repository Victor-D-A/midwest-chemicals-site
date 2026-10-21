import { Link } from "react-router-dom";
import "./CategoryCard.css";
import type { Category } from "../data/catalog";
import { siteName } from "../utils/url";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="category-card">
      {/* h3: the Products page uses h2 for its section headings. */}
      <h3 className="category-card__name">
        {category.externalUrl ? (
          <a className="category-card__link" href={category.externalUrl}>
            {category.name}
          </a>
        ) : (
          <Link className="category-card__link" to=
            {`/products/${category.slug}`}>
            {category.name}</Link>
        )}
      </h3>
      <p className="category-card__summary">{category.summary}</p>
      {category.externalUrl && (
        <p className="category-card__external">
          Opens {siteName(category.externalUrl)}
        </p>
      )}
    </article>
  );
}

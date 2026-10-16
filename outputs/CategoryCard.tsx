import { Link } from "react-router-dom";
import "./CategoryCard.css";
import type { Category } from "./catalog";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="category-card">
      <h2 className="category-card__name">
        <Link className="category-card__link" to=
          {`/products/${category.slug}`}>
          {category.name}</Link>
      </h2>
      <p className="category-card__summary">{category.summary}</p>
    </article>
  );
}

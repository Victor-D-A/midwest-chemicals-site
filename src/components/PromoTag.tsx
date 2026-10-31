import "./PromoTag.css";
import { isPromoted, type Category } from "../data/catalog";

interface PromoTagProps {
  category: Category;
}

// The category's badge ("New", "Latest", …) while it's being promoted.
// Draws nothing otherwise, so it's safe to put after any category name.
// The leading space keeps the words apart, so screen readers hear
// "Low VOC Coating System New", not "SystemNew".
export default function PromoTag({ category }: PromoTagProps) {
  if (!category.badge || !isPromoted(category)) {
    return null;
  }

  return (
    <>
      {" "}
      <span className="promo-tag">{category.badge}</span>
    </>
  );
}

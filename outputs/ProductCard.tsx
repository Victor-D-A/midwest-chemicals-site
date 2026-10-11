import "./ProductCard.css";
import type { Product } from "./products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <p className="product-card__category">
        {product.category}
      </p>
      <h2 className="product-card__name">
        {product.name}
      </h2>
      <p className="product-card__description">
        {product.description}
      </p>
    </article>
  );
}

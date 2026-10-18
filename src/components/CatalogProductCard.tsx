import "./CatalogProductCard.css";
import type { CatalogProduct } from "../data/catalog";

interface CatalogProductCardProps {
  product: CatalogProduct;
}

export default function CatalogProductCard({ product }: CatalogProductCardProps) {
  return (
    <article className="product-card">
      <h2 className="product-card__name">{product.name}</h2>
      {product.sizes && <p className="product-card__sizes">{product.sizes}</p>}
      {product.description && (
        <p className="product-card__description">{product.description}</p>
      )}
    </article>
  );
}

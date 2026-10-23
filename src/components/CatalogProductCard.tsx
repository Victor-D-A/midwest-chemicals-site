import "./CatalogProductCard.css";
import type { CatalogProduct } from "../data/catalog";

interface CatalogProductCardProps {
  product: CatalogProduct;
}

export default function CatalogProductCard({ product }: CatalogProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        {product.image ? (
          <img
            className="product-card__image"
            src={product.image}
            // Empty on purpose: the product name is the heading right below, so screen readers would otherwise hear it twice.
            alt=""
            loading="lazy"
            decoding="async"
          />
        ) : (
          // Decorative placeholder; screen readers skip it.
          <span className="product-card__placeholder" aria-hidden="true">
            Photo coming soon
          </span>
        )}
      </div>
      <h2 className="product-card__name">{product.name}</h2>
      {product.sizes && <p className="product-card__sizes">{product.sizes}</p>}
      {product.description && (
        <p className="product-card__description">{product.description}</p>
      )}
    </article>
  );
}

import "./CatalogProductCard.css";
import type { CatalogProduct } from "../data/catalog";

interface CatalogProductCardProps {
  product: CatalogProduct;
}

export default function CatalogProductCard({ product }: CatalogProductCardProps) {
  // Each spec row the product has, in a fixed order. Rows without a value
  // are dropped, so a product with no specs shows no list at all.
  const specs = [
    { label: "Resin to catalyst", value: product.mixRatio },
    { label: "Cure times", value: product.cureTimes },
    { label: "Top coat after", value: product.topCoatAfter },
    { label: "Colors", value: product.colors },
  ].filter((spec) => spec.value);

  return (
    <article className="product-card">
      <div className="product-card__media">
        {product.image ? (
          <img
            className="product-card__image"
            src={product.image}
            // Read the photo's own description when it has one. Otherwise stay
            // empty on purpose: the product name is the heading right below,
            // so screen readers would otherwise hear it twice.
            alt={product.imageAlt ?? ""}
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

      {/* A description list: each label (dt) paired with its value (dd), so
          screen readers read them as pairs. */}
      {specs.length > 0 && (
        <dl className="product-card__specs">
          {specs.map((spec) => (
            <div className="product-card__spec" key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {product.uses && product.uses.length > 0 && (
        <>
          <p className="product-card__uses-title">Used for</p>
          <ul className="product-card__uses">
            {product.uses.map((use) => (
              <li key={use}>{use}</li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}

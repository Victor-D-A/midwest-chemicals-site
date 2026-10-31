import { Link } from "react-router-dom";
import "./Spotlight.css";
import PromoTag from "./PromoTag";
import { promotedCategories } from "../data/catalog";

// The home page's spotlight band. Shows every category still being promoted
// (see promoteUntil in catalog.json), and disappears when none are.
export default function Spotlight() {
  const promoted = promotedCategories();

  if (promoted.length === 0) {
    return null;
  }

  return (
    <section className="spotlight" aria-labelledby="spotlight-title">
      <div className="spotlight__inner">
        <h2 className="spotlight__title" id="spotlight-title">
          In the spotlight
        </h2>
        <ul className="spotlight__list">
          {promoted.map((category) => {
            // The first product photo in the category, if any.
            const image = category.products.find((product) => product.image)?.image;
            return (
              <li className="spotlight__item" key={category.slug}>
                {image && (
                  // Decorative: the product name is right beside it. Photos vary
                  // in size, so CSS gives each the same square frame.
                  <img className="spotlight__image" src={image} alt="" />
                )}
                <div>
                  <h3 className="spotlight__name">
                    {category.name}
                    <PromoTag category={category} />
                  </h3>
                  <p className="spotlight__pitch">{category.pitch ?? category.summary}</p>
                  <Link className="spotlight__link" to={`/products/${category.slug}`}>
                    See the {category.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

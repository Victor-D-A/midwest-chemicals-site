import "./Page.css";
import "./ProductsPage.css";
import { categoriesInGroup, categoryGroups } from "../data/catalog";
import CategoryCard from "../components/CategoryCard";
import { PRODUCTS_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";

export default function ProductsPage() {
  return (
    <section className="page" aria-labelledby="products-title">
      <title>{formatPageTitle("Products")}</title>
      <meta name="description" content={PRODUCTS_DESCRIPTION} />
      <div className="page__inner">
        <h1 className="page__title" id="products-title">
          Products
        </h1>
        {/* Draft copy: pending owner review. */}
        <p className="page__intro">
          Products for licensed refinishing professionals, grouped by what they do.
          Choose a category to see sizes and details.
        </p>

        {categoryGroups.map((group) => (
          <section
            key={group.id}
            className="catalog-group"
            aria-labelledby={`group-${group.id}`}
          >
            <h2 className="catalog-group__title" id={`group-${group.id}`}>
              {group.name}
            </h2>
            <ul className="card-grid">
              {categoriesInGroup(group.id).map((category) => (
                <li key={category.slug}>
                  <CategoryCard category={category} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import "./Page.css";
import "./WarrantyPage.css";
import { contact } from "../data/contact";
import { WARRANTY_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";
import { callHref } from "../utils/phone";

// Legal wording copied from the current site with spelling fixes only.
// Pending owner review: do not rephrase without the owner's approval.
export default function WarrantyPage() {
  return (
    <section className="page" aria-labelledby="warranty-title">
      <title>{formatPageTitle("Warranty")}</title>
      <meta name="description" content={WARRANTY_DESCRIPTION} />
      <div className="page__inner">
        <p className="page__back">
          <Link to="/about">&larr; About</Link>
        </p>
        <h1 className="page__title" id="warranty-title">
          Warranty
        </h1>

        <p className="page__text">
          Midwest Chemicals products are believed to be free of defects; however, Midwest
          Chemicals does not know how this product will be used. Therefore, Midwest Chemicals
          does not warranty the products, and the BUYER assumes all risks for the use of the
          materials.
        </p>
        <p className="page__text">
          Midwest Chemicals is not liable for any failures once product is used in the field.
          Midwest Chemicals products is at the discretion of the buyer without liability or
          obligation whatsoever of Midwest Chemicals.
        </p>

        <section className="warranty__section" aria-labelledby="warranty-receiving">
          <h2 className="warranty__heading" id="warranty-receiving">
            Receiving your order
          </h2>
          <p className="page__text">
            All items <strong>must</strong> be checked within 24 hours of receiving them to
            make sure everything was intact and enclosed. After 24 hours of receiving
            merchandise, any items missing are considered lost by the party who received the
            merchandise.
          </p>
        </section>

        <section className="warranty__section" aria-labelledby="warranty-returns">
          <h2 className="warranty__heading" id="warranty-returns">
            Returns
          </h2>
          <ul className="warranty__list">
            <li>
              All returns will be honored by a credit or replacement of product within the
              first 30 days.
            </li>
            <li>
              All returns <strong>must be in the same boxes received in</strong> and will also
              be inspected for damages and scratches.
            </li>
            <li>
              If products are damaged, there will be <strong>no refund</strong> and the money
              back guarantee is void.
            </li>
            <li>After 30 days, there will be a 20% restocking fee.</li>
          </ul>
        </section>

        <section className="warranty__section" aria-labelledby="warranty-weather">
          <h2 className="warranty__heading" id="warranty-weather">
            Extreme weather conditions
          </h2>
          <p className="page__text">
            Water-based paints and coatings may be damaged by extreme weather conditions. This
            can create problems when shipping to colder climates in the winter. Multi-Spec and
            some of the other products we sell are water-based and eco-friendly, so they are
            more susceptible to freezing than other paints. We do our best to ensure your order
            arrives unfrozen by insulating our packages, but freezing temperatures will cause
            the product to freeze, so there is no guarantee.
          </p>
          <p className="page__text">
            Although we cannot accept returns on products that are damaged due to freezing,
            there are methods we recommend to minimize the risk. If you expect freezing
            temperatures while your order is in transit, follow these steps to help reduce the
            possibility of damage:
          </p>
          <ul className="warranty__list">
            <li>
              When placing your order, ask us to ship it early in the week. This decreases the
              risk that your order will sit in a truck over the weekend.
            </li>
            <li>
              Make sure your order is delivered to a location where someone will be able to
              accept the package and move it inside immediately. (Packages delivered and left
              outside are the most common reason products freeze.)
            </li>
          </ul>
        </section>

        <p className="page__text warranty__contact">
          Any questions can be answered by calling{" "}
          <a href={callHref(contact.orderPhone)}>{contact.orderPhone}</a>, or{" "}
          <Link to="/contact">contact us</Link>.
        </p>

        {/* The owner's signature, as on the current site. Decorative: the
            printed name below says who signed, so alt is empty. */}
        <img
          className="warranty__signature-image"
          src="/images/about/owner-signature.gif"
          width={257}
          height={80}
          loading="lazy"
          alt=""
        />
        <p className="warranty__signature">
          Edward Levens
          <br />
          Owner
        </p>
      </div>
    </section>
  );
}

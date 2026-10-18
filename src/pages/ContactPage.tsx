import "./Page.css";
import "./ContactPage.css";
import { contact } from "../data/contact";
import { CONTACT_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";
import { callHref, textHref } from "../utils/phone";

export default function ContactPage() {
  const { address } = contact;

  return (
    <section className="page" aria-labelledby="contact-title">
      <title>{formatPageTitle("Contact")}</title>
      <meta name="description" content={CONTACT_DESCRIPTION} />
      <div className="page__inner">
        <h1 className="page__title" id="contact-title">
          Contact us
        </h1>
        {/* Draft copy based on the current site: pending owner review. */}
        <p className="page__intro">
          Call, text, or email us during business hours.{" "}
          <span lang="es">Se habla español.</span>
        </p>

        <p className="contact-notice">
          We sell to licensed refinishers only, not to the general public. To set up an
          account, call <a href={callHref(contact.accountPhone)}>{contact.accountPhone}</a>.
        </p>

        <ul className="card-grid">
          <li>
            <article className="contact-card">
              <h2 className="contact-card__title">Call us</h2>
              <ul className="contact-card__list">
                {contact.phones.map((phone) => (
                  <li key={phone.number}>
                    {phone.label}: <a href={callHref(phone.number)}>{phone.number}</a>
                  </li>
                ))}
              </ul>
              <p className="contact-card__note">
                Other lines:{" "}
                {contact.otherPhones.map((number, index) => (
                  <span key={number}>
                    {index > 0 && ", "}
                    <a href={callHref(number)}>{number}</a>
                  </span>
                ))}
              </p>
            </article>
          </li>

          <li>
            <article className="contact-card">
              <h2 className="contact-card__title">Text us</h2>
              <p>
                <a href={textHref(contact.textNumber)}>{contact.textNumber}</a>
              </p>
              <p className="contact-card__note">Send your questions by text.</p>
            </article>
          </li>

          <li>
            <article className="contact-card">
              <h2 className="contact-card__title">Email us</h2>
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p className="contact-card__note">
                Include your contact details and the items you would like to order.
              </p>
            </article>
          </li>

          <li>
            <article className="contact-card">
              <h2 className="contact-card__title">Hours</h2>
              <p>{contact.hours}</p>
              <p className="contact-card__note">
                Orders emailed over the weekend ship Monday morning.
              </p>
            </article>
          </li>

          <li>
            <article className="contact-card">
              <h2 className="contact-card__title">Address</h2>
              <address className="contact-card__address">
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </address>
            </article>
          </li>
        </ul>

        <section className="contact-order" id="order" aria-labelledby="order-title">
          <h2 className="contact-order__title" id="order-title">
            How to order
          </h2>
          <ol className="contact-order__list">
            <li>
              <strong>By email:</strong> send your contact details and the items you need
              to <a href={`mailto:${contact.email}`}>{contact.email}</a>. We will reply with
              a total and payment options.
            </li>
            <li>
              <strong>By phone:</strong> call{" "}
              <a href={callHref(contact.orderPhone)}>{contact.orderPhone}</a> and our
              customer service staff will take your order.
            </li>
            <li>
              <strong>By text:</strong> text{" "}
              <a href={textHref(contact.textNumber)}>{contact.textNumber}</a>.
            </li>
          </ol>
          <p className="contact-order__fine-print">
            Prices and availability are subject to change. Florida residents pay state
            and county sales tax on orders.
          </p>
        </section>
      </div>
    </section>
  );
}

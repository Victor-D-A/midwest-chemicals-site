import { Link } from "react-router-dom";
import "./Footer.css";
import { findCategory } from "../data/catalog";
import { contact } from "../data/contact";
import {
  footerCompanyLinks,
  footerProductSlugs,
  footerTagline,
  siteCredit,
} from "../data/footer";
import { refinishingSurfaces } from "../data/refinishing";
import { callHref, textHref } from "../utils/phone";

// Turn the footer's product slugs into { label, href } links.
function footerProductLinks(): { label: string; href: string }[] {
  const categories = footerProductSlugs.map((slug) => {
    return findCategory(slug);
  });

  const validCategories = categories.filter((category) => {
    return category !== undefined;
  });

  return validCategories.map((category) => {
    return {
      label: category.name,
      href: `/products/${category.slug}`,
    };
  });
}

const productLinks = footerProductLinks();

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { address } = contact;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__columns">
          <section className="site-footer__column site-footer__column--brand">
            <p className="site-footer__brand">Midwest Chemicals</p>
            <p className="site-footer__tagline">{footerTagline}</p>
            <h2 className="site-footer__heading">Company</h2>
            <ul className="site-footer__list">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link className="site-footer__link" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <nav className="site-footer__column" aria-labelledby="footer-products">
            <h2 className="site-footer__heading" id="footer-products">
              Products
            </h2>
            <ul className="site-footer__list">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link className="site-footer__link" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="site-footer__link site-footer__link--all" to="/products">
                  All products
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="site-footer__column" aria-labelledby="footer-refinishing">
            <h2 className="site-footer__heading" id="footer-refinishing">
              Refinishing
            </h2>
            <ul className="site-footer__list">
              {refinishingSurfaces.map((surface) => (
                <li key={surface.slug}>
                  <Link className="site-footer__link" to={`/refinishing/${surface.slug}`}>
                    {surface.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="site-footer__column" aria-labelledby="footer-contact">
            <h2 className="site-footer__heading" id="footer-contact">
              Contact
            </h2>
            <address className="site-footer__contact">
              <p>
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </p>
              <p>
                Call{" "}
                <a className="site-footer__contact-link" href={callHref(contact.orderPhone)}>
                  {contact.orderPhone}
                </a>
                <br />
                Text{" "}
                <a className="site-footer__contact-link" href={textHref(contact.textNumber)}>
                  {contact.textNumber}
                </a>
                <br />
                <a className="site-footer__contact-link" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
              <p className="site-footer__muted">
                {contact.hours}
                <br />
                Se habla español.
              </p>
            </address>
          </section>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__legal">&copy; {currentYear} Midwest Chemicals</p>
          {siteCredit && <p className="site-footer__legal">{siteCredit}</p>}
        </div>
      </div>
    </footer>
  );
}

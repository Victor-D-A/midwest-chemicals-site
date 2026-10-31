import { Link } from "react-router-dom";
import "./Page.css";
import "./AboutPage.css";
import { aboutPhotos, industries, ownerLetter, quickLinks, strengths } from "../data/about";
import { ABOUT_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";

export default function AboutPage() {
  return (
    <section className="page" aria-labelledby="about-title">
      <title>{formatPageTitle("About")}</title>
      <meta name="description" content={ABOUT_DESCRIPTION} />
      <div className="page__inner">
        <h1 className="page__title" id="about-title">
          About Midwest Chemicals
        </h1>
        <p className="page__intro">
          A coatings manufacturer serving the refinishing industry since 1991, from Orlando,
          Florida.
        </p>

        {/* Quick links to the About subpages. Styled as clickable cards so they
            stand apart from the "What sets us apart" boxes, which don't link. */}
        <nav className="about__quick-links" aria-label="More about us">
          <ul className="about__quick-list">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link className="about__quick-card" to={link.to}>
                  <span className="about__quick-title">{link.title}</span>
                  <span className="about__quick-text">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Who we are: text and industries on the left, photos on the right. */}
        <section className="about__who" aria-labelledby="about-who">
          <div>
            <h2 className="about__heading" id="about-who">
              Who we are
            </h2>
            <p className="page__text">
              Our team at Midwest Chemicals is committed to bringing you the finest quality
              coatings. Our line of solvent- and water-based products serves all types of
              refinishing industries, including:
            </p>
            <ul className="about__industries">
              {industries.map((industry) => (
                <li key={industry.name}>
                  {industry.to ? (
                    <Link className="about__industry-link" to={industry.to}>
                      {industry.name}
                    </Link>
                  ) : (
                    industry.name
                  )}
                </li>
              ))}
            </ul>
            <p className="page__text">
              Midwest Chemicals prides itself on becoming a leading supplier to thousands of
              refinishing businesses around the world.
            </p>
          </div>

          <ul className="about__photos">
            {aboutPhotos.map((photo) => (
              <li key={photo.src}>
                <img
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  alt={photo.alt}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="about__section" aria-labelledby="about-strengths">
          <h2 className="about__heading" id="about-strengths">
            What sets us apart
          </h2>
          <ul className="about__strengths">
            {strengths.map((strength) => (
              <li className="about__strength" key={strength.title}>
                <h3 className="about__strength-title">{strength.title}</h3>
                <p className="about__strength-text">{strength.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* The owner's letter, set apart like a printed letter. */}
        <section className="about__letter" aria-labelledby="about-letter">
          <h2 className="about__heading" id="about-letter">
            A letter from the owner
          </h2>
          <p className="about__letter-greeting">Thanks for visiting our website!</p>
          {ownerLetter.map((paragraph) => (
            <p className="page__text" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <p className="page__text">Thank you,</p>
          {/* Decorative: the printed name below says who signed, so alt is empty. */}
          <img
            className="about__signature-image"
            src="/images/about/owner-signature.gif"
            width={257}
            height={80}
            loading="lazy"
            alt=""
          />
          <p className="about__signature">
            Edward Levens
            <br />
            Owner
          </p>
        </section>

        <p className="page__text about__more">
          Questions? <Link to="/contact">Contact us</Link>.
        </p>
      </div>
    </section>
  );
}

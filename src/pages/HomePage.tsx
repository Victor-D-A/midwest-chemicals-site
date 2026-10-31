import { Link } from "react-router-dom";
import "./Page.css";
import "./HomePage.css";
import CategoryCard from "../components/CategoryCard";
import Hero from "../components/Hero";
import Spotlight from "../components/Spotlight";
import { findCategory } from "../data/catalog";
import { contact } from "../data/contact";
import { featuredCategorySlugs, whyPoints } from "../data/home";
import { HOME_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";
import { callHref, textHref } from "../utils/phone";

// Look up the featured categories once; skip any slug that no longer exists.
const featuredCategories = featuredCategorySlugs
  .map((slug) => findCategory(slug))
  .filter((category) => category !== undefined);

export default function HomePage() {
  return (
    <>
      <title>{formatPageTitle()}</title>
      <meta name="description" content={HOME_DESCRIPTION} />
      {/* Draft Copy: Pending Owner Review. Hero photo is an AI-generated placeholder. */}
      <Hero
        title="The Products Behind Every Great Transformation."
        subtitle="Professional coatings and refinishing supplies for bathtubs, countertops, tile, cabinets, and more. Supplying refinishing professionals since 1991."
        ctaLabel="Explore Our Products"
        ctaHref="/products"
        backgroundImage="/images/home/hero-placeholder.jpg"
      />

      <Spotlight />

      <section className="home-section" aria-labelledby="home-why">
        <div className="home-section__inner">
          <h2 className="home-section__title" id="home-why">
            Why Midwest Chemicals
          </h2>
          <ul className="home-why">
            {whyPoints.map((point) => (
              <li className="home-why__item" key={point.title}>
                <h3 className="home-why__title">{point.title}</h3>
                <p className="home-why__text">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section home-section--tinted" aria-labelledby="home-featured">
        <div className="home-section__inner">
          <h2 className="home-section__title" id="home-featured">
            Featured
          </h2>
          <ul className="card-grid">
            {featuredCategories.map((category) => (
              <li key={category.slug}>
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
          <p className="home-section__more">
            <Link to="/products">See all products</Link>
          </p>
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-work">
        <div className="home-section__inner home-work">
          <figure className="home-work__figure">
            <img
              className="home-work__image"
              src="/images/home/finished-countertop.jpg"
              width={300}
              height={225}
              loading="lazy"
              // The caption describes the photo, so alt stays empty to avoid repeating it.
              alt=""
            />
            <figcaption className="home-work__caption">
              A light gray countertop and matching desk front finished with a fine, speckled stone-look coating.
            </figcaption>
          </figure>
          <div>
            <h2 className="home-section__title" id="home-work">
              Finished work
            </h2>
            <p className="home-work__text">
              Refinishers use our coatings to give tired surfaces a durable new finish
              instead of replacing them.
            </p>
            <p className="home-section__more">
              <Link to="/refinishing">See what you can refinish</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="home-contact" aria-labelledby="home-contact">
        <div className="home-section__inner">
          <h2 className="home-contact__title" id="home-contact">
            Ready to order?
          </h2>
          <p className="home-contact__text">
            Call <a href={callHref(contact.orderPhone)}>{contact.orderPhone}</a>, text{" "}
            <a href={textHref(contact.textNumber)}>{contact.textNumber}</a>, or email{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.{" "}
            <span lang="es">Se habla español.</span>
          </p>
          <p className="home-contact__text">
            <Link to="/contact">Hours, address, and how to order</Link>
          </p>
        </div>
      </section>
    </>
  );
}

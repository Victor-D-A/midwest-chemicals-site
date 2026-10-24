import { Link } from "react-router-dom";
import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  // Optional photo behind the text. A dark overlay keeps the text readable.
  backgroundImage?: string;
}

export default function Hero({ title, subtitle, ctaLabel, ctaHref, backgroundImage }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {backgroundImage && (
        // Decorative: the headline carries the meaning, so alt is empty.
        // fetchPriority tells the browser this is the most important image.
        <img className="hero__image" src={backgroundImage} alt="" fetchPriority="high" />
      )}
      <div className="hero__inner">
        <h1 className="hero__title" id="hero-title">
          {title}
        </h1>
        <p className="hero__subtitle">{subtitle}</p>

        <Link className="hero__cta" to={ctaHref}>{ctaLabel}</Link>
      </div>
    </section>
  );
}

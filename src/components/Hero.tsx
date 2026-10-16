import { Link } from "react-router-dom";
import "./Hero.css";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function Hero({ title, subtitle, ctaLabel, ctaHref }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
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

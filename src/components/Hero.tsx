import { useState } from "react";
import { Link } from "react-router-dom";
import Galaxy from "./Galaxy";
import "./Hero.css";

interface HeroLink {
  label: string;
  href: string;
}

interface HeroProps {
  eyebrow: string;
  title: string;
  // The last words of the headline, shown in the violet-to-pink gradient.
  titleHighlight: string;
  subtitle: string;
  primaryCta: HeroLink;
  secondaryCta: HeroLink;
  stats: { value: string; label: string }[];
  galleryImages: string[];
}

// Visitors who turned on Reduce Motion in their settings start paused.
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Hero({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  primaryCta,
  secondaryCta,
  stats,
  galleryImages,
}: HeroProps) {
  const [paused, setPaused] = useState(prefersReducedMotion);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <Galaxy images={galleryImages} paused={paused} />

      <div className="hero__inner">
        <p className="hero__eyebrow">{eyebrow}</p>
        <h1 className="hero__title" id="hero-title">
          {title} <span className="hero__highlight">{titleHighlight}</span>
        </h1>
        <p className="hero__subtitle">{subtitle}</p>

        <div className="hero__ctas">
          <Link className="hero__cta hero__cta--primary" to={primaryCta.href}>
            {primaryCta.label}
          </Link>
          <Link className="hero__cta hero__cta--ghost" to={secondaryCta.href}>
            {secondaryCta.label}
          </Link>
        </div>

        <ul className="hero__stats">
          {stats.map((stat) => (
            <li className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="hero__pause"
        type="button"
        onClick={() => setPaused((current) => !current)}
      >
        {paused ? "Play motion" : "Pause motion"}
      </button>
    </section>
  );
}

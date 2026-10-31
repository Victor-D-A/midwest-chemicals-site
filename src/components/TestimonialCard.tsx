import "./TestimonialCard.css";
import type { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const headingId = `story-${testimonial.id}`;
  // "Scott Getty, Owner · Bend, OR", skipping whichever part is missing.
  const byline = [testimonial.person, testimonial.location].filter(Boolean).join(" · ");

  return (
    <article
      className={testimonial.featured ? "story story--featured" : "story"}
      aria-labelledby={headingId}
    >
      <h2 className="story__business" id={headingId}>
        {testimonial.business}
      </h2>

      {testimonial.quote && (
        <blockquote className="story__quote">
          <p>{testimonial.quote}</p>
        </blockquote>
      )}

      {byline && <p className="story__byline">{byline}</p>}

      {testimonial.story.map((paragraph) => (
        <p className="story__text" key={paragraph}>
          {paragraph}
        </p>
      ))}

      {(testimonial.address || testimonial.email) && (
        <p className="story__contact">
          {testimonial.address}
          {testimonial.address && testimonial.email && <br />}
          {testimonial.email && (
            <a href={`mailto:${testimonial.email}`}>{testimonial.email}</a>
          )}
        </p>
      )}

      {testimonial.photos.length > 0 && (
        <ul className="story__photos">
          {testimonial.photos.map((photo) => (
            <li key={photo.src}>
              <figure className="story__photo">
                <img
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  alt={photo.alt}
                />
                {(photo.label || photo.caption) && (
                  <figcaption className="story__caption">
                    {photo.label && <span className="story__label">{photo.label}</span>}
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

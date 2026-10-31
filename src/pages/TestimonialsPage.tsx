import { useState } from "react";
import { Link } from "react-router-dom";
import "./Page.css";
import "./TestimonialsPage.css";
import TestimonialCard from "../components/TestimonialCard";
import { TESTIMONIALS_DESCRIPTION } from "../data/pageDescriptions";
import { testimonialTags, testimonials, type TestimonialTag } from "../data/testimonials";
import { formatPageTitle } from "../utils/pageTitle";

export default function TestimonialsPage() {
  // Which chip is selected: "all", or one of the surface tags.
  const [filter, setFilter] = useState<TestimonialTag | "all">("all");

  const visibleStories =
    filter === "all"
      ? testimonials
      : testimonials.filter((story) => story.tags.includes(filter));

  return (
    <section className="page" aria-labelledby="testimonials-title">
      <title>{formatPageTitle("Testimonials")}</title>
      <meta name="description" content={TESTIMONIALS_DESCRIPTION} />
      <div className="page__inner">
        <p className="page__back">
          <Link to="/about">&larr; About</Link>
        </p>
        <h1 className="page__title" id="testimonials-title">
          Trusted by refinishing professionals
        </h1>
        {/* Draft copy: pending owner review. */}
        <p className="page__intro">
          Refinishers across the country share their work and what they think of our products,
          in their own words.
        </p>

        {/* Radio buttons, like the color gallery: one Tab stop, arrow keys
            move between choices, and the browser allows only one. */}
        <fieldset className="story-filter">
          <legend className="story-filter__legend">Show stories about</legend>
          <div className="story-filter__chips">
            {[{ id: "all" as const, label: "All" }, ...testimonialTags].map((tag) => (
              <label className="story-filter__chip" key={tag.id}>
                <input
                  className="story-filter__radio"
                  type="radio"
                  name="testimonial-filter"
                  value={tag.id}
                  checked={filter === tag.id}
                  onChange={() => setFilter(tag.id)}
                />
                {tag.label}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Announces the new count to screen readers when the filter changes. */}
        <p className="story-filter__count" aria-live="polite">
          Showing {visibleStories.length} of {testimonials.length} stories
        </p>

        <ul className="story-list">
          {visibleStories.map((testimonial) => (
            <li key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>

        <p className="page__text story-list__contact">
          Want to share your work? <Link to="/contact">Contact us</Link>.
        </p>
      </div>
    </section>
  );
}

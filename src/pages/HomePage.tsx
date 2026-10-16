import Hero from "../components/Hero";
import { formatPageTitle } from "../utils/pageTitle";

export default function HomePage() {
  return (
    <>
      <title>{formatPageTitle()}</title>
      {/* Placeholder copy: replace with the real wording before launch. */}
      <Hero
        title="Placeholder headline goes here"
        subtitle="A short placeholder sentence describing what the company does and who it serves."
        ctaLabel="Placeholder button"
        ctaHref="/products"
      />
    </>
  );
}

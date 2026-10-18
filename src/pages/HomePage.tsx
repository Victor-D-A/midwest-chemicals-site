import Hero from "../components/Hero";
import { HOME_DESCRIPTION } from "../data/pageDescriptions";
import { formatPageTitle } from "../utils/pageTitle";

export default function HomePage() {
  return (
    <>
      <title>{formatPageTitle()}</title>
      <meta name="description" content={HOME_DESCRIPTION} />
      {/* Draft Copy: Pending Owner Review. */}
      <Hero
        title="The Products Behind Every Great Transformation."
        subtitle="Professional coatings and refinishing supplies for bathtubs, countertops, tile, cabinets, and more. Supplying refinishing professionals since 1991."
        ctaLabel="Explore Our Products"
        ctaHref="/products"
      />
    </>
  );
}

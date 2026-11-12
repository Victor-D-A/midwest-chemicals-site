// What the site footer shows. Names and links come from the catalog and
// refinishing data, so they stay in sync with the rest of the site.

// Best sellers, plus Low VOC because it's being promoted. Order is the order
// shown. Slugs must match catalog.json; any that don't are skipped.
export const footerProductSlugs = [
  "top-coats",
  "metal-flake-primer-colors",
  "low-voc-coating-system",
  "reducers",
  "primers",
  "multi-spec",
];

export const footerCompanyLinks = [
  { label: "About us", href: "/about" },
  { label: "Warranty", href: "/about/warranty" },
  { label: "Testimonials", href: "/about/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const footerTagline =
  "Professional refinishing coatings and supplies, from Orlando, Florida, since 1991.";

// Pending owner approval. Set to null to remove the credit line.
export const siteCredit: string | null = "Website by Victor Aguilar";

// StoneLuxe500 content for the Floor Coatings page, summarized from the
// StoneLuxe500 online store. The store stays the source of truth for
// colors, prices, and ordering; this page links to it.
const STORE_URL = "https://stoneluxe500floorcoating.com";

export const stoneluxe = {
  storeUrl: STORE_URL,
  sellingPoints: [
    {
      title: "UV-stable performance",
      text: "Unlike epoxies that can yellow, chip, and fade, the moisture-cure system is built to stand up to outdoor conditions.",
    },
    {
      title: "Pre-tinted base coatings",
      text: "Installation is faster and easier, without the color grinding many epoxy systems need.",
    },
    {
      title: "Nationwide shipping",
      text: "Orders ship across the U.S. within 1 to 2 business days. International shipping is available on request.",
    },
    {
      title: "Expert support",
      text: "Get guidance on choosing products and applying them when you need it.",
    },
  ],
  steps: ["Prepare the surface", "Apply the base coat", "Broadcast and seal"],
  storeLinks: [
    { label: "Shop all colors", href: `${STORE_URL}/collections/pre-tinted-colors` },
    { label: "How to choose your color", href: `${STORE_URL}/pages/pre-tinted-bases` },
    { label: "Resin systems", href: `${STORE_URL}/collections/stoneluxe-systems` },
    { label: "Photo gallery", href: `${STORE_URL}/pages/gallery` },
  ],
  guideUrl: `${STORE_URL}/pages/how-it-works-floor-coating-application-guide`,
};

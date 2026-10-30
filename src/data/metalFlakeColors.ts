// Metal flake colors, in the order the current site lists them. Names are
// copied from the current site; descriptions are drafts written from the
// photos. Both pending owner review.

import { customMultistoneColors, type ColorSwatch } from "./customColors";

// Metallic primers on their own.
export const metalFlakePrimerColors: ColorSwatch[] = [
  {
    name: "Copper Metal Flake Primer",
    image: "/images/metal-flake/copper-metal-flake-primer.jpg",
    imageAlt: "Shimmering copper-brown metallic finish.",
  },
  {
    name: "Silver Metal Flake Primer",
    image: "/images/metal-flake/silver-metal-flake-primer.jpg",
    imageAlt: "Sparkling silver metallic finish.",
  },
  {
    name: "Antique Bronze",
    image: "/images/metal-flake/antique-bronze.jpg",
    imageAlt: "Smooth burnt-orange finish with a soft metallic sheen.",
  },
  {
    name: "Blue Lagoon",
    image: "/images/metal-flake/blue-lagoon.jpg",
    imageAlt: "Pale steel blue with a fine metallic shimmer.",
  },
  {
    name: "Lavender",
    image: "/images/metal-flake/lavender.jpg",
    imageAlt: "Soft purple-gray with a subtle metallic sheen.",
  },
  {
    name: "Midnight",
    image: "/images/metal-flake/midnight.jpg",
    imageAlt: "Dark charcoal gray with a faint metallic sheen.",
  },
  {
    name: "Mint",
    image: "/images/metal-flake/mint.jpg",
    imageAlt: "Cool blue-gray with a hint of green and a fine metallic shimmer.",
  },
  {
    name: "Spice",
    image: "/images/metal-flake/spice.jpg",
    imageAlt: "Warm brick red with a soft metallic sheen.",
  },
  {
    name: "Titanium",
    image: "/images/metal-flake/titanium.jpg",
    imageAlt: "Medium gray with a fine metallic shimmer.",
  },
  {
    name: "Gold",
    image: "/images/metal-flake/gold.jpg",
    imageAlt: "Champagne gold with a brushed metallic shimmer.",
  },
  {
    name: "Green Tea",
    image: "/images/metal-flake/green-tea.jpg",
    imageAlt: "Olive green with a fine metallic shimmer.",
  },
  {
    name: "Sky Blue",
    image: "/images/metal-flake/sky-blue.jpg",
    imageAlt: "Light sky blue with a fine metallic shimmer.",
  },
  {
    name: "Blush",
    image: "/images/metal-flake/blush.jpg",
    imageAlt: "Dusty rose pink with a brushed metallic shimmer.",
  },
];

// Already in the custom colors gallery; reused here so each lives in one place.
const stoneMetalFlakeColors = customMultistoneColors.filter((color) =>
  color.name.endsWith("Stone Metal Flake"),
);

// Multi-Spec finishes paired with a metal flake primer for a 3D look.
export const metalFlakePairedColors: ColorSwatch[] = [
  {
    name: "Blue Steel",
    image: "/images/metal-flake/blue-steel.jpg",
    imageAlt: "Gray and white speckled stone with black and light blue flecks.",
  },
  {
    name: "Ebony Stone",
    image: "/images/metal-flake/ebony-stone.jpg",
    imageAlt: "Black base with scattered white and silver flecks.",
  },
  {
    name: "Mint Gray",
    image: "/images/metal-flake/mint-gray.jpg",
    imageAlt: "Gray and pale pink speckled stone with black and maroon flecks.",
  },
  {
    name: "Night Smoke",
    image: "/images/metal-flake/night-smoke.jpg",
    imageAlt: "Black and dark brown flecks over a lavender-gray base, with tan and white specks.",
  },
  {
    name: "Shadow Stone",
    image: "/images/metal-flake/shadow-stone.jpg",
    imageAlt: "Black, gray, and white speckled stone, like salt-and-pepper granite.",
  },
  {
    name: "Frosted Silver",
    image: "/images/metal-flake/frosted-silver.jpg",
    imageAlt: "White and light silver-gray speckled stone.",
  },
  {
    name: "Mirage Gold",
    image: "/images/metal-flake/mirage-gold.jpg",
    imageAlt: "Off-white base with taupe, brown, and dark brown flecks.",
  },
  {
    name: "Limo Verde",
    image: "/images/metal-flake/limo-verde.jpg",
    imageAlt: "Pale sage green with black and blue-gray flecks.",
  },
  {
    name: "Alaskan Ice",
    image: "/images/metal-flake/alaskan-ice.jpg",
    imageAlt: "White base with medium blue and gray flecks.",
  },
  {
    name: "Charming Peach",
    image: "/images/metal-flake/charming-peach.jpg",
    imageAlt: "Dusty rose and peach speckled stone with white and black flecks.",
  },
  ...stoneMetalFlakeColors,
];

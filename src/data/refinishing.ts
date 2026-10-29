// Refinishing content for each surface, adapted from the company's current
// Refinishing pages (typos fixed, wording kept). Draft copy: pending owner review.

import { bathtubTroubleshooting, type TroubleshootingIssue } from "./bathtubTroubleshooting";
import { customMultistoneColors, type ColorSwatch } from "./customColors";

// Who can buy the products for a surface. Left out when not yet confirmed.
export type Audience = "pro" | "everyone";

export interface RefinishingProcess {
  title: string;
  steps: string[];
}

export interface RelatedProduct {
  label: string;
  // A /products/... page inside this site.
  to: string;
}

export interface RefinishingSurface {
  slug: string;
  name: string;
  // One sentence for the overview card and the search result description.
  summary: string;
  audience?: Audience;
  paragraphs: string[];
  processes?: RefinishingProcess[];
  // Short warnings shown after the steps.
  notes?: string[];
  relatedProducts?: RelatedProduct[];
  // Common problems, their causes, and how to fix them.
  troubleshooting?: TroubleshootingIssue[];
  // Color swatches shown as a gallery.
  colors?: ColorSwatch[];
  // A highlighted warning shown at the top of the color gallery.
  colorNote?: string;
}

export const audienceLabels: Record<Audience, string> = {
  pro: "For licensed professionals",
  everyone: "For professionals and do-it-yourselfers",
};

export const refinishingSurfaces: RefinishingSurface[] = [
  {
    slug: "bathtub",
    name: "Bathtubs",
    summary:
      "Our most popular line, used by professional bathtub refinishers on tubs, sinks, tile, countertops, and more.",
    audience: "pro",
    paragraphs: [
      "Bathtub refinishing is our most popular industry, used by professional bathtub refinishers. The same coatings work on countertops, sinks, bathtubs, ceramic tile, floors, cabinets, and interior walls.",
    ],
    relatedProducts: [
      { label: "Top Coats", to: "/products/top-coats" },
      { label: "Primers", to: "/products/primers" },
      { label: "Cleaners", to: "/products/cleaners" },
    ],
    troubleshooting: bathtubTroubleshooting,
  },
  {
    slug: "countertops",
    name: "Countertops",
    summary:
      "Multi-Spec for a speckled stone look, or Createastain for the look of granite or marble.",
    audience: "pro",
    paragraphs: [
      "We offer two ways to refinish countertops: Multi-Spec coatings for the look of a speckled stone finish, and Createastain for the look of granite or marble.",
      "Multi-Spec is a water-based, one-stage product that looks and feels like a speckled stone finish when sprayed. It sprays with an HVLP gun and turbine system, comes in a wide variety of colors, and works on countertops as well as bathtubs, tile, ceramic, cabinets, and walls.",
      "Createastain is a water-based styrene acrylic stain with silane, which increases adhesion by up to 400%. That adhesion lets it stain glass-like surfaces such as porcelain and ceramic tile, and turn Formica countertops into the look of granite or marble.",
    ],
    relatedProducts: [
      { label: "Multi-Spec", to: "/products/multi-spec" },
      { label: "Createastain", to: "/products/createastain" },
    ],
  },
  {
    slug: "tile",
    name: "Ceramic tile",
    summary: "Stain ceramic tile with Createastain, then seal it with a clear coat.",
    audience: "pro",
    paragraphs: [
      "Createastain lets you change the color of ceramic tile without replacing it.",
    ],
    processes: [
      {
        title: "Ceramic tile staining",
        steps: [
          "Clean the tiles with our Industrial Cleaner. It contains mild acids and lightly etches the tiles.",
          "Wipe on or spray Miracle Bond 2 primer over the tiles. Our aerospace primer also works. Let the primer dry to the touch, usually 45 minutes.",
          "Apply Createastain in as many colors as you like. When using several colors, wait 20 to 30 minutes between them.",
          "Let the stain dry for 60 minutes, then apply two coats of our solvent-based clear coat.",
          "The tiles can be used 24 hours after the clear coat.",
        ],
      },
    ],
    notes: [
      "Always wear gloves when using any cleaner that contains acids.",
      "The clear coat and primer must be sprayed on by a professional refinishing company. Call or email us for a referral in your area.",
    ],
    relatedProducts: [
      { label: "Createastain", to: "/products/createastain" },
      { label: "Cleaners", to: "/products/cleaners" },
      { label: "Primers", to: "/products/primers" },
    ],
  },
  {
    slug: "concrete",
    name: "Concrete",
    summary:
      "Garage floors, patios, and walkways with a granite-look multistone finish or a solid color.",
    audience: "everyone",
    paragraphs: [
      "Give a garage floor, patio, or walkway the look of granite. Our multistone selection has 66 Multi-Spec colors to choose from.",
      "Many standard epoxy floor paints peel within a few months because they lack chemical resistance. Our process finishes with a clear coat of industrial aliphatic acrylic polyurethane, rated as an anti-graffiti coating, so oil, salt, and other chemicals can't get through to the multistone and primer underneath.",
      "Preparation is the key to a finish that lasts: the cement must be spotless.",
    ],
    processes: [
      {
        title: "Multistone finish",
        steps: [
          "Power wash the cement with at least 2,600 PSI. If old paint is peeling, remove it completely; a 4,000 PSI washer makes this easier.",
          "Prime with XL Aerospace primer, made to match your multistone color. It is a two-part industrial epoxy with silane, an adhesion promoter. Roll it on with a fine mat roller or spray it, and apply two coats.",
          "Spray the multistone over the primer with an HVLP or airless system. Local paint stores rent these.",
          "24 hours later, roll or spray on two clear coats, 6 hours apart.",
          "Light use after 24 hours; drive on it after 48 hours.",
        ],
      },
      {
        title: "Solid color finish",
        steps: [
          "Power wash the cement with at least 2,600 PSI. If old paint is peeling, remove it completely; a 4,000 PSI washer makes this easier.",
          "Prime with XL Aerospace primer, tinted to any color. We match Sherwin-Williams, Behr, and Benjamin Moore colors; call us with the color name and number. Roll it on with a solvent-resistant roller and apply two coats, 2 hours apart.",
          "3 hours after priming, roll on one thick clear coat sealer. Add a second coat after 5 hours for more durability.",
          "Walk on it after 24 hours; drive on it after 72 hours.",
        ],
      },
    ],
    relatedProducts: [
      { label: "Primers", to: "/products/primers" },
      { label: "Multi-Spec", to: "/products/multi-spec" },
      { label: "Floor Coatings", to: "/products/floor-coatings" },
    ],
  },
  {
    slug: "cabinets",
    name: "Cabinets",
    summary: "Change the look of old cabinets with our aliphatic polyurethane top coats.",
    audience: "pro",
    paragraphs: [
      "Change the look of old cabinets with any of our aliphatic polyurethane top coats, offered in three sheens: gloss, satin, or flat. For the best adhesion, use our XL Aerospace epoxy primer.",
    ],
    relatedProducts: [
      { label: "Top Coats", to: "/products/top-coats" },
      { label: "Primers", to: "/products/primers" },
    ],
  },
  {
    slug: "truck-bed-liners",
    name: "Truck bed liners and more",
    summary:
      "Grizzly Grip: a rubberized, non-slip coating for truck beds, boats, decks, and garage floors.",
    audience: "everyone",
    paragraphs: [
      "Grizzly Grip is an aliphatic moisture-cure urethane blended with two sizes of rubber. It is flexible, chemical resistant, and doesn't yellow or fade. It's used most in the marine and boat industry, on truck bed liners, Jeeps, and RV camper tops.",
      "It comes in two textures: coarse, with larger rubber pieces for a non-slip surface, and fine, with a texture like orange peel. Grizzly Grip comes in 22 colors, and we can custom-make colors with a three-gallon minimum.",
      "The coarse texture is ideal for truck bed liners and non-slip areas such as garage floors, decks, cement, wood, and even ceramic tile floors.",
      "Grizzly Grip is a great fit for do-it-yourselfers. A truck bed liner can cost $375 to $500 to have done, versus about $82 to $140 to do it yourself with Grizzly Grip.",
    ],
    processes: [
      {
        title: "Application",
        steps: [
          "Roll it on with our special texture rollers, the easiest way to apply it.",
          "Or spray it with a conventional undercoating gun and compressor at 50 to 60 PSI.",
        ],
      },
    ],
    notes: ["On ceramic tile, prime with our XL Aerospace primer first."],
    relatedProducts: [
      { label: "Nonslip Paint (Grizzly Grip)", to: "/products/nonslip-paint" },
      { label: "Primers", to: "/products/primers" },
    ],
  },
  {
    slug: "fire-retardant-coatings",
    name: "Fire-retardant coatings",
    summary:
      "TorchOut: a Class A fire-retardant latex paint for interior walls, wood, and drywall.",
    paragraphs: [
      "TorchOut is an intumescent, Class A fire-retardant coating for interior surfaces, used as a primer or finish paint. When exposed to heat or flame, it blisters into a foam barrier that protects the wood, drywall, or paint underneath. Outdoors, it can be used as a primer only.",
      "TorchOut has very low smoke development (25), a 0–5 flame spread, and a 0–5 VOC rating. It comes in white as standard, and we can match any color: send us the manufacturer's color name and code, or mail us a chip or fabric sample.",
    ],
    processes: [
      {
        title: "Application",
        steps: [
          "Make sure surfaces are free of dirt, dust, wax, and oil. Lightly sand any glossy painted surface. Matte paint, drywall, and masonry need no primer; prime new wood with an alkyd primer from your local paint store.",
          "Apply two coats; two are needed to match the test results. Coverage is 150 to 180 square feet per gallon with two coats.",
          "It dries to the touch in 30 to 45 minutes and can be recoated after 2 hours.",
        ],
      },
    ],
    notes: [
      "TorchOut can be thinned with up to 5% water, but we recommend not thinning it. Clean equipment and skin with warm, soapy water.",
    ],
  },
  {
    slug: "custom-multistone-colors",
    name: "Custom multistone colors",
    summary: "Multistone colors handcrafted by Midwest Chemicals from a specific formula.",
    audience: "pro",
    paragraphs: [
      "These multistone colors are made by Midwest Chemicals from Rust-Oleum's paint selection, handcrafted using a specific formula. They apply with the same process as our other multistone colors; we suggest using the matching primer colors.",
    ],
    colors: customMultistoneColors,
    colorNote: "Colors may look up to 10% different on screen than in person.",
    relatedProducts: [
      { label: "Multi-Spec", to: "/products/multi-spec" },
      { label: "Metal Flake Primer Colors", to: "/products/metal-flake-primer-colors" },
    ],
  },
];

// Finds the surface whose `slug` matches the one in the address bar.
// Returns undefined when none matches.
export function findSurface(slug: string | undefined): RefinishingSurface | undefined {
  return refinishingSurfaces.find(item => item.slug === slug);
}

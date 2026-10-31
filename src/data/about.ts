// Content for the About page, from the current site's "Who We Are" and
// "About Us" pages, with spelling fixes only. Pending owner review.

export interface Industry {
  name: string;
  // A page on this site about it. Left out when we don't have one yet.
  to?: string;
}

export const industries: Industry[] = [
  { name: "Bathtubs", to: "/refinishing/bathtub" },
  { name: "Countertops", to: "/refinishing/countertops" },
  { name: "Cabinets", to: "/refinishing/cabinets" },
  { name: "Tile", to: "/refinishing/tile" },
  { name: "Concrete", to: "/refinishing/concrete" },
  { name: "Truck beds", to: "/refinishing/truck-bed-liners" },
  { name: "Roof and paver sealers", to: "/products/roof-paver-sealer" },
  { name: "Aircraft", to: "/products/top-coats" },
  { name: "Marine", to: "/products/top-coats" },
  { name: "Camper tops", to: "/refinishing/truck-bed-liners" },
];

export interface QuickLink {
  title: string;
  text: string;
  to: string;
}

// Shown as cards at the top of the About page.
export const quickLinks: QuickLink[] = [
  {
    title: "Warranty and returns",
    text: "What to check when your order arrives, our 30-day return policy, and shipping in freezing weather.",
    to: "/about/warranty",
  },
  {
    title: "What refinishers say",
    text: "Stories and before-and-after photos from refinishers who use our products.",
    to: "/about/testimonials",
  },
];

export interface AboutPhoto {
  src: string;
  // The photo's real size. It's shown no larger than this, so it stays sharp.
  width: number;
  height: number;
  alt: string;
}

export const aboutPhotos: AboutPhoto[] = [
  {
    src: "/images/about/clawfoot-tub.jpg",
    width: 970,
    height: 970,
    alt: "White slipper clawfoot tub with brushed nickel feet and a floor-mounted faucet.",
  },
  {
    src: "/images/about/kitchen-countertop.jpg",
    width: 640,
    height: 640,
    alt: "Kitchen island and counters in a tan speckled stone finish, with dark wood cabinets.",
  },
  {
    src: "/images/about/bass-boat.jpg",
    width: 640,
    height: 368,
    alt: "Red bass boat speeding across a lake.",
  },
  {
    src: "/images/about/paver-before-after.jpg",
    width: 573,
    height: 381,
    alt: "Brick paver driveway, faded and gray on the before side and rich red and brown on the sealed after side.",
  },
];

export interface Strength {
  title: string;
  text: string;
}

export const strengths: Strength[] = [
  {
    title: "Quality",
    text: "We pride ourselves on the quality and consistency of our coatings, and sell to thousands of professional bathtub refinishers throughout the USA, with distributors worldwide. Price and customer service matter just as much to us: we aim to be second to none for bathtub refinishers, countertop refinishers, concrete staining companies, and truck bed liner applicators.",
  },
  {
    title: "Private labeling",
    text: "We private label for many companies in the bathtub refinishing, concrete staining, and truck bed liner industries, whether they resell our products or want a professional look that gives them an edge over their competitors.",
  },
];

// The owner's letter. Spelling and grammar fixes only; the owner's voice stays.
export const ownerLetter: string[] = [
  "Midwest Chemicals is a manufacturer and distributor of coatings for all types of industries. We carry both water-based and solvent-based coatings geared for specific industries. We have been in business since 1991, developing different types of coatings to bring the highest standard of coatings and diversification to many industries.",
  "We continue to research and develop coatings to bring you the most current technology available to the coatings industry. We also pride ourselves on providing you with the best prices available for the type of high-end products that are current in the coatings industry. We have always carried a “we will beat any of our competitors’ prices” attitude, and will always look out for our customers when it comes to pricing.",
  "We also offer private labeling, and do so for some of the largest coating companies in our industry. Private labeling gives your company that finished, professional look, and also provides privacy, so your employees don’t know who you are dealing with.",
  "We always encourage the companies we sell to to bring their ideas to us for future development or adjustment of coatings. We upgrade our coatings every couple of years as technology allows, while other companies have been selling the same products for 20 years. We encourage your input; it is very important for the growth of our industry.",
];

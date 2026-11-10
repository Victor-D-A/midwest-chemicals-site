// Pictures that float in the home page galaxy.
//
// To add one: crop it to a 4:3 landscape shape around the finished surface,
// shrink it to 360px wide, save it in public/images/hero-tubs/, and add its
// file name (without .jpg) to the right list below.

const tubs = [
  "tub-white",
  "tub-almond",
  "tub-gray",
  "tub-seafoam",
  "tub-hunter-green",
  "tub-navy",
  "tub-pink",
  "tub-sage",
  "tub-white-fleck",
  "tub-blue-fleck",
];

const showers = [
  "shower-sage-fleck",
  "shower-mocha",
  "shower-blue-fleck",
  "shower-beige-fleck",
  "shower-blue",
  "shower-taupe",
  "shower-charcoal-fleck",
  "shower-light-gray",
  "shower-charcoal-fleck-2",
  "shower-light-gray-2",
  "shower-almond",
  "shower-sage-fleck-2",
];

// Alternate tub, shower, tub, shower… so neighbors look different.
function interleave(a: string[], b: string[]): string[] {
  const mixed: string[] = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) mixed.push(a[i]);
    if (b[i]) mixed.push(b[i]);
  }
  return mixed;
}

export const heroGalleryImages = interleave(tubs, showers).map(
  (name) => `/images/hero-tubs/${name}.jpg`,
);

// Draft copy, pending owner review.
export const heroStats = [
  { value: "53", label: "Multi-Spec colors" },
  { value: "Since 1991", label: "Supplying refinishing pros" },
  { value: "Pro-grade", label: "Coatings and supplies" },
];

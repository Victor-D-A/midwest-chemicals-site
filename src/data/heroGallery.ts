// Pictures that float in the home page galaxy.
//
// To add one: crop it to a 4:3 landscape shape around the finished surface,
// shrink it to 360px wide, save it in public/images/hero-tubs/, and add its
// file name (without .jpg) to the right list below. Countertops can be
// saved at 300px wide: their fine speckle makes bigger files.

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

const countertops = [
  "counter-sand",
  "counter-salt-and-pepper",
  "counter-black",
  "counter-blue",
  "counter-charcoal",
  "counter-peach",
  "counter-cream",
  "counter-ruby-brown",
  "counter-mocha",
  "counter-teal",
];

// Take one from each list in turn (tub, shower, counter, tub, shower, …) so
// neighbors look different. Lists can be different lengths; when a shorter
// one runs out, keep going with the others.
function interleave(...lists: string[][]): string[] {
  const result: string[] = [];

  const maxRounds = Math.max(...lists.map((list) => list.length));

  for (let i = 0; i < maxRounds; i++) {
    for (let j = 0; j < lists.length; j++) {
      const item = lists[j][i];

      if (item !== undefined) {
        result.push(item);
      }
    }
  }

  return result;
}

export const heroGalleryImages = interleave(tubs, showers, countertops).map(
  (name) => `/images/hero-tubs/${name}.jpg`,
);

// Draft copy, pending owner review.
export const heroStats = [
  { value: "53", label: "Multi-Spec colors" },
  { value: "Since 1991", label: "Supplying refinishing pros" },
  { value: "Pro-grade", label: "Coatings and supplies" },
];

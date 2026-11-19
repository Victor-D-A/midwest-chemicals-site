// Finished Multi-Spec jobs, from the "Multi-Spec Examples" page on the
// company's current website (/refinishing/countertops/multi-spec-examples).
// The photos came without captions or color names, so captions name the
// surface only; color names can be added once the owners know them.
// Two photos had a camera date printed in the corner, cropped off.

export interface ExamplePhoto {
  src: string;
  width: number;
  height: number;
  // What the photo shows, for screen readers.
  alt: string;
  // The short label under the photo.
  caption: string;
}

const photo = (
  file: string,
  width: number,
  height: number,
  alt: string,
  caption: string,
): ExamplePhoto => ({ src: `/images/multi-spec-examples/${file}.jpg`, width, height, alt, caption });

// The first photo is the gallery's large lead photo and the teaser on the
// Multi-Spec Colors page: the sharpest and the most dramatic.
export const multiSpecExamples: ExamplePhoto[] = [
  photo("corner-tub", 1600, 1200, "A corner garden tub and its surround, refinished in a gray speckled stone finish.", "Garden tub and surround"),
  photo("kitchen-island", 600, 374, "A kitchen island countertop with a black sink, refinished in a gray speckled stone finish.", "Kitchen island"),
  photo("vanity-black", 1024, 768, "A bathroom vanity top in a near-black speckled finish over white cabinets.", "Black vanity top"),
  photo("shower-tile", 640, 480, "Shower wall tiles refinished in a gray-green speckled finish.", "Shower tile"),
  photo("tub-surround", 640, 480, "A tub and its tile surround refinished in a light speckled finish.", "Tub and tile surround"),
  photo("countertop-closeup", 600, 374, "Close-up of a countertop in a gray speckled finish.", "Countertop close-up"),
  photo("vanity-molded-sink", 216, 216, "A vanity top with a molded sink in a gray-mauve speckled finish.", "Vanity with molded sink"),
  photo("reception-counter", 300, 225, "The edge of a reception counter in a light gray speckled finish.", "Reception counter"),
];

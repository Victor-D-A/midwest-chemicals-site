// Short "you might also want…" notes shown on the pages where a visitor is
// most likely to need another product. Draft copy pending owner review.

export interface Callout {
  // Page addresses the callout appears on, like "/refinishing/tile".
  pages: string[];
  // The question or situation, in the visitor's words.
  text: string;
  linkLabel: string;
  to: string;
}

export const callouts: Callout[] = [
  {
    pages: ["/refinishing/bathtub", "/refinishing/tile", "/products/top-coats"],
    text: "Working in an area with strict VOC rules?",
    linkLabel: "See our new Low VOC Coating System",
    to: "/products/low-voc-coating-system",
  },
  {
    pages: ["/products/top-coats"],
    text: "Coating a boat deck or a non-slip floor?",
    linkLabel: "Try Grizzly Grip",
    to: "/refinishing/truck-bed-liners",
  },
];

// The callouts for one page, in the order listed above.
export function calloutsFor(pathname: string): Callout[] {
  return callouts.filter((callout) => callout.pages.includes(pathname));
}

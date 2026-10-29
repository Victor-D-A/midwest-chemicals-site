// Custom multistone colors, in the order the current site lists them.
// Names are copied exactly from the current site; descriptions are drafts
// written from the photos. Both pending owner review.

export interface ColorSwatch {
  name: string;
  // A 300x300 photo of the finish in public/images/colors.
  image: string;
  // Describes the colors in the photo, since names like "Amazon" or "Safire"
  // don't say what the finish looks like. Required, so every new color gets one.
  imageAlt: string;
}

export const customMultistoneColors: ColorSwatch[] = [
  {
    name: "Silver Stone Metal Flake",
    image: "/images/colors/silver-stone-metal-flake.jpg",
    imageAlt: "Black base with dense white and silver flecks and a few maroon specks.",
  },
  {
    name: "Copper Stone Metal Flake",
    image: "/images/colors/copper-stone-metal-flake.jpg",
    imageAlt: "Copper-orange base with black and tan flecks.",
  },
  {
    name: "Amazon",
    image: "/images/colors/amazon.jpg",
    imageAlt: "Cream base with tan, brown, and black flecks.",
  },
  {
    name: "Astoria Granite",
    image: "/images/colors/astoria-granite.jpg",
    imageAlt: "Warm brown base with rust-orange and dark brown flecks and light gray specks.",
  },
  {
    name: "Aztec Brown",
    image: "/images/colors/aztec-brown.jpg",
    imageAlt: "Dark brown base with golden tan patches, like brown granite.",
  },
  {
    name: "Beach House Lime",
    image: "/images/colors/beach-house-lime.jpg",
    imageAlt: "Bright lime green with darker green and tan flecks and a few black specks.",
  },
  {
    name: "Beach House Pink",
    image: "/images/colors/beach-house-pink.jpg",
    imageAlt: "Coral pink base with gray patches and scattered black chips.",
  },
  {
    name: "Bellagio",
    image: "/images/colors/bellagio.jpg",
    imageAlt: "Off-white base with gray, tan, and maroon flecks.",
  },
  {
    name: "Blackstone",
    image: "/images/colors/blackstone.jpg",
    imageAlt: "Black base with tan, cream, and gray flecks.",
  },
  {
    name: "Camouflage Green",
    image: "/images/colors/camouflage-green.jpg",
    imageAlt: "Deep forest green with light green and rust-tan flecks.",
  },
  {
    name: "Cashmere",
    image: "/images/colors/cashmere.jpg",
    imageAlt: "White base with gray, black, rust, and peach flecks.",
  },
  {
    name: "Celestial Blue",
    image: "/images/colors/celestial-blue.jpg",
    imageAlt: "Bright blue mixed with black, gray, white, and brown flecks.",
  },
  {
    name: "Charcoal Granite",
    image: "/images/colors/charcoal-granite.jpg",
    imageAlt: "Black base with fine silver-gray flecks.",
  },
  {
    name: "Florance Sand",
    image: "/images/colors/florance-sand.jpg",
    imageAlt: "Sandy tan base with dense black flecks.",
  },
  {
    name: "Irish Emerald Green",
    image: "/images/colors/irish-emerald-green.jpg",
    imageAlt: "Deep emerald green with black and pale yellow-green flecks.",
  },
  {
    name: "Kongo",
    image: "/images/colors/kongo.jpg",
    imageAlt: "Off-white base with tan, brown, and black flecks.",
  },
  {
    name: "Latte",
    image: "/images/colors/latte.jpg",
    imageAlt: "Pinkish tan base with brown, cream, and dark gray flecks.",
  },
  {
    name: "Lava",
    image: "/images/colors/lava.jpg",
    imageAlt: "Dark chocolate brown with rust and gray flecks.",
  },
  {
    name: "Lilac Stone",
    image: "/images/colors/lilac-stone.jpg",
    imageAlt: "Light purple base with black, gray, and white flecks.",
  },
  {
    name: "Morocco",
    image: "/images/colors/morocco.jpg",
    imageAlt: "Sandy beige base with light tan and a few dark brown specks.",
  },
  {
    name: "Pearl Stone",
    image: "/images/colors/pearl-stone.jpg",
    imageAlt: "Light gray-green base with soft gray and white flecks.",
  },
  {
    name: "Ruby Granite",
    image: "/images/colors/ruby-granite.jpg",
    imageAlt: "Dark maroon base with pink, black, and teal-gray flecks.",
  },
  {
    name: "Safire",
    image: "/images/colors/safire.jpg",
    imageAlt: "Deep red base with salmon, black, and blue-gray flecks.",
  },
  {
    name: "Salmon",
    image: "/images/colors/salmon.jpg",
    imageAlt: "Muted salmon-tan base with light gray and scattered black specks.",
  },
  {
    name: "Teal Granite",
    image: "/images/colors/teal-granite.jpg",
    imageAlt: "Dark teal base with pale aqua, white, and tan flecks.",
  },
  {
    name: "Venetian Tan",
    image: "/images/colors/venetian-tan.jpg",
    imageAlt: "Medium brown base with tan, dark brown, and light gray flecks.",
  },
];

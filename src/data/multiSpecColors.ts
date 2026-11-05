// All 53 colors in the Multi-Spec sample case, in the order the current
// site lists them. Names come from the current site's file names (it shows
// no text names), so spellings like "Tuscant Tan" are pending owner review.
// Descriptions are drafts written from the photos.

import { customMultistoneColors, type ColorSwatch } from "./customColors";

// 22 of the case colors are already in the custom multistone gallery.
// Reusing those entries keeps one photo and one description per color.
function existingSwatch(name: string): ColorSwatch {
  const foundColor = customMultistoneColors.find((color) => 
    color.name === name);

  if (!foundColor) {
    throw new Error(`No custom color named "${name}"`);
  }

  return foundColor;
}

// A color that's only in the case, not in the custom gallery.
function swatch(name: string, file: string, imageAlt: string): ColorSwatch {
  return { name, image: `/images/colors/${file}.jpg`, imageAlt };
}

export const multiSpecColors: ColorSwatch[] = [
  existingSwatch("Amazon"),
  swatch("Ancient Ivory", "ancient-ivory", "Soft ivory base with faint cream and white specks."),
  existingSwatch("Astoria Granite"),
  existingSwatch("Aztec Brown"),
  swatch("Baltic Brown", "baltic-brown", "Dense mix of brown, gold, and black flecks."),
  existingSwatch("Bellagio"),
  swatch("Birch Bark", "birch-bark", "White base with scattered black and gray specks."),
  swatch("Birch Granite", "birch-granite", "Tan base with dense brown, cream, and rust specks."),
  swatch("Bisque", "bisque", "Off-white base with faint light gray specks."),
  existingSwatch("Blackstone"),
  swatch("Brownstone", "brownstone", "Mottled dark brown, mauve, and black specks."),
  existingSwatch("Cashmere"),
  existingSwatch("Camouflage Green"),
  swatch("Canyon Cliff", "canyon-cliff", "Rosy brown base with dense cream, rust, and dark brown specks."),
  swatch("Cappuccino", "cappuccino", "White base with small gray and brown specks."),
  existingSwatch("Celestial Blue"),
  existingSwatch("Charcoal Granite"),
  existingSwatch("Copper Stone Metal Flake"),
  swatch("Cliff Rock", "cliff-rock", "Warm taupe base with dark brown and cream specks."),
  swatch("Desert Stone", "desert-stone", "Light gray base with white, tan, and black specks."),
  swatch("Fawn", "fawn", "Pale cream base with faint beige specks."),
  swatch("Fieldstone", "fieldstone", "Light greige base with gray and tan specks."),
  existingSwatch("Florance Sand"),
  swatch("Fusion", "fusion", "Off-white base with light gray and beige specks."),
  swatch("Galaxy", "galaxy", "Sandy tan base with cream, gold, and brown specks."),
  swatch("Galena Gray", "galena-gray", "Medium gray base with dark gray and white specks."),
  swatch("Greystone", "greystone", "Off-white base with bold black specks."),
  existingSwatch("Kongo"),
  existingSwatch("Latte"),
  existingSwatch("Lava"),
  existingSwatch("Lilac Stone"),
  swatch("Misty Gray", "misty-gray", "Pale gray base with light gray and white specks."),
  swatch("Moonstone", "moonstone", "Peach and tan base with gray and cream specks."),
  existingSwatch("Morocco"),
  swatch("Night Spots", "night-spots", "Black base with small white specks."),
  swatch("Onyx", "onyx", "Black base with mauve and gray specks."),
  swatch("Oyster White", "oyster-white", "Smooth creamy white with very faint specks."),
  swatch("Red Granite", "red-granite", "Reddish brown base with black and tan specks."),
  swatch("Rimrock", "rimrock", "Cream base with light tan and pink specks."),
  swatch("Rocky Road", "rocky-road", "Gray and white base with dense black specks."),
  existingSwatch("Ruby Granite"),
  swatch("Safari Tan", "safari-tan", "Pale cream base with tan and pinkish specks."),
  existingSwatch("Safire"),
  existingSwatch("Salmon"),
  existingSwatch("Silver Stone Metal Flake"),
  swatch("Smokey Granite", "smokey-granite", "Brown and taupe base with dark brown and cream specks."),
  swatch("Stonewall Gray", "stonewall-gray", "Black base with dense white and gray specks."),
  swatch("Summit Gray", "summit-gray", "White base with dense gray and black specks."),
  swatch("Taos Tan", "taos-tan", "Light tan base with soft beige specks."),
  existingSwatch("Teal Granite"),
  swatch("Tuscant Tan", "tuscant-tan", "Pinkish tan base with gray and brown specks."),
  existingSwatch("Venetian Tan"),
  swatch("White Sands", "white-sands", "Clean white with very faint light gray specks."),
];

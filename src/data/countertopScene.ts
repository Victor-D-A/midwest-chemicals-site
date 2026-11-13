// The kitchen photo in the Multi-Spec "On a countertop" preview.
//
// Coordinates are in the original photo's pixels (1448 × 1086), even though
// the saved file is smaller: the SVG stretches the file to fill that size.
// Each surface is an outline, listed as "x,y x,y …" corners, that gets
// filled with the chosen color.
//
// To use a different photo: pick one with a plain, light, untextured
// counter; save it in public/images/colors/; update the size and trace the
// counter's corners; then adjust `lift` until light colors look right.

export interface CountertopSurface {
  // The corners of the area to fill with the color.
  points: string;
  // Squashes the texture top to bottom, so a flat counter seen at an angle
  // looks like it lies flat (1 = no squash).
  squash: number;
}

export interface CountertopScene {
  photo: string;
  width: number;
  height: number;
  // How wide one color swatch is drawn, in photo pixels. Smaller means finer
  // speckle but more visible repeats.
  tileSize: number;
  // The counter in the photo is mid-gray (about 61% bright), so its shadows
  // are brightened by this much before they're laid over the color. Without
  // it, every color would look a third darker than it is.
  lift: number;
  surfaces: CountertopSurface[];
}

export const countertopScene: CountertopScene = {
  photo: "/images/colors/countertop-scene.jpg",
  width: 1448,
  height: 1086,
  tileSize: 420,
  lift: 1.55,
  surfaces: [
    // The top. Its left side runs under the window ledge at an angle.
    { points: "232,628 1448,628 1448,809 0,809 0,760", squash: 0.4 },
    // The front edge, facing the viewer.
    { points: "0,809 1448,809 1448,835 0,835", squash: 1 },
  ],
};

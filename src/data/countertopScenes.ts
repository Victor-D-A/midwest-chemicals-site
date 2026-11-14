// The photos in the Multi-Spec countertop preview: a bathroom and a kitchen.
//
// Coordinates are in each photo's pixels (1600 × 1200). Each surface is an
// outline, listed as "x,y x,y …" corners, that gets filled with the chosen
// color. Holes (a sink, a faucet) are left showing the photo.
//
// To add a photo: pick one with a light counter; white-balance it; save it
// in public/images/colors/; trace the counter's corners; then adjust `lift`
// until light colors look right.

export interface CountertopSurface {
  // The corners of the area to fill with the color.
  points: string;
  // Parts inside (or overlapping) the outline that keep the photo, like a
  // sink or a faucet.
  holes?: string[];
  // Squashes the texture top to bottom, so a flat counter seen at an angle
  // looks like it lies flat (1 = no squash).
  squash: number;
}

export interface CountertopScene {
  // The room, for labels like "Blackstone on a kitchen countertop".
  room: string;
  photo: string;
  width: number;
  height: number;
  // How wide one color swatch is drawn, in photo pixels. Smaller means finer
  // speckle but more visible repeats.
  tileSize: number;
  // About 1 ÷ how bright the counter is in the photo. Its shadows are
  // brightened by this much before they're laid over the color; without it,
  // every color would look a little darker than it is.
  lift: number;
  // How much to blur the photo's light and shadow, in pixels (0 = sharp). A
  // plain counter needs none; a patterned one (like granite) does, or its
  // veins would show through every color.
  lightingBlur: number;
  surfaces: CountertopSurface[];
}

// An oval traced as 32 corners, for sinks.
function ellipse(cx: number, cy: number, rx: number, ry: number): string {
  return Array.from({ length: 32 }, (_, i) => {
    const angle = (i / 32) * Math.PI * 2;
    const x = Math.round(cx + rx * Math.cos(angle));
    const y = Math.round(cy + ry * Math.sin(angle));
    return `${x},${y}`;
  }).join(" ");
}

// Traced around the chrome, so no counter shows between the faucet and the
// color.
const faucet =
  "950,356 964,359 977,364 982,377 983,390 983,401 981,413 982,419 995,423 " +
  "1013,427 1027,429 1037,434 1045,441 1046,447 1045,453 1039,458 1013,461 " +
  "984,463 952,464 949,471 946,481 925,482 910,481 906,471 905,461 896,456 " +
  "888,451 886,444 889,437 898,432 912,426 926,423 930,413 931,401 924,397 " +
  "920,390 921,382 926,371 935,361";

// The sink in the mirror. Reflected, it isn't a neat oval, so it's traced
// around the white porcelain; the rim around it is counter.
const mirroredSink =
  "1006,248 1070,247 1114,249 1146,256 1158,260 1170,264 1182,270 1190,276 " +
  "1198,280 1206,286 1214,292 1218,298 1224,304 1224,312 1221,316 1216,320 " +
  "1212,324 1189,336 1185,340 870,340 870,308 " +
  "874,300 878,296 882,292 890,288 894,284 898,280 910,276 918,272 926,268 " +
  "938,264 954,260 970,256 990,252";

const mirroredFaucet =
  "1001,247 1024,247 1022,270 1040,290 1030,300 1017,325 972,325 980,295 1000,267";

// A plain, light counter in our bathroom, with a mirror behind it.
export const bathroomScene: CountertopScene = {
  room: "bathroom",
  photo: "/images/colors/countertop-bathroom.jpg",
  width: 1600,
  height: 1200,
  tileSize: 480,
  // The counter is about 82% bright.
  lift: 1.2,
  lightingBlur: 0,
  surfaces: [
    // Edges were measured from the photo's brightness, then pushed out a
    // pixel or two. Neighboring surfaces overlap slightly on purpose: a
    // one-pixel gap shows up as a bright line around a dark color.

    // The top, around the sink. The sink hole is the porcelain only; the
    // rim around it is the counter's cut edge, so it gets the color too.
    {
      points:
        "549,379 1100,422 1508,465 1524,600 1546,800 1562,934 1563,962 1559,976 " +
        "1553,985 1543,990 1520,991 1500,987 1400,963 1200,919 1000,871 700,800 " +
        "460,746 223,694",
      holes: [ellipse(906, 604, 236, 120), faucet],
      squash: 0.65,
    },
    // The front edge, facing the viewer, around the rounded corner.
    {
      points:
        "221,692 460,744 700,798 1000,869 1200,917 1400,961 1500,985 1520,989 " +
        "1543,988 1553,983 1559,974 1562,960 1565,962 1564,976 1560,988 1555,994 " +
        "1550,1000 1540,1005 1525,1007 1500,1003 1400,979 1200,933 1000,884 " +
        "700,812 460,757 240,707 228,706 221,701",
      squash: 1,
    },
    // The backsplash along the wall, behind the faucet, with its thin top.
    {
      points:
        "531,298 680,306 800,314 920,320 1100,330 1280,341 1460,354 1502,358 " +
        "1533,362 1516,461 1508,465 1100,422 549,379",
      holes: [faucet],
      squash: 1,
    },
    // The short backsplash on the left side, including its thin top and the
    // cut end that faces the viewer.
    { points: "523,296 531,298 549,379 224,697 220,702 159,601", squash: 1 },
    // The counter's reflection in the mirror, so it changes color too.
    {
      points:
        "650,304 800,315 920,321 1100,331 1280,342 1460,355 1505,357 1484,216 " +
        "1240,207 880,199 742,198",
      holes: [mirroredSink, mirroredFaucet],
      squash: 0.35,
    },
    // The left backsplash's reflection, with its thin top.
    { points: "538,298 540,284 721,123 742,127 742,198 650,304", squash: 1 },
  ],
};

// A granite counter in a kitchen. The granite's dark veins would show through
// every color, so its light and shadow are blurred until only the broad
// shading is left.
export const kitchenScene: CountertopScene = {
  room: "kitchen",
  photo: "/images/colors/countertop-kitchen.jpg",
  width: 1600,
  height: 1200,
  // This counter is wider, so each inch is fewer pixels than in the bathroom.
  tileSize: 400,
  // The granite is about 64% bright.
  lift: 1.55,
  lightingBlur: 40,
  surfaces: [
    // The top.
    {
      points:
        "357,396 1329,375 1453,600 1465,624 1472,642 1462,649 56,627 51,619",
      squash: 0.4,
    },
    // The front edge, from the left end around the rounded right corner.
    {
      points:
        "54,620 1460,645 1473,640 1473,652 1469,668 1461,679 1452,683 1430,686 " +
        "1320,684 1220,680 1120,676 1020,674 920,670 820,668 720,664 620,662 " +
        "520,659 420,656 320,655 220,650 120,648 66,646 63,642 54,628",
      squash: 1,
    },
    // The backsplash, with its thin top and both ends.
    {
      points:
        "341,325 520,318 820,308 1060,298 1260,289 1331,288 1328,379 357,399",
      squash: 1,
    },
  ],
};

// Every countertop view, by the name used in buttons and links.
export const countertopScenes = {
  bathroom: bathroomScene,
  kitchen: kitchenScene,
};

export type CountertopRoom = keyof typeof countertopScenes;

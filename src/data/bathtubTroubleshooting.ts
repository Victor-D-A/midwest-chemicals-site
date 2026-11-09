// Common bathtub refinishing problems, adapted from the company's current
// Bathtub page (typos fixed, wording kept). Draft copy: pending owner review.

// On the current site each numbered cause has a matching numbered solution,
// so they're stored as pairs: the cause and its fix can never get out of order.
export interface TroubleshootingFix {
  cause: string;
  solution: string;
}

export interface TroubleshootingIssue {
  problem: string;
  description: string;
  fixes: TroubleshootingFix[];
  // Pictures of the problem, so refinishers can match them to what they see.
  // More than one when it can look different (crazing in patches or all over).
  images?: TroubleshootingImage[];
}

export interface TroubleshootingImage {
  src: string;
  // The image's real size; it's shown no larger than this.
  width: number;
  height: number;
  alt: string;
  // Tells pictures of the same problem apart in the caption, like "in patches".
  label?: string;
  // True for drawings and AI-generated pictures, so the page labels them
  // "Illustration" instead of passing them off as photos of real jobs.
  illustration: boolean;
}

export const bathtubTroubleshooting: TroubleshootingIssue[] = [
  {
    problem: "Alligatoring",
    description: "A cross-hatch pattern of surface imperfections.",
    images: [
      {
        src: "/images/troubleshooting/alligatoring.jpg",
        width: 800,
        height: 462,
        alt: "White bathtub whose glossy coating has wrinkled into a web of raised, irregular cells, like alligator skin, across the bottom and back wall.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Coating over a soft film, or a topcoat that isn't compatible with the undercoat.",
        solution: "Remove the failed coating and recoat with a compatible system for the conditions.",
      },
    ],
  },
  {
    problem: "Bubbling",
    description: "Bubbles on the surface of the cured film, sometimes very small.",
    images: [
      {
        src: "/images/troubleshooting/bubbling.jpg",
        width: 800,
        height: 462,
        alt: "White bathtub whose glossy coating is dotted with many small raised bubbles across the bottom and back wall.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Solvents evaporating too fast within the film.",
        solution:
          "Sand the surface and reapply at a lower surface or air temperature, or add a slower solvent to increase open time.",
      },
    ],
  },
  {
    problem: "Cracking",
    description: "The finish splits, with breaks through the film.",
    images: [
      {
        src: "/images/troubleshooting/cracking.jpg",
        width: 800,
        height: 533,
        alt: "Close-up of a glossy white bathtub floor split by long, branching cracks that run through the coating and divide it into large irregular sections.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Too many coats applied.",
        solution: "Remove the failed coating by sanding or the best method, and recoat with the proper system.",
      },
      {
        cause: "Physical damage from heat, cold, or exposure.",
        solution: "Remove the failed system and replace it with a coating that tolerates those conditions.",
      },
      {
        cause: "Stress or cracking in the rigid surface underneath.",
        solution: "Patch all cracks, sand smooth, then recoat.",
      },
      {
        cause: "A fresh water-based coating froze on the surface.",
        solution: "Recoat when the surface and air temperature are above the minimum recommended.",
      },
    ],
  },
  {
    problem: "Cratering",
    description: "Holes or deep depressions.",
    images: [
      {
        src: "/images/troubleshooting/cratering.jpg",
        width: 800,
        height: 533,
        alt: "Glossy white bathtub floor dotted with dozens of small round craters and pits in the coating, some clustered together, near the drain.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Bubbles breaking.",
        solution:
          "Sand the surface and reapply at a lower surface or air temperature, or add a slower solvent to increase open time.",
      },
      {
        cause: "Water or moisture in the spray equipment.",
        solution: "Sand smooth, fix the equipment problem, and flush the lines before recoating.",
      },
    ],
  },
  {
    problem: "Crazing",
    description: "Fine cracking in an overall pattern.",
    images: [
      {
        src: "/images/troubleshooting/crazing-patches.jpg",
        width: 800,
        height: 600,
        alt: "Glossy white bathtub floor with several patches of fine, branching hairline cracks spreading through the coating, while the surface around them stays smooth.",
        label: "in patches",
        illustration: true,
      },
      {
        src: "/images/troubleshooting/crazing-overall.jpg",
        width: 800,
        height: 533,
        alt: "Glossy white bathtub floor covered edge to edge in a fine web of tiny hairline cracks, while the surface stays smooth.",
        label: "across the whole tub",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Stress or cracking in the rigid surface underneath.",
        solution: "Patch all cracks, sand smooth, then recoat.",
      },
    ],
  },
  {
    problem: "Delamination",
    description: "The coating loses adhesion to the surface.",
    images: [
      {
        src: "/images/troubleshooting/delamination.jpg",
        width: 800,
        height: 800,
        alt: "White bathtub where the coating is peeling away in curled flakes near the drain and overflow, exposing the duller surface underneath.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "A topcoat that isn't compatible with the undercoat.",
        solution: "Remove the failed coating by sanding and recoat with an appropriate primer.",
      },
      {
        cause: "Dry spray, dirt, or dust.",
        solution: "Sand off the loose coating, clean the surface, and reapply.",
      },
    ],
  },
  {
    problem: "Dry spray",
    description: "Overspray: a rough, sandy finish on a sprayed coating.",
    // Shown on a light blue tub on purpose: on white, the sandy texture is
    // hard to see.
    images: [
      {
        src: "/images/troubleshooting/dry-spray.jpg",
        width: 800,
        height: 600,
        alt: "Light blue refinished bathtub with rough, sandy-textured patches on the back wall and floor next to smooth, glossy areas.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Spray particles partly drying before they reach the surface.",
        solution: "Sand smooth and adjust the solvent in the material.",
      },
    ],
  },
  {
    problem: "Flatting",
    description: "Loss of gloss.",
    // Two colors on purpose, so the difference is easy to see either way. The
    // white one has its labels drawn in; the caption repeats them because they
    // get too small to read on phones.
    images: [
      {
        src: "/images/troubleshooting/flatting-teal.jpg",
        width: 800,
        height: 600,
        alt: "Teal bathtub split down the middle: the left half is glossy with sharp reflections, the right half is dull and flat with no shine.",
        label: "on a colored tub (glossy on the left, flat on the right)",
        illustration: true,
      },
      {
        src: "/images/troubleshooting/flatting-white.jpg",
        width: 800,
        height: 450,
        alt: "White bathtub split down the middle, with arrows labeled Proper Finish (Glossy) pointing to the shiny left half and Loss of Gloss (Flatting) pointing to the dull right half.",
        label: "on a white tub (glossy on the left, flat on the right)",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "High humidity, damp rain, or fog.",
        solution: "Recoat when the surface is dry and the weather is right.",
      },
      {
        cause: "The wrong solvent, or too much thinning.",
        solution: "If adhesion is affected, remove the coating and recoat using the proper solvent.",
      },
    ],
  },
  {
    problem: "Framing",
    description: "Differences in coverage or color where rolled areas meet areas cut in by brush.",
    // The first picture exaggerates the brushed bands so the pattern is easy
    // to learn; the second shows how subtle it can be on a real job. The
    // captions say which is which, so the exaggeration isn't misleading.
    images: [
      {
        src: "/images/troubleshooting/framing-exaggerated.jpg",
        width: 800,
        height: 600,
        alt: "Bathtub split down the middle: the left half labeled Good has an even white gloss; the right half labeled Framing Issue has wide bands of visible brush strokes along every edge and corner, a different shade from the rolled middle.",
        label: "exaggerated so the brushed bands are easy to see",
        illustration: true,
      },
      {
        src: "/images/troubleshooting/framing-subtle.jpg",
        width: 800,
        height: 600,
        alt: "Bathtub split down the middle: the left half labeled Good has an even white gloss; the right half labeled Framing Issue is slightly grayer, with faint lighter bands along the edges where brushed areas meet the rolled middle.",
        label: "subtle, closer to how it often looks",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Uneven film build between the brush and roller work.",
        solution: "Recoat with a heavier wet film, or add another coat over the new work.",
      },
    ],
  },
  {
    problem: "Poor hiding",
    description: "A shadowy look in the topcoat.",
    images: [
      {
        src: "/images/troubleshooting/poor-hiding.jpg",
        width: 800,
        height: 450,
        alt: "Glossy white bathtub with cloudy gray patches showing through the topcoat across the floor and back wall, with a magnified close-up of one patch. A label reads: Poor Hiding, a shadowy look in the topcoat, where the underlying surface or previous color can still be seen.",
        label: "gray shadowing",
        illustration: true,
      },
      {
        // Same tub and spots as the Holidays picture, but coated too thinly
        // instead of missed, so the two problems are easy to compare.
        src: "/images/troubleshooting/poor-hiding-old-color.jpg",
        width: 800,
        height: 533,
        alt: "Glossy white bathtub where a faint pink haze from the old tub color shows through the new coating under the faucet, along the rim, and beside the drain.",
        label: "an old tub color showing through",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Film too thin, or not enough coats.",
        solution: "Recoat with a heavier wet film.",
      },
      {
        cause: "Material not mixed well.",
        solution: "Stir thoroughly before use and keep it mixed during application.",
      },
    ],
  },
  {
    problem: "Holidays",
    description: "Missed areas.",
    images: [
      {
        src: "/images/troubleshooting/holidays.jpg",
        width: 800,
        height: 533,
        alt: "Glossy white bathtub with crisp-edged bare spots where the new coating was missed, showing the old pink tub underneath: below the faucet, along the curve under the rim, and in a strip beside the drain.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "The film dries too fast because the surface is above 90 °F (32 °C).",
        solution: "Recoat or touch up.",
      },
    ],
  },
  {
    problem: "Lap marks",
    description: "Color or sheen differences where one freshly painted area overlaps another.",
    // Colored first, like Flatting: the bands are easier to see on color.
    images: [
      {
        src: "/images/troubleshooting/lap-marks-teal.jpg",
        width: 800,
        height: 600,
        alt: "Glossy teal bathtub with several parallel bands across the floor and back wall, each a slightly different shade, with visible lines where one pass overlaps the next.",
        label: "on a colored tub",
        illustration: true,
      },
      {
        src: "/images/troubleshooting/lap-marks-white.jpg",
        width: 800,
        height: 533,
        alt: "Glossy white bathtub with wide parallel bands across the floor and back wall, each a slightly different shade, with darker stripes where one pass overlaps the next.",
        label: "on a white tub",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "The first area dried before the overlap was made.",
        solution: "Work in smaller areas to shorten the time between overlaps.",
      },
    ],
  },
  {
    problem: "Mud cracking",
    description: "Surface cracking in a cross-hatched pattern.",
    // Mild first, then advanced: what a refinisher is likely to notice first,
    // then what it turns into if left alone.
    images: [
      {
        src: "/images/troubleshooting/mud-cracking-mild.jpg",
        width: 800,
        height: 436,
        alt: "Close-up of a glossy white bathtub rim where the coating has split into a network of small flat plates with narrow gaps between them, a few edges just starting to lift.",
        label: "mild to moderate",
        illustration: true,
      },
      {
        src: "/images/troubleshooting/mud-cracking-advanced.jpg",
        width: 800,
        height: 436,
        alt: "Close-up of a white bathtub rim where a thick coating has split into plates like dried mud, with deep gaps between them and edges curling up and lifting off.",
        label: "advanced",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Hot, dry weather, or too much film build.",
        solution:
          "Sand the coating smooth and recoat at the proper mil thickness. In hot weather, add a slower solvent to slow drying.",
      },
    ],
  },
  {
    problem: "Orange peel",
    description: "A fine, pebbled texture on a sprayed surface.",
    // Colored first, like Flatting and Lap marks: on a darker color the
    // dimples show in the shadows too, so they stay visible at phone size.
    images: [
      {
        src: "/images/troubleshooting/orange-peel-teal.jpg",
        width: 800,
        height: 600,
        alt: "Glossy teal bathtub whose whole sprayed surface has an even, fine dimpled texture like the skin of an orange, visible in both the reflections and the shaded areas.",
        label: "on a colored tub",
        illustration: true,
      },
      {
        src: "/images/troubleshooting/orange-peel-white.jpg",
        width: 800,
        height: 533,
        alt: "Glossy white bathtub whose whole sprayed surface has an even, fine dimpled texture like the skin of an orange, most visible in the reflections.",
        label: "on a white tub",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "The coating isn't atomizing enough.",
        solution:
          "Sand smooth and recoat. Adjust the solvent and the equipment for better flow and leveling.",
      },
    ],
  },
  {
    problem: "Pinholing",
    description: "Small holes in the film.",
    images: [
      {
        src: "/images/troubleshooting/pinholing.jpg",
        width: 800,
        height: 600,
        alt: "Glossy white bathtub with many tiny, sharp, dark pinprick holes scattered across the floor and back wall, much smaller than craters.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Solvent moving through the film after it has begun to set.",
        solution:
          "Pinholes all over mean the coating was applied and cured in poor conditions. Apply a mist or thin coat to fill the holes, then a full wet coat.",
      },
    ],
  },
  {
    problem: "Runs",
    description: "Heavy buildup on the coating's surface: sags or curtains.",
    // Mild first, then heavy, like Mud cracking.
    images: [
      {
        src: "/images/troubleshooting/runs-slight.jpg",
        width: 800,
        height: 533,
        alt: "Smooth, glossy white bathtub with a few thin, faint drips of coating running down the back wall from a slightly heavier band near the top, each ending in a tiny bead.",
        label: "a few drips",
        illustration: true,
      },
      {
        src: "/images/troubleshooting/runs-severe.jpg",
        width: 800,
        height: 533,
        alt: "Bright, glossy white bathtub with a thick, wavy band of built-up coating across the back wall and many long drips hanging from it, each ending in a bead.",
        label: "heavy sags and curtains",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Too much film build.",
        solution: "Sand the runs smooth and recoat.",
      },
      {
        cause: "Too much thinning.",
        solution: "Sand the runs smooth and recoat with properly thinned material.",
      },
    ],
  },
  {
    problem: "Solvent trap",
    description: "Solvent left trapped inside the paint film.",
    // Shows softness (a fingerprint dent), not blisters, so it isn't mistaken
    // for Bubbling. Matches the fix below: "Test hardness."
    images: [
      {
        src: "/images/troubleshooting/solvent-trap.jpg",
        width: 800,
        height: 600,
        alt: "Close-up of a thick, glossy white bathtub coating that is still soft: a fingerprint dent stays pressed into the surface, the coating ripples slightly around it, and a few small blisters sit nearby.",
        label: "still soft, so a fingerprint stays pressed in",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Too much film build.",
        solution:
          "Test hardness and adhesion. If the film won't adhere or cure, remove and recoat. Try force drying to drive the solvent out.",
      },
    ],
  },
  {
    problem: "Wrinkling",
    description: "A surface that looks like the skin of a prune.",
    images: [
      {
        src: "/images/troubleshooting/wrinkling.jpg",
        width: 800,
        height: 600,
        alt: "Glossy white bathtub wall with a patch of coating puckered into soft, rounded folds like the skin of a prune, with no cracks in the film.",
        illustration: true,
      },
    ],
    fixes: [
      {
        cause: "Too much film build.",
        solution: "Sand smooth and recoat at the proper film thickness.",
      },
      {
        cause: "Slow drying conditions.",
        solution: "Sand smooth and recoat when drying conditions are right.",
      },
    ],
  },
];

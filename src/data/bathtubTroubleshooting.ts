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
}

export const bathtubTroubleshooting: TroubleshootingIssue[] = [
  {
    problem: "Alligatoring",
    description: "A cross-hatch pattern of surface imperfections.",
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

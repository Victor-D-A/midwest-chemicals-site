// How to apply Multi-Spec, rebuilt from the "Multi-Spec Instructions" page on
// the company's current website (/refinishing/multi-spec-instructions).
//
// Draft: pending owner review. Interior walls and floors are included as the
// old page has them; the owners are deciding whether to keep promoting walls.
// Still open with the owners:
// - the garbled end of the old step 6 ("spray over excising painted surfaces
//   with primering"), written here as "spray over walls already painted",
// - whether floors need the primer or the clear coat (the old page only
//   covers cleaning them),
// - safety guidance (the old page had none).
// Cleaner names follow the Cleaners page; the old page called them
// "The Etch 4000" and "Premier Cleaner 5000".

export interface InstructionStep {
  title: string;
  text: string;
  // A step that helps but can be skipped, shown with an "Optional" label.
  optional?: boolean;
}

export const multiSpecEquipment =
  "An HVLP gun and turbine with at least 80 cfm at 4 PSI. Any air spray equipment that meets these minimums works.";

export const multiSpecSteps: InstructionStep[] = [
  {
    title: "Clean",
    text: "Inside bathtubs and sinks, clean the glass-like surface with Glass Etch. Clean ceramic tile, floors, and countertops with Premiere Cleaner.",
  },
  {
    title: "Sand",
    text: "Lightly sand the surface with 220-grit sandpaper.",
  },
  {
    title: "Tack",
    text: "Wipe the surface with a tack cloth to pick up dust before priming.",
  },
  {
    title: "Prime",
    text: "Prime with XL Aerospace primer and let it dry 30 minutes before spraying the color. Not required, but it helps.",
    optional: true,
  },
  {
    title: "Spray the color",
    text: "Spray 2 to 3 even coats of Multi-Spec until you get the look you want.",
  },
  {
    title: "Smooth",
    text: "For a smoother finish, sand the Multi-Spec with 600-grit sandpaper before the clear coat.",
    optional: true,
  },
  {
    title: "Clear coat",
    text: "Wait 45 minutes to 1 hour, then spray 2 to 3 even coats of one of our industrial clear coats. Bathtubs, sinks, ceramic tile, and countertops must be clear coated, because they take physical and chemical wear.",
  },
];

// Cabinets and interior walls skip two of the steps above. The page labels
// this note "Cabinets and interior walls:", so the text doesn't repeat it.
export const multiSpecCabinetNote =
  "Skip the XL Aerospace primer and the clear coat. Interior walls can use a latex primer instead, or you can spray over walls that are already painted.";

import { useId } from "react";
import "./CountertopPreview.css";
import { countertopScene as scene } from "../data/countertopScene";
import type { ColorSwatch } from "../data/customColors";

// [horizontal, vertical] for each copy in a 2 × 2 block: 1 is as-is, -1 is
// mirrored. Mirroring around the block's center puts each copy in its corner.
const mirrors = [
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
] as const;

interface CountertopPreviewProps {
  color: ColorSwatch;
}

// Shows the chosen color on the counter in a kitchen photo, in three layers:
//   1. the photo itself, for everything around the counter;
//   2. each counter surface filled with the color's swatch, repeated like tiles;
//   3. the photo again, cut to the counter and brightened, "multiplied" over
//      the color. White parts change nothing and shadows darken it, so the
//      color picks up the photo's lighting instead of looking pasted on.
export default function CountertopPreview({ color }: CountertopPreviewProps) {
  // SVG ids must be unique on the page and can't contain the punctuation
  // React puts in useId values, so keep only letters, numbers, - and _.
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const tile = scene.tileSize;

  return (
    <svg
      className="countertop-preview"
      viewBox={`0 0 ${scene.width} ${scene.height}`}
      role="img"
      aria-label={`${color.name} on a kitchen countertop (computer-generated preview)`}
    >
      <defs>
        {scene.surfaces.map((surface, i) => (
          <g key={i}>
            {/* Four copies of the swatch, three of them mirrored, so every
                edge meets its own reflection. Swatch photos are a little
                brighter on one side, and plain repeats would show seams. */}
            <pattern
              id={`${id}-texture-${i}`}
              patternUnits="userSpaceOnUse"
              width={tile * 2}
              height={tile * 2}
              patternTransform={`scale(1 ${surface.squash})`}
            >
              {mirrors.map(([flipX, flipY]) => (
                <image
                  key={`${flipX}${flipY}`}
                  href={color.image}
                  width={tile}
                  height={tile}
                  preserveAspectRatio="none"
                  transform={`translate(${tile} ${tile}) scale(${flipX} ${flipY}) translate(${-tile} ${-tile})`}
                />
              ))}
            </pattern>
            <clipPath id={`${id}-clip-${i}`}>
              <polygon points={surface.points} />
            </clipPath>
          </g>
        ))}
        <filter id={`${id}-lift`}>
          <feComponentTransfer>
            <feFuncR type="linear" slope={scene.lift} />
            <feFuncG type="linear" slope={scene.lift} />
            <feFuncB type="linear" slope={scene.lift} />
          </feComponentTransfer>
        </filter>
      </defs>

      <image href={scene.photo} width={scene.width} height={scene.height} />

      {scene.surfaces.map((surface, i) => (
        <g key={i}>
          <polygon points={surface.points} fill={`url(#${id}-texture-${i})`} />
          <image
            className="countertop-preview__lighting"
            href={scene.photo}
            width={scene.width}
            height={scene.height}
            clipPath={`url(#${id}-clip-${i})`}
            filter={`url(#${id}-lift)`}
          />
        </g>
      ))}
    </svg>
  );
}

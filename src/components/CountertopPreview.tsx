import { useId } from "react";
import "./CountertopPreview.css";
import type { CountertopScene } from "../data/countertopScenes";
import type { ColorSwatch } from "../data/customColors";

// The swatch photos are 300px squares, and some have a thin dark line along
// an edge, so trim this many pixels off every side before tiling.
const SWATCH = 300;
const TRIM = 6;

// How strongly the half-shifted copy of the swatch covers the tile, from
// the tile's edge (offset 0) through its middle (0.5) to the other edge (1).
// Each entry is [offset, opacity], with opacity from 0 (hidden) to 1 (fully
// covering). The shifted copy is what hides the seams at the edges, and its
// own seam runs through the middle.
const FADE: [offset: number, opacity: number][] = [
  [0, 1],
  [0.5, 0],
  [1, 1],
];

interface CountertopPreviewProps {
  color: ColorSwatch;
  // Which photo to show the color in (the bathroom or the kitchen).
  scene: CountertopScene;
}

// Shows the chosen color on the counter in a photo, in three layers:
//   1. the photo itself, for everything around the counter;
//   2. each counter surface filled with the color's swatch, repeated like tiles;
//   3. the photo again, cut to the counter, blurred if the scene asks for it,
//      and brightened, then "multiplied" over the color. White parts change
//      nothing and shadows darken it, so the color picks up the photo's
//      lighting instead of looking pasted on.
export default function CountertopPreview({ color, scene }: CountertopPreviewProps) {
  // SVG ids must be unique on the page and can't contain the punctuation
  // React puts in useId values, so keep only letters, numbers, - and _.
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const tile = scene.tileSize;
  const half = tile / 2;

  // One copy of the swatch with its top-left corner at (x, y). The viewBox
  // shows only the middle of the photo, trimming its edges.
  const swatch = (x: number, y: number) => (
    <svg
      key={`${x},${y}`}
      x={x}
      y={y}
      width={tile}
      height={tile}
      viewBox={`${TRIM} ${TRIM} ${SWATCH - TRIM * 2} ${SWATCH - TRIM * 2}`}
      preserveAspectRatio="none"
    >
      <image href={color.image} width={SWATCH} height={SWATCH} />
    </svg>
  );

  return (
    <svg
      className="countertop-preview"
      viewBox={`0 0 ${scene.width} ${scene.height}`}
      role="img"
      aria-label={`${color.name} on a ${scene.room} countertop (computer-generated preview)`}
    >
      <defs>
        {/* Fades for blending a half-shifted copy of the swatch over itself,
            one left to right and one top to bottom. Opacity, not color,
            decides how much shows ("alpha" masks). */}
        {(["x", "y"] as const).map((axis) => (
          <g key={axis}>
            <linearGradient
              id={`${id}-fade-${axis}-gradient`}
              x1={0}
              y1={0}
              x2={axis === "x" ? 1 : 0}
              y2={axis === "y" ? 1 : 0}
            >
              {FADE.map(([offset, opacity]) => (
                <stop key={offset} offset={offset} stopColor="white" stopOpacity={opacity} />
              ))}
            </linearGradient>
            <mask
              id={`${id}-fade-${axis}`}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={tile}
              height={tile}
              style={{ maskType: "alpha" }}
            >
              <rect width={tile} height={tile} fill={`url(#${id}-fade-${axis}-gradient)`} />
            </mask>
          </g>
        ))}

        {scene.surfaces.map((surface, i) => (
          <g key={i}>
            {/* A seamless tile, repeated without mirroring (mirrored tiles
                made symmetrical blots where four copies met). The swatch
                is blended with copies of itself shifted half a tile: those
                copies line up at the tile's edges, so they cover the seams,
                and fade out toward the middle, where their own seams are.
                First left/right, then the same again top/bottom. */}
            <pattern
              id={`${id}-texture-${i}`}
              patternUnits="userSpaceOnUse"
              width={tile}
              height={tile}
              patternTransform={`scale(1 ${surface.squash})`}
            >
              <g>
                {swatch(0, 0)}
                <g mask={`url(#${id}-fade-x)`}>
                  {swatch(-half, 0)}
                  {swatch(half, 0)}
                </g>
              </g>
              <g mask={`url(#${id}-fade-y)`}>
                {swatch(0, -half)}
                {swatch(0, half)}
                <g mask={`url(#${id}-fade-x)`}>
                  {swatch(-half, -half)}
                  {swatch(half, -half)}
                  {swatch(-half, half)}
                  {swatch(half, half)}
                </g>
              </g>
            </pattern>
            <clipPath id={`${id}-clip-${i}`}>
              <polygon points={surface.points} />
            </clipPath>
            {/* A mask keeps what's white and hides what's black, so each
                hole (sink, faucet) shows the photo instead of the color. */}
            {surface.holes && (
              <mask
                id={`${id}-holes-${i}`}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={scene.width}
                height={scene.height}
              >
                <rect width={scene.width} height={scene.height} fill="white" />
                {surface.holes.map((hole) => (
                  <polygon
                    key={hole}
                    points={hole}
                    fill="black"
                  />
                ))}
              </mask>
            )}
          </g>
        ))}
        <filter
          id={`${id}-lift`}
          filterUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={scene.width}
          height={scene.height}
        >
          {/* The photo arrives already cut to one counter surface, so a blur
              only mixes counter with counter; the clear area around it
              thins the edges instead of darkening them. Setting every pixel
              back to fully solid afterward undoes that thinning, because the
              colors are kept apart from their opacity at this step. */}
          {scene.lightingBlur > 0 && <feGaussianBlur stdDeviation={scene.lightingBlur} />}
          <feComponentTransfer>
            <feFuncA type="linear" slope={0} intercept={1} />
          </feComponentTransfer>
          {/* Gray next: the photo's warm light would tint every color. */}
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="linear" slope={scene.lift} />
            <feFuncG type="linear" slope={scene.lift} />
            <feFuncB type="linear" slope={scene.lift} />
          </feComponentTransfer>
        </filter>
      </defs>

      <image href={scene.photo} width={scene.width} height={scene.height} />

      {scene.surfaces.map((surface, i) => (
        <g key={i} mask={surface.holes ? `url(#${id}-holes-${i})` : undefined}>
          <polygon points={surface.points} fill={`url(#${id}-texture-${i})`} />
          {/* Cut to the surface before the filter (so a blur sees only
              counter) and again after it (the filter fills the whole
              picture). */}
          <g className="countertop-preview__lighting" clipPath={`url(#${id}-clip-${i})`}>
            <g filter={`url(#${id}-lift)`}>
              <image
                href={scene.photo}
                width={scene.width}
                height={scene.height}
                clipPath={`url(#${id}-clip-${i})`}
              />
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}

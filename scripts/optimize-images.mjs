// Converts project images to optimized WebP at the exact card size, so every
// project card looks consistent in the grid.
//
// Usage:
//   node scripts/optimize-images.mjs <image> [more images...]
//   npm run optimize:images -- public/assets/projects/my-shot.png
//
// By default the image is cropped to fill 1000x650 (centered). If cropping
// would cut something important, pass --contain to fit the whole image and
// pad the sides with the theme background instead:
//   npm run optimize:images -- --contain public/assets/projects/my-shot.png
//
// Each input produces a sibling `.webp`; the original is left untouched so you
// can check the result before deleting it.

import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import path from 'node:path';

// Card dimensions used in src/components/Projects — keep in sync.
const CARD_WIDTH = 1000;
const CARD_HEIGHT = 650;
const THEME_BG = { r: 13, g: 13, b: 13 }; // #0D0D0D

const args = process.argv.slice(2);
const contain = args.includes('--contain');
const inputs = args.filter((a) => !a.startsWith('--'));

if (inputs.length === 0) {
  console.log('Usage: node scripts/optimize-images.mjs [--contain] <image> [more images...]');
  process.exit(0);
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

const resizeOptions = contain
  ? { fit: 'contain', background: THEME_BG }
  : { fit: 'cover', position: 'centre' };

for (const input of inputs) {
  const out = path.join(path.dirname(input), `${path.basename(input, path.extname(input))}.webp`);
  const before = (await stat(input)).size;
  await sharp(input)
    .resize(CARD_WIDTH, CARD_HEIGHT, resizeOptions)
    .webp({ quality: 80 })
    .toFile(out);
  const after = (await stat(out)).size;
  const saved = (100 * (1 - after / before)).toFixed(0);
  console.log(`${out}  ${kb(before)} → ${kb(after)}  (${CARD_WIDTH}x${CARD_HEIGHT}, -${saved}%)`);
}

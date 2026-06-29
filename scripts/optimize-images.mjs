// Converts images to optimized WebP (max width 1000px).
//
// Usage:
//   node scripts/optimize-images.mjs <image> [more images...]
//   npm run optimize:images -- public/assets/projects/my-shot.png
//
// Each input produces a sibling `.webp`; the original is left untouched so you
// can delete it once you've checked the result.

import sharp from 'sharp';
import { stat } from 'node:fs/promises';
import path from 'node:path';

const inputs = process.argv.slice(2);

if (inputs.length === 0) {
  console.log('Usage: node scripts/optimize-images.mjs <image> [more images...]');
  process.exit(0);
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

for (const input of inputs) {
  const out = path.join(path.dirname(input), `${path.basename(input, path.extname(input))}.webp`);
  const before = (await stat(input)).size;
  await sharp(input)
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);
  const after = (await stat(out)).size;
  const saved = (100 * (1 - after / before)).toFixed(0);
  console.log(`${out}  ${kb(before)} → ${kb(after)}  (-${saved}%)`);
}

import sharp from 'sharp';
import { stat } from 'node:fs/promises';

const jobs = [
  // Avatar is a transparent cutout → WebP keeps the alpha channel.
  { in: 'public/assets/avatar.png', out: 'public/assets/avatar.webp', width: 900, quality: 82 },
  // Decorative background, no transparency.
  { in: 'public/assets/bg_experience.png', out: 'public/assets/bg_experience.webp', width: 1467, quality: 72 },
];

// Social preview image (OG/Twitter): JPEG flattened on the theme background,
// since some scrapers (WhatsApp, etc.) don't render WebP.
await sharp('public/assets/avatar.png')
  .resize({ width: 600, withoutEnlargement: true })
  .flatten({ background: '#0D0D0D' })
  .jpeg({ quality: 82 })
  .toFile('public/assets/avatar-social.jpg');
console.log('public/assets/avatar-social.jpg created');

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

for (const job of jobs) {
  const before = (await stat(job.in)).size;
  await sharp(job.in)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(job.out);
  const after = (await stat(job.out)).size;
  const saved = (100 * (1 - after / before)).toFixed(0);
  console.log(`${job.out}  ${kb(before)} → ${kb(after)}  (-${saved}%)`);
}

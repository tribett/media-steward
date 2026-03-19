#!/usr/bin/env node
/**
 * Generates PNG icons from icon.svg for Chrome Web Store submission.
 *
 * Requires: sharp   (npm install -g sharp-cli  OR  npm install sharp)
 *
 * Usage:
 *   node generate-icons.js
 *
 * Or with ImageMagick (brew install imagemagick / apt install imagemagick):
 *   for size in 16 32 48 128; do
 *     convert -background none -resize ${size}x${size} icon.svg icon${size}.png
 *   done
 */

const path = require('path');
const fs   = require('fs');

const SIZES = [16, 32, 48, 128];

async function main() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    console.error('sharp not installed. Run: npm install sharp');
    console.error('');
    console.error('Alternatively, use ImageMagick:');
    console.error('  for size in 16 32 48 128; do');
    console.error('    convert -background none -resize ${size}x${size} icon.svg icon${size}.png');
    console.error('  done');
    process.exit(1);
  }

  const svg = fs.readFileSync(path.join(__dirname, 'icon.svg'));

  for (const size of SIZES) {
    const out = path.join(__dirname, `icon${size}.png`);
    await sharp(svg).resize(size, size).png().toFile(out);
    console.log(`✓ icon${size}.png`);
  }

  console.log('\nDone. Icons ready for Chrome Web Store submission.');
}

main().catch((e) => { console.error(e); process.exit(1); });

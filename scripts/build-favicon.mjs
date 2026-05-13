// Render src/app/icon.svg to a proper multi-size favicon.ico (PNG-in-ICO).
// Usage: node scripts/build-favicon.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const svgPath = path.join(root, "src/app/icon.svg");
const outIco = path.join(root, "src/app/favicon.ico");
const outPng512 = path.join(root, "public/images/favicon.png");
const outPng192 = path.join(root, "public/images/icon-192.png");
const outPng512Manifest = path.join(root, "public/images/icon-512.png");
const outPublicFavicon = path.join(root, "public/favicon.ico");

const svg = await readFile(svgPath);

async function render(size) {
  return sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();
}

const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map(render));

// Build ICO file with PNG-encoded frames (PNG-in-ICO is widely supported since Vista).
function buildIco(frames) {
  const count = frames.length;
  const headerSize = 6 + 16 * count;
  const totalSize =
    headerSize + frames.reduce((a, f) => a + f.png.length, 0);
  const buf = Buffer.alloc(totalSize);
  buf.writeUInt16LE(0, 0); // reserved
  buf.writeUInt16LE(1, 2); // type = icon
  buf.writeUInt16LE(count, 4);
  let offset = headerSize;
  frames.forEach((f, i) => {
    const dirOff = 6 + i * 16;
    buf.writeUInt8(f.size >= 256 ? 0 : f.size, dirOff); // width (0 = 256)
    buf.writeUInt8(f.size >= 256 ? 0 : f.size, dirOff + 1); // height
    buf.writeUInt8(0, dirOff + 2); // color count
    buf.writeUInt8(0, dirOff + 3); // reserved
    buf.writeUInt16LE(1, dirOff + 4); // planes
    buf.writeUInt16LE(32, dirOff + 6); // bpp
    buf.writeUInt32LE(f.png.length, dirOff + 8); // size
    buf.writeUInt32LE(offset, dirOff + 12); // offset
    f.png.copy(buf, offset);
    offset += f.png.length;
  });
  return buf;
}

const frames = sizes.map((size, i) => ({ size, png: pngs[i] }));
const ico = buildIco(frames);

await writeFile(outIco, ico);
await writeFile(outPublicFavicon, ico);

// PNG variants for manifest + OG fallbacks
await writeFile(outPng512, await sharp(svg, { density: 1024 }).resize(512, 512).png().toBuffer());
await writeFile(outPng192, await sharp(svg, { density: 384 }).resize(192, 192).png().toBuffer());
await writeFile(outPng512Manifest, await sharp(svg, { density: 1024 }).resize(512, 512).png().toBuffer());

console.log("✓ favicon.ico (16/32/48) + manifest PNGs regenerated from icon.svg");

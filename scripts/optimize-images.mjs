import sharp from 'sharp';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

const PUBLIC = path.resolve('public');

const targets = [
  { file: 'images/profile.webp', maxWidth: 384, quality: 75 },
  { file: 'images/buku.webp', maxWidth: 600, quality: 65 },
  { file: 'images/trashlab.webp', maxWidth: 420, quality: 72 },
  { file: 'images/diabetes.webp', maxWidth: 450, quality: 72 },
  { file: 'certificates/coding-camp-2025-completion.webp', maxWidth: 600, quality: 70 },
  { file: 'certificates/coding-camp-2025-best-capstone.webp', maxWidth: 600, quality: 70 },
  { file: 'certificates/belajarpengembanganmachinelearning-1.webp', maxWidth: 600, quality: 70 },
  { file: 'certificates/sertifikat_course_319_4265038_080625125027-1.webp', maxWidth: 600, quality: 70 },
  { file: 'certificates/belajarfundamentalpemrosesandata-1.webp', maxWidth: 600, quality: 70 },
  { file: 'certificates/sertifikat_course_555_4265038_020225083715-1.webp', maxWidth: 600, quality: 70 },
];

for (const { file, maxWidth, quality } of targets) {
  const filePath = path.join(PUBLIC, file);
  try {
    // Read entire file into memory to release file handle
    const inputBuffer = await readFile(filePath);
    const beforeSize = inputBuffer.length;
    const meta = await sharp(inputBuffer).metadata();

    const pipeline = meta.width > maxWidth
      ? sharp(inputBuffer).resize({ width: maxWidth, withoutEnlargement: true })
      : sharp(inputBuffer);

    const outputBuffer = await pipeline.webp({ quality }).toBuffer();

    if (outputBuffer.length < beforeSize) {
      // Overwrite using writeFile (doesn't need unlink first)
      await writeFile(filePath, outputBuffer);
      const saved = ((1 - outputBuffer.length / beforeSize) * 100).toFixed(1);
      console.log(`✓ ${file}: ${(beforeSize/1024).toFixed(1)} KiB → ${(outputBuffer.length/1024).toFixed(1)} KiB (-${saved}%) [${meta.width}x${meta.height} → ${Math.min(meta.width, maxWidth)}px]`);
    } else {
      console.log(`⏭ ${file}: already optimal (${(beforeSize/1024).toFixed(1)} KiB)`);
    }
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}

console.log('\nDone!');

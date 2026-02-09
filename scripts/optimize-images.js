import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const imageDir = 'src/assets/images';

async function optimizeImages() {
  const files = await readdir(imageDir);
  const imageFiles = files.filter(f =>
    f.endsWith('.png') || f.endsWith('.PNG') || f.endsWith('.webp')
  );

  console.log(`Found ${imageFiles.length} images to optimize...`);

  for (const file of imageFiles) {
    const inputPath = join(imageDir, file);
    const outputPath = inputPath;

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      console.log(`Optimizing ${file} (${metadata.width}x${metadata.height})...`);

      // Convert to WebP format with quality 80 for better compression
      const outputFile = file.replace(/\.(png|PNG)$/, '.webp');
      const finalOutputPath = join(imageDir, outputFile);

      await image
        .webp({ quality: 80, effort: 6 })
        .toFile(finalOutputPath);

      const stats = await import('fs').then(fs => fs.promises.stat(finalOutputPath));
      console.log(`  ✓ Saved ${outputFile} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    } catch (err) {
      console.error(`  ✗ Error optimizing ${file}:`, err.message);
    }
  }

  console.log('\nOptimization complete!');
}

optimizeImages().catch(console.error);

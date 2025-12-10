import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = ['work1.png', 'work2.png', 'work3.png'];

async function optimizeImages() {
    for (const image of images) {
        const inputPath = join(__dirname, 'public', image);
        const outputPath = join(__dirname, 'public', image.replace('.png', '.webp'));

        console.log(`Optimizing ${image}...`);

        await sharp(inputPath)
            .webp({ quality: 85 }) // High quality WebP
            .toFile(outputPath);

        console.log(`✓ Created ${image.replace('.png', '.webp')}`);
    }

    console.log('\n✅ All images optimized!');
    console.log('Update your Work.jsx to use .webp instead of .png');
}

optimizeImages().catch(console.error);

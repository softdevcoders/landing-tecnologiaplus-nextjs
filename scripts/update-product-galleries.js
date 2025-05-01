/**
 * Script to update all MobileProductGallery components to use useRef instead of useState
 * This script implements performance optimizations for better React code
 * 
 * Run with: node scripts/update-product-galleries.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// Root directory of ver-mas components
const ROOT_DIR = path.join(__dirname, '../src/app/ver-mas');

// Helper function to find all MobileProductGallery.jsx files recursively
async function findMobileGalleryFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      files = [...files, ...(await findMobileGalleryFiles(fullPath))];
    } else if (entry.name === 'MobileProductGallery.jsx') {
      // Skip the already optimized versions
      if (
        !fullPath.includes('llamador-v2b') && 
        !fullPath.includes('llamador-v2n')
      ) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

// Function to update a single file
async function updateFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    const content = await readFileAsync(filePath, 'utf8');
    
    // Check if this file has already been updated
    if (content.includes('// Reference to swiper - more efficient than using state')) {
      console.log(`  Already optimized, skipping.`);
      return;
    }
    
    // Apply transformations
    let updated = content;
    
    // Update imports
    updated = updated.replace(
      /import\s+{\s*useState(?:[^}]*)}\s+from\s+['"]react['"]/,
      `import { useRef } from 'react'`
    );
    
    // Remove Thumbs from swiper imports
    updated = updated.replace(
      /import\s+{\s*([^}]*),\s*Thumbs\s*([^}]*)}\s+from\s+['"]swiper\/modules['"]/,
      `import { $1$2 } from 'swiper/modules'`
    );
    
    // Extract image array and move it outside the component
    const imagesArrayMatch = updated.match(/const\s+images\s*=\s*\[([\s\S]*?)\];/);
    if (imagesArrayMatch) {
      const imagesArrayContent = imagesArrayMatch[1];
      
      // Remove the original array
      updated = updated.replace(/const\s+images\s*=\s*\[([\s\S]*?)\];/, '');
      
      // Add the constant outside the component
      updated = updated.replace(
        /function\s+MobileProductGallery/, 
        `// Main gallery images - don't modify these constants during rendering
const GALLERY_IMAGES = [${imagesArrayContent}];

// Helper function to generate safe keys from URLs
const generateImageKey = (url, index) => {
  if (!url) return \`img-\${index}\`;
  return \`img-\${url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."))}\`;
};

function MobileProductGallery`
      );
    }
    
    // Replace useState with useRef
    updated = updated.replace(
      /const\s+\[thumbsSwiper,\s*setThumbsSwiper\]\s*=\s*useState\(null\);/,
      `// Reference to swiper - more efficient than using state
  const swiperRef = useRef(null);`
    );
    
    // Update Swiper component
    updated = updated.replace(
      /<Swiper\s+([^>]*?)modules=\{(?:[^}]*?)\}\s+([^>]*?)thumbs=\{\{\s*swiper:\s*thumbsSwiper\s*\}\}\s+([^>]*?)>/,
      `<Swiper
        ref={swiperRef}
        $1modules={[Navigation, Pagination]} $2$3>`
    );
    
    // Simplify the Swiper if the above pattern doesn't match
    if (!updated.includes('ref={swiperRef}')) {
      updated = updated.replace(
        /<Swiper\s+([^>]*?)>/,
        `<Swiper
        ref={swiperRef}
        $1>`
      );
    }
    
    // Update map function, replacing images with GALLERY_IMAGES
    updated = updated.replace(
      /{images\.map\(\(img,\s*index\)\s*=>\s*\(/g,
      '{GALLERY_IMAGES.map((img, index) => ('
    );
    
    // Update keys in SwiperSlide
    updated = updated.replace(
      /<SwiperSlide\s+key=\{(?:index|`[^`]*?`)\}>/g,
      '<SwiperSlide key={generateImageKey(img, index)}>'
    );
    
    // Update comments
    updated = updated.replace(
      /{\s*\/\*\s*Carrusel\s*principal\s*\*\/\s*}/g,
      '{/* Main Swiper */}'
    );
    
    updated = updated.replace(
      /{\s*\/\*\s*Información\s*del\s*producto\s*\*\/\s*}/g,
      '{/* Product information */}'
    );
    
    // Write the updated content back to the file
    await writeFileAsync(filePath, updated, 'utf8');
    console.log(`  Updated successfully!`);
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Main function
async function main() {
  console.log('Finding MobileProductGallery files...');
  const files = await findMobileGalleryFiles(ROOT_DIR);
  
  console.log(`Found ${files.length} files to update`);
  
  for (const file of files) {
    await updateFile(file);
  }
  
  console.log('All files have been processed!');
}

main().catch(console.error); 
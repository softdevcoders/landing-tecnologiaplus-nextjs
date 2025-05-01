/**
 * Script to verify MobileProductGallery components for common bugs
 * 
 * Run with: node scripts/verify-gallery-components.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

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
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to check a single file for common issues
async function verifyFile(filePath) {
  try {
    console.log(`Verifying: ${filePath}`);
    const content = await readFileAsync(filePath, 'utf8');
    
    const issues = [];
    
    // Check for undefined variable usage (img)
    if (content.includes('key={generateImageKey(img,') && !content.includes('{GALLERY_IMAGES.map((img, index)')) {
      issues.push('❌ Using undefined "img" variable in generateImageKey');
    }
    
    // Check for missing generateImageKey function
    if (content.includes('generateImageKey(') && !content.includes('const generateImageKey = (')) {
      issues.push('❌ Using generateImageKey function without defining it');
    }
    
    // Check for proper refs
    if (content.includes('<Swiper') && !content.includes('ref={swiperRef}')) {
      issues.push('❌ Swiper component missing ref attribute');
    }
    
    // Check for correctly using SLIDE_IMAGES or GALLERY_IMAGES
    if (content.includes('const SLIDE_IMAGES = [') && content.includes('SLIDE_IMAGES.map((image,') && 
        (content.includes('key={generateImageKey(img,') || content.includes('key={`img-${index}`}'))) {
      issues.push('❌ Using SLIDE_IMAGES.map but trying to access as "img" instead of "image"');
    }
    
    // Report results
    if (issues.length === 0) {
      console.log('  ✓ No issues found');
    } else {
      console.log(`  Found ${issues.length} issues:`);
      issues.forEach(issue => console.log(`    ${issue}`));
    }
    
    return issues.length;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return 1; // Consider an error as an issue
  }
}

// Main function
async function main() {
  console.log('Finding MobileProductGallery files...');
  const files = await findMobileGalleryFiles(ROOT_DIR);
  
  console.log(`Found ${files.length} files to verify`);
  
  let totalIssues = 0;
  
  for (const file of files) {
    const issuesCount = await verifyFile(file);
    totalIssues += issuesCount;
  }
  
  console.log('\nVerification complete!');
  console.log(`Total issues found: ${totalIssues}`);
  
  if (totalIssues === 0) {
    console.log('✅ All components look good!');
  } else {
    console.log('⚠️ Some components need fixing. Check the logs above for details.');
  }
}

main().catch(console.error); 
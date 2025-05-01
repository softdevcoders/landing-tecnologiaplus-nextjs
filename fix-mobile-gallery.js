/**
 * This Node.js script fixes common issues with MobileProductGallery components:
 * 1. Adds navigation={true} to all Swiper components 
 * 2. Fixes key issues in map functions
 * 3. Ensures proper imports
 * 
 * Run with: node fix-mobile-gallery.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all MobileProductGallery components
const mobileGalleryFiles = glob.sync('src/app/ver-mas/**/MobileProductGallery.jsx');

mobileGalleryFiles.forEach(filePath => {
  console.log(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file already has navigation={true}
  const hasNavigation = content.includes('navigation={true}');
  
  // Fix 1: Add navigation={true} if missing
  if (!hasNavigation) {
    content = content.replace(
      /pagination={.*?}\s*loop={true}/g,
      match => `${match}\n        navigation={true}`
    );
  }
  
  // Fix 2: Fix keys in SwiperSlide components
  content = content.replace(
    /<SwiperSlide key={index}>/g,
    '<SwiperSlide key={`slide-${img.substring(img.lastIndexOf(\'/\') + 1, img.lastIndexOf(\'.\'))}`}>'
  );
  
  // Fix 3: Ensure proper imports
  if (!content.includes("import \"swiper/css/navigation\"")) {
    content = content.replace(
      "import \"swiper/css\";",
      "import \"swiper/css\";\nimport \"swiper/css/navigation\";"
    );
  }
  
  // Fix 4: Remove thumbs property if navigation is added and thumbsSwiper isn't used elsewhere
  if (content.includes('thumbs={{ swiper: thumbsSwiper }}') && 
      !content.includes('onSwiper={setThumbsSwiper}')) {
    content = content.replace(
      /thumbs={{ swiper: thumbsSwiper }}/g,
      ''
    );
  }
  
  // Fix 5: Remove preloadImages if present
  content = content.replace(/preloadImages={.*?}/g, '');
  
  // Write changes back to file
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
});

console.log('All MobileProductGallery components have been updated!'); 
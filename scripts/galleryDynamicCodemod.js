const fs = require('fs');
const path = require('path');
const { useState, useEffect } = require('react');

// Recursively walk directory to find all ProductGallerySelected.jsx files
function walk(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const file of files) {
    const full = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.isFile() && file.name === 'ProductGallerySelected.jsx') {
      results.push(full);
    }
  }
  return results;
}

function transform(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // We always attempt to improve existing code, even if dynamic already present

  let replaced = content;

  // Ensure we have dynamic import line
  if (!replaced.includes('next/dynamic')) {
    replaced = replaced.replace(/(import[^;]+react[^;]+;)/, `$1\nimport dynamic from \"next/dynamic\";`);
  }

  // Remove static hero import and variable
  replaced = replaced.replace(/import\s+ProductHeroStatic[^;]+;/, '');
  replaced = replaced.replace(/const\s+FIRST_IMG[^;]+;/, '');

  // Remove JSX for ProductHeroStatic
  replaced = replaced.replace(/<ProductHeroStatic[\s\S]*?\/ProductHeroStatic>/, '');

  // Simplify return: render gallery immediately
  replaced = replaced.replace(/return\s*\([^]*?id="gallery-trigger"[^]*?\);/, 'return ( isMobile ? <MobileProductGallery /> : <ProductGallery />);');

  // Remove deferGallery state logic by setting true at init
  replaced = replaced.replace(/const \[deferGallery[^;]+;/, 'const [deferGallery, setDeferGallery] = useState(true);');

  // Replace entire useEffect block with simpler resize-only version
  replaced = replaced.replace(/useEffect\([\s\S]*?\}, \[\]\);/, `useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1025);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);`);

  // Remove idleCallback variable remnants
  replaced = replaced.replace(/const idleCb[\s\S]*?;/g, '');

  // Remove deferGallery state and occurrences
  replaced = replaced.replace(/const \[deferGallery[^;]+;/, '');
  replaced = replaced.replace(/deferGallery ?&& ?\(?[\s\S]*?\)/g, '');

  // Simplify return statement to direct gallery render
  replaced = replaced.replace(/return[\s\S]*?;/, 'return isMobile ? <MobileProductGallery /> : <ProductGallery />;');

  // Remove comments leftovers
  replaced = replaced.replace(/\/\*[^]*?\*\//g, '');

  // Remove empty lines duplicates
  replaced = replaced.replace(/\n{3,}/g, '\n\n');

  // Remove IntersectionObserver block
  replaced = replaced.replace(/const\s+io\s*=\s*new\s+IntersectionObserver[\s\S]*?io\.observe\([^)]*\);[\s\S]*?}/, '// removed IO block');

  // Inject idle callback defer if not present
  if (!replaced.includes('requestIdleCallback')) {
    replaced = replaced.replace(/useEffect\([^)]*\)\s*=>\s*{/, match => `${match}\n    // Defer gallery hydration when browser is idle\n    const idleCb = window.requestIdleCallback ? window.requestIdleCallback(() => setDeferGallery(true), { timeout: 2000 }) : setTimeout(() => setDeferGallery(true), 0);`);

    // Ensure cleanup includes cancel
    replaced = replaced.replace(/return\s*\([^)]*\)\s*=>\s*{/, match => `${match}\n      window.cancelIdleCallback && window.cancelIdleCallback(idleCb);`);
  }

  // Remove old MobileProductGallery and ProductGallery imports if still static
  replaced = replaced
    .replace(/import\s+MobileProductGallery[^;]+;/, '')
    .replace(/import\s+ProductGallery[^;]+;/, '');

  // Overwrite function body with clean version
  replaced = replaced.replace(/export default function ProductGallerySelected\(\)[\s\S]*?}$/m, `export default function ProductGallerySelected() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 1025);
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <MobileProductGallery /> : <ProductGallery />;
  }`);

  fs.writeFileSync(filePath, replaced, 'utf8');
  console.log('✔ transformed', filePath);
}

const targetDir = path.join(__dirname, '..', 'src');
const files = walk(targetDir);
files.forEach(transform);

console.log(`Converted ${files.length} ProductGallerySelected.jsx files.`); 
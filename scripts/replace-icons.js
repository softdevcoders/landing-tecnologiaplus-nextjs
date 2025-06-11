const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();

// Función para reemplazar las importaciones y usos de react-icons
function replaceIconsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Reemplazar importaciones
  content = content.replace(/import\s*{\s*IoIosArrowBack\s*}\s*from\s*["']react-icons\/io["'];?/g, 
    `import { ArrowBack } from "@/components/ui/icons";`);
  
  content = content.replace(/import\s*{\s*IoIosArrowForward\s*}\s*from\s*["']react-icons\/io["'];?/g,
    `import { ArrowForward } from "@/components/ui/icons";`);
  
  content = content.replace(/import\s*{\s*IoIosArrowUp\s*}\s*from\s*["']react-icons\/io["'];?/g,
    `import { ArrowUp } from "@/components/ui/icons";`);
  
  content = content.replace(/import\s*{\s*IoIosArrowDown\s*}\s*from\s*["']react-icons\/io["'];?/g,
    `import { ArrowDown } from "@/components/ui/icons";`);
  
  content = content.replace(/import\s*{\s*FaWhatsapp\s*}\s*from\s*["']react-icons\/fa["'];?/g,
    `import { Whatsapp } from "@/components/ui/icons";`);
  
  content = content.replace(/import\s*{\s*FaCheck\s*}\s*from\s*["']react-icons\/fa["'];?/g,
    `import { Check } from "@/components/ui/icons";`);
  
  content = content.replace(/import\s*{\s*HiPhone\s*}\s*from\s*["']react-icons\/hi2["'];?/g,
    `import { Phone } from "@/components/ui/icons";`);

  // Reemplazar usos
  content = content.replace(/<ArrowBack/g, '<ArrowBack');
  content = content.replace(/<ArrowForward/g, '<ArrowForward');
  content = content.replace(/<ArrowUp/g, '<ArrowUp');
  content = content.replace(/<ArrowDown/g, '<ArrowDown');
  content = content.replace(/<Whatsapp/g, '<Whatsapp');
  content = content.replace(/<Check/g, '<Check');
  content = content.replace(/<Phone/g, '<Phone');

  fs.writeFileSync(filePath, content);
}

// Función para buscar archivos recursivamente
function findFiles(dir, pattern) {
  let results = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !filePath.includes('node_modules') && !filePath.includes('.next')) {
      results = results.concat(findFiles(filePath, pattern));
    } else if (pattern.test(file)) {
      results.push(filePath);
    }
  });

  return results;
}

// Buscar todos los archivos .jsx
const jsxFiles = findFiles(rootDir, /\.(jsx?)$/);

// Reemplazar iconos en cada archivo
jsxFiles.forEach(file => {
  try {
    replaceIconsInFile(file);
    console.log(`Processed: ${file}`);
  } catch (error) {
    console.error(`Error processing ${file}:`, error);
  }
});

console.log('Icon replacement complete!'); 
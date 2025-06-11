const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Función para reemplazar las importaciones y usos de react-icons
function replaceIconsInFile(filePath) {
  console.log('Processing:', filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Reemplazar importaciones
  content = content.replace(
    /import\s*{[\s\n]*(?:IoIosArrowBack|IoIosArrowDown|IoIosArrowForward|IoIosArrowUp)[\s\n]*(?:,[\s\n]*(?:IoIosArrowBack|IoIosArrowDown|IoIosArrowForward|IoIosArrowUp)[\s\n]*)*}\s*from\s*["']react-icons\/io["'];?/g,
    `import {
  ArrowBack,
  ArrowDown,
  ArrowForward,
  ArrowUp
} from "@/components/ui/icons";`
  );

  // Reemplazar usos de los iconos
  content = content.replace(/IoIosArrowBack/g, 'ArrowBack');
  content = content.replace(/IoIosArrowDown/g, 'ArrowDown');
  content = content.replace(/IoIosArrowForward/g, 'ArrowForward');
  content = content.replace(/IoIosArrowUp/g, 'ArrowUp');

  fs.writeFileSync(filePath, content);
}

// Encontrar todos los archivos ProductGallery.jsx
const files = glob.sync('src/**/ProductGallery.jsx');

// Procesar cada archivo
files.forEach(file => {
  replaceIconsInFile(file);
}); 
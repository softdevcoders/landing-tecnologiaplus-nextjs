import fs from 'fs';
import path from 'path';

export const htmlReader = (filePath) => {
  const absolutePath = path.join(process.cwd(), 'src', 'data', 'blog', filePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }
  
  const htmlContent = fs.readFileSync(absolutePath, 'utf-8');

  return htmlContent;
}

export const sortByDate = (array) => {
  return array.sort((a, b) => {
      return new Date(b.fecha_creacion) - new Date(a.fecha_creacion);
  });
}

export const cleanText = (text, tagsToRemove = null) => {
  if (!text) return '';

  // Quitar emojis
  const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

  let clean = text.replace(emojiRegex, '')
                  .replace(/&#[^;]+;/g, ' ')
                  .replace(/&nbsp;/g, ' ');

  // Eliminar etiquetas HTML específicas o todas
  if (tagsToRemove && Array.isArray(tagsToRemove)) {
    const tagsRegex = new RegExp(`<\\/?(${tagsToRemove.join('|')})[^>]*>`, 'gi');
    clean = clean.replace(tagsRegex, ' ');
  } else {
    clean = clean.replace(/<[^>]+>/g, ' ');
  }

  // Decodificar entidades HTML
  const txt = typeof document !== 'undefined' ? document.createElement('textarea') : null;
  if (txt) {
    txt.innerHTML = clean;
    clean = txt.value;
  }

  clean = clean.replace(/\s+/g, ' ').trim();

  return clean;
};


export const truncateAltText = (text, maxLength = 100) => {
  const cleanedText = cleanText(text);
  if (cleanedText.length <= maxLength) {
    return cleanedText;
  }
  
  // Reservar espacio para "..."
  const maxTextLength = maxLength - 3;
  
  // Truncar en el último espacio antes del límite para evitar cortar palabras
  const truncated = cleanedText.substring(0, maxTextLength).split(' ').slice(0, -1).join(' ');
  
  // Verificar que el resultado final no exceda el límite
  const finalText = truncated + '...';
  return finalText.length <= maxLength ? finalText : truncated;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const month = months[date.getMonth()]; 
  const day = date.getDate(); 
  const year = date.getFullYear(); 

  return `${month} ${day}, ${year}`;
}
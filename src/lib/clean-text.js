// export const cleanText = (text, tagsToRemove = null) => {
//   if (!text) return '';

//   // Quitar emojis
//   const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

//   let clean = text.replace(emojiRegex, '')
//                   .replace(/&#[^;]+;/g, ' ')
//                   .replace(/&nbsp;/g, ' ');

//   // Eliminar etiquetas HTML específicas o todas
//   if (tagsToRemove && Array.isArray(tagsToRemove)) {
//     const tagsRegex = new RegExp(`<\\/?(${tagsToRemove.join('|')})[^>]*>`, 'gi');
//     clean = clean.replace(tagsRegex, ' ');
//   } else {
//     clean = clean.replace(/<[^>]+>/g, ' ');
//   }

//   // Decodificar entidades HTML
//   const txt = typeof document !== 'undefined' ? document.createElement('textarea') : null;
//   if (txt) {
//     txt.innerHTML = clean;
//     clean = txt.value;
//   }

//   clean = clean.replace(/\s+/g, ' ').trim();

//   return clean;
// };

// /**
//  * Corta un texto asegurando que termine en una oración completa
//  * @param {string} text - Texto a cortar
//  * @param {number} maxLength - Longitud máxima deseada
//  * @returns {string} Texto cortado en una oración completa
//  */
// export const truncateToCompleteSentence = (text, maxLength = 160) => {
//   if (!text || text.length <= maxLength) return text;

//   // Primero limpiamos el texto
//   const cleanedText = cleanText(text);
  
//   // Si el texto limpio es más corto que maxLength, lo devolvemos
//   if (cleanedText.length <= maxLength) return cleanedText;

//   // Encontrar el último punto dentro del límite
//   const truncated = cleanedText.substring(0, maxLength);
//   const lastPeriod = truncated.lastIndexOf('.');
//   const lastExclamation = truncated.lastIndexOf('!');
//   const lastQuestion = truncated.lastIndexOf('?');

//   // Encontrar el último signo de puntuación
//   const lastPunctuation = Math.max(lastPeriod, lastExclamation, lastQuestion);

//   // Si encontramos un signo de puntuación, cortamos ahí
//   if (lastPunctuation > 0) {
//     return cleanedText.substring(0, lastPunctuation + 1).trim();
//   }

//   // Si no hay puntuación, buscamos el último espacio
//   const lastSpace = truncated.lastIndexOf(' ');
//   if (lastSpace > 0) {
//     return cleanedText.substring(0, lastSpace).trim() + '...';
//   }

//   // Si no hay espacios, cortamos en maxLength
//   return truncated.trim() + '...';
// };

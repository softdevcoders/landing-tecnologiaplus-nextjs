// import { cleanText } from "@/lib/clean-text";

// export const truncateAltText = (text, maxLength = 100) => {
//   const cleanedText = cleanText(text);
//   if (cleanedText.length <= maxLength) {
//     return cleanedText;
//   }
  
//   // Reservar espacio para "..."
//   const maxTextLength = maxLength - 3;
  
//   // Truncar en el último espacio antes del límite para evitar cortar palabras
//   const truncated = cleanedText.substring(0, maxTextLength).split(' ').slice(0, -1).join(' ');
  
//   // Verificar que el resultado final no exceda el límite
//   const finalText = truncated + '...';
//   return finalText.length <= maxLength ? finalText : truncated;
// };

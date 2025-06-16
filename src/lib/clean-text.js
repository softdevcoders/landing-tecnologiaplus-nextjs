export const cleanText = (text, tagsToRemove = null) => {
  if (!text) return '';

  // Quitar emojis y caracteres potencialmente peligrosos
  const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;
  
  let clean = text
    // Eliminar emojis
    .replace(emojiRegex, '')
    // Eliminar scripts y eventos on*
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/g, '')
    // Sanitizar atributos src y href
    .replace(/src\s*=\s*"javascript:[^"]*"/gi, '')
    .replace(/href\s*=\s*"javascript:[^"]*"/gi, '')
    // Eliminar comentarios HTML que podrían contener scripts
    .replace(/<!--[\s\S]*?-->/g, '')
    // Convertir entidades HTML básicas
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    // Limpiar otros caracteres potencialmente peligrosos
    .replace(/&#[^;]+;/g, ' ')
    .replace(/&nbsp;/g, ' ');

  // Eliminar etiquetas HTML específicas o todas
  if (tagsToRemove && Array.isArray(tagsToRemove)) {
    const tagsRegex = new RegExp(`<\\/?(${tagsToRemove.join('|')})[^>]*>`, 'gi');
    clean = clean.replace(tagsRegex, ' ');
  } else {
    clean = clean.replace(/<[^>]+>/g, ' ');
  }

  // Eliminar múltiples espacios
  clean = clean.replace(/\s+/g, ' ').trim();

  return clean;
};

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

export const cleanText = (text) => {
  if (!text) return '';

  // Quitar emojis
  const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

  let clean = text.replace(emojiRegex, '')
                  .replace(/<[^>]+>/g, ' ')
                  .replace(/&#[^;]+;/g, ' ')
                  .replace(/&nbsp;/g, ' ');

  const txt = typeof document !== 'undefined' ? document.createElement('textarea') : null;
  if (txt) {
    txt.innerHTML = clean;
    clean = txt.value;
  }

  clean = clean.replace(/\s+/g, ' ').trim();

  return clean;
};

/**
 * Genera un alt text descriptivo para una imagen
 * @param {Object} image - Objeto de imagen
 * @param {number} index - Índice de la imagen
 * @param {string} productTitle - Título del producto
 * @param {string} selectedColor - Color seleccionado
 * @returns {string} Alt text descriptivo
 */
export const generateImageAlt = (image, index, productTitle = '', selectedColor = '') => {
  // Si la imagen ya tiene alt, usarlo
  if (image.alt && image.alt.trim()) {
    return image.alt;
  }

  // Construir alt text descriptivo
  let altText = '';
  
  if (productTitle) {
    altText += productTitle;
  }
  
  if (selectedColor) {
    altText += ` en color ${selectedColor}`;
  }
  
  if (index !== undefined) {
    altText += ` - Vista ${index + 1}`;
  }
  
  // Fallback si no hay información
  if (!altText.trim()) {
    altText = `Imagen del producto ${index !== undefined ? `${index + 1}` : ''}`;
  }
  
  return altText.trim();
};

/**
 * Genera un alt text para thumbnails
 * @param {Object} image - Objeto de imagen
 * @param {number} index - Índice de la imagen
 * @param {string} productTitle - Título del producto
 * @param {string} selectedColor - Color seleccionado
 * @returns {string} Alt text para thumbnail
 */
export const generateThumbnailAlt = (image, index, productTitle = '', selectedColor = '') => {
  const mainAlt = generateImageAlt(image, index, productTitle, selectedColor);
  return `Miniatura: ${mainAlt}`;
};

/**
 * Determina si una imagen debe cargarse con priority
 * @param {number} index - Índice de la imagen
 * @param {number} selectedIndex - Índice seleccionado
 * @param {number} maxPriority - Máximo número de imágenes con priority
 * @returns {boolean} Si debe usar priority
 */
export const shouldUsePriority = (index, selectedIndex = 0, maxPriority = 2) => {
  // Siempre dar priority a la imagen seleccionada
  if (index === selectedIndex) {
    return true;
  }
  
  // Dar priority a las primeras imágenes (típicamente la primera)
  return index < maxPriority;
};

/**
 * Genera un blur data URL simple para placeholder
 * @param {string} color - Color base para el blur (opcional)
 * @returns {string} Data URL del blur
 */
export const generateBlurDataURL = (color = '#f0f0f0') => {
  // Convertir color hex a RGB si es necesario
  const rgb = color.startsWith('#') ? hexToRgb(color) : color;
  
  // Crear un blur data URL simple
  return `data:image/svg+xml;base64,${btoa(
    `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${rgb || '#f0f0f0'}"/>
    </svg>`
  )}`;
};

/**
 * Convierte hex a RGB
 * @param {string} hex - Color en formato hex
 * @returns {string} Color en formato RGB
 */
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : '#f0f0f0';
};

/**
 * Optimiza el sizes attribute basado en el contexto
 * @param {string} context - Contexto de la imagen ('main', 'thumbnail')
 * @param {boolean} isMobile - Si es dispositivo móvil
 * @returns {string} Sizes optimizado
 */
export const getOptimizedSizes = (context = 'main', isMobile = false) => {
  switch (context) {
    case 'main':
      return isMobile 
        ? '100vw' 
        : '(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px';

    case 'color-selector':
      return isMobile 
        ? '60px' 
        : '(max-width: 768px) 60px, 95px';
    
    case 'thumbnail':
      return isMobile 
        ? '60px' 
        : '(max-width: 768px) 60px, 95px';
    
    case 'gallery-modal':
      return '(max-width: 479px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1399px) 25vw, 300px';
    
    default:
      return '100vw';
  }
}; 
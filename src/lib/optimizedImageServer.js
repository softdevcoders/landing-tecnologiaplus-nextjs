/**
 * Utilidades de optimización de imágenes para Server Components
 * Optimizado para SEO y redes sociales
 */

const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

/**
 * Genera variantes optimizadas de una imagen para diferentes plataformas
 * @param {string} imageId - ID de la imagen en Cloudinary
 * @returns {Object} URLs optimizadas para diferentes usos
 */
export function generateImageVariants(imageId) {
  if (!imageId) {
    // Usar el logo oficial de la empresa como fallback
    return {
      openGraph: LOGO_METADATA,
      twitterCard: LOGO_METADATA,
      articleHero: LOGO_METADATA,
      cardThumbnail: LOGO_METADATA
    };
  }

  const baseTransformations = "f_auto,q_auto,c_fill,g_auto";
  
  return {
    // OpenGraph (Facebook, WhatsApp, LinkedIn) - 1200x630 (ratio 1.91:1)
    openGraph: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_630/${imageId}`,
    
    // Twitter Card Large Image - 1200x628 (ratio 1.91:1)
    twitterCard: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_628/${imageId}`,
    
    // Imagen principal del artículo - 1200x675 (16:9 ratio)
    articleHero: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_675/${imageId}`,
    
    // Thumbnail para cards - 400x225 (16:9 ratio)
    cardThumbnail: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_400,h_225/${imageId}`,
    
    // Imagen original optimizada
    original: `${CLOUDINARY_BASE_URL}/${baseTransformations}/${imageId}`
  };
}

/**
 * Genera alt text optimizado para SEO
 * @param {string} title - Título del artículo/producto
 * @param {string} category - Categoría del contenido
 * @param {string} brand - Marca (opcional)
 * @returns {string} Alt text optimizado
 */
export function generateImageAltText(title, category, brand = "Tecnología Plus") {
  if (!title) return "Imagen de Tecnología Plus";
  
  // Limpiar título de caracteres HTML
  const cleanTitle = title.replace(/<[^>]*>/g, '').trim();
  
  if (category) {
    return `${cleanTitle} - ${category} | ${brand}`;
  }
  
  return `${cleanTitle} | ${brand}`;
}

/**
 * Genera sizes attribute optimizado para responsive images
 * @param {number} maxWidth - Ancho máximo esperado
 * @returns {string} Sizes attribute
 */
export function generateImageSizes(maxWidth = 1200) {
  return `(max-width: 768px) 100vw, (max-width: 1200px) 80vw, ${maxWidth}px`;
}

/**
 * Genera configuración completa de metadatos de imagen para OpenGraph
 * @param {string} imageId - ID de la imagen
 * @param {string} title - Título para alt text
 * @param {string} category - Categoría del contenido
 * @returns {Object} Configuración completa de imagen
 */
export function generateImageMetadata(imageId, title, category) {
  const variants = generateImageVariants(imageId);
  const altText = generateImageAltText(title, category);
  
  return {
    openGraph: {
      url: variants.openGraph,
      width: 1200,
      height: 630,
      alt: altText,
      type: 'image/jpeg',
    },
    twitter: {
      url: variants.twitterCard,
      width: 1200,
      height: 628,
      alt: altText,
      type: 'image/jpeg',
    },
    article: {
      url: variants.articleHero,
      width: 1200,
      height: 675,
      alt: altText,
    }
  };
}

/**
 * Genera datos estructurados de imagen para Schema.org
 * @param {string} imageId - ID de la imagen
 * @param {string} title - Título de marketing
 * @param {string} description - Descripción de marketing
 * @returns {Object} Structured data para Schema.org
 */
export function generateImageStructuredData(imageId, title, description) {
  const variants = generateImageVariants(imageId);
  
  return {
    "@type": "ImageObject",
    "url": variants.original,
    "width": 1200,
    "height": 675,
    "description": description || title, // Usar descripción de marketing o título como fallback
    "encodingFormat": "image/jpeg"
  };
} 
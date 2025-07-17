/**
 * Utilidades de optimización de imágenes para Server Components
 * Optimizado para SEO y redes sociales
 */

const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

// Fallback logo cuando no hay imagen específica
const FALLBACK_LOGO = {
  url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1747675231/website-v2/logos/so7xgqia3ntpj1hqlpsk.png",
  width: 192,
  height: 192,
  alt: "Logo de Tecnología Plus"
};

/**
 * Genera variantes optimizadas de una imagen para diferentes plataformas
 * @param {string} imageUrl - URL completa de la imagen
 * @param {string} title - Título para generar alt text  
 * @param {string} customAlt - Alt text personalizado (opcional)
 * @returns {Object} URLs optimizadas para diferentes usos con metadata completa
 */
export function generateOptimizedImageVariants(imageUrl, title, customAlt = null) {
  if (!imageUrl) {
    // Usar el logo oficial como fallback
    return {
      openGraph: { ...FALLBACK_LOGO },
      twitter: { ...FALLBACK_LOGO },
      articleHero: { ...FALLBACK_LOGO },
      thumbnail: { ...FALLBACK_LOGO }
    };
  }

  const baseTransformations = "f_auto,q_auto,c_fill,g_auto";
  
  // Generar alt text
  const altText = customAlt || generateImageAltText(title, "sistemas de autoservicio");
  
  return {
    // OpenGraph (Facebook, WhatsApp, LinkedIn) - 1200x630 (ratio 1.91:1)
    openGraph: {
      url: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_630/${imageUrl}`,
      width: 1200,
      height: 630,
      alt: altText
    },
    
    // Twitter Card Large Image - 1200x628 (ratio 1.91:1)
    twitter: {
      url: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_628/${imageUrl}`,
      width: 1200,
      height: 628,
      alt: altText
    },
    
    // Imagen principal del artículo - 1200x675 (16:9 ratio)
    articleHero: {
      url: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_675/${imageUrl}`,
      width: 1200,
      height: 675,
      alt: altText
    },
    
    // Thumbnail para cards - 400x225 (16:9 ratio)
    thumbnail: {
      url: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_400,h_225/${imageUrl}`,
      width: 400,
      height: 225,
      alt: altText
    }
  };
}

/**
 * Versión legacy - mantener compatibilidad
 * @param {string} imageId - ID de la imagen en Cloudinary
 * @returns {Object} URLs optimizadas para diferentes usos
 */
export function generateImageVariants(imageId) {
  if (!imageId) {
    return {
      openGraph: FALLBACK_LOGO.url,
      twitterCard: FALLBACK_LOGO.url,
      articleHero: FALLBACK_LOGO.url,
      cardThumbnail: FALLBACK_LOGO.url
    };
  }

  const baseTransformations = "f_auto,q_auto,c_fill,g_auto";
  
  return {
    openGraph: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_630/${imageId}`,
    twitterCard: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_628/${imageId}`,
    articleHero: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_1200,h_675/${imageId}`,
    cardThumbnail: `${CLOUDINARY_BASE_URL}/${baseTransformations},w_400,h_225/${imageId}`,
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
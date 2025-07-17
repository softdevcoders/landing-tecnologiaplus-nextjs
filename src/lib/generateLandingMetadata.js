/**
 * Generador de metadatos optimizados para Landing Pages
 * Mejora automáticamente las imágenes para SEO y redes sociales
 */

import { generateOptimizedImageVariants } from "./optimizedImageServer";
import { cleanText } from "./clean-text";

// URL base para canonical URLs
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecnologiaplus.com';

// Logo optimizado para metadatos
const LOGO_OPTIMIZED = {
  url: `${BASE_URL}/android-chrome-512x512.png`,
  width: 512,
  height: 512,
  alt: "Logo de Tecnología Plus"
};

/**
 * Mejora los metadatos de una landing page con imágenes optimizadas
 * @param {Object} originalMetadata - Metadatos originales de la landing
 * @param {Object} options - Opciones de personalización
 * @returns {Object} Metadatos mejorados
 */
export function generateLandingMetadata(originalMetadata, options = {}) {
  const {
    primaryImage = null,
    productImages = [],
    useProductImage = true,
    generateAltText = true,
    category = "Sistemas de Autoservicio"
  } = options;

  // Limpiar textos de HTML
  const cleanTitle = cleanText(originalMetadata.title?.absolute || originalMetadata.title);
  const cleanDescription = cleanText(originalMetadata.description);

  // Determinar la imagen principal
  let mainImage = primaryImage;
  
  // Si no hay imagen principal pero hay imágenes de producto, usar la primera
  if (!mainImage && productImages.length > 0 && useProductImage) {
    mainImage = productImages[0];
  }

  // Generar variantes optimizadas de imagen
  let optimizedImages = null;
  if (mainImage) {
    optimizedImages = generateOptimizedImageVariants(
      mainImage, 
      cleanTitle,
      generateAltText ? `${cleanTitle} - ${category} | Tecnología Plus` : null
    );
  }

  // Configurar imágenes para OpenGraph
  const openGraphImages = [];
  if (optimizedImages) {
    openGraphImages.push({
      url: optimizedImages.openGraph.url,
      width: optimizedImages.openGraph.width,
      height: optimizedImages.openGraph.height,
      alt: optimizedImages.openGraph.alt
    });
  } else {
    // Fallback al logo si no hay imagen principal
    openGraphImages.push(LOGO_OPTIMIZED);
  }

  // Configurar imágenes para Twitter
  const twitterImages = [];
  if (optimizedImages) {
    twitterImages.push({
      url: optimizedImages.twitter.url,
      width: optimizedImages.twitter.width,
      height: optimizedImages.twitter.height,
      alt: optimizedImages.twitter.alt
    });
  } else {
    // Fallback al logo si no hay imagen principal
    twitterImages.push(LOGO_OPTIMIZED);
  }

  // Generar metadatos mejorados
  return {
    ...originalMetadata,
    title: {
      absolute: cleanTitle
    },
    description: cleanDescription,
    openGraph: {
      ...originalMetadata.openGraph,
      title: {
        absolute: cleanTitle
      },
      description: cleanDescription,
      images: openGraphImages,
      type: "website"
    },
    twitter: {
      ...originalMetadata.twitter,
      title: {
        absolute: cleanTitle
      },
      description: cleanDescription,
      images: twitterImages,
      card: optimizedImages ? "summary_large_image" : "summary"
    }
  };
}

/**
 * Extrae las imágenes principales de las secciones de una landing
 * @param {Array} galleryImages - Array de URLs de imágenes de galería
 * @param {String} heroImage - URL de imagen hero (opcional)
 * @returns {Array} Array de URLs de imágenes ordenadas por relevancia
 */
export function extractLandingImages(galleryImages = [], heroImage = null) {
  const images = [];
  
  // Añadir imagen hero si existe
  if (heroImage) {
    images.push(heroImage);
  }
  
  // Añadir imágenes de galería
  if (Array.isArray(galleryImages) && galleryImages.length > 0) {
    images.push(...galleryImages);
  }
  
  // Eliminar duplicados y devolver hasta 5 imágenes
  return [...new Set(images)].slice(0, 5);
}

/**
 * Genera datos para schema.org específicamente para landing pages
 * @param {Object} metadata - Metadatos de la landing
 * @param {Object} productInfo - Información del producto (opcional)
 * @returns {Object} Datos estructurados para el componente schema
 */
export function generateLandingSchemaData(metadata, productInfo = null) {
  const cleanTitle = cleanText(metadata.title?.absolute || metadata.title);
  const cleanDescription = cleanText(metadata.description);
  
  const schemaData = {
    pageTitle: cleanTitle,
    pageDescription: cleanDescription,
    pageUrl: metadata.alternates?.canonical || metadata.openGraph?.url,
    keywords: Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords].filter(Boolean)
  };

  // Si hay información de producto, incluirla
  if (productInfo) {
    schemaData.productData = {
      name: cleanText(productInfo.name || cleanTitle),
      description: cleanText(productInfo.description || cleanDescription),
      category: productInfo.category || "Sistemas de Autoservicio"
    };
  }

  return schemaData;
}

/**
 * Helper para generar alt text optimizado para SEO
 * @param {String} productName - Nombre del producto
 * @param {String} category - Categoría del producto
 * @param {String} context - Contexto adicional (ej: "galería", "características")
 * @returns {String} Alt text optimizado
 */
export function generateSEOAltText(productName, category = "sistemas de autoservicio", context = "") {
  const baseAlt = `${productName} - ${category}`;
  const contextText = context ? ` ${context}` : "";
  const brandSuffix = " | Tecnología Plus";
  
  return cleanText(`${baseAlt}${contextText}${brandSuffix}`);
}

/**
 * Mejora las imágenes en componentes existentes para SEO
 * @param {Array} images - Array de objetos imagen con src y alt
 * @param {String} productName - Nombre del producto para generar alt text
 * @param {String} category - Categoría del producto
 * @returns {Array} Array de imágenes con URLs y alt text optimizados
 */
export function optimizeComponentImages(images, productName, category = "sistemas de autoservicio") {
  return images.map((image, index) => {
    // Generar variantes optimizadas
    const optimized = generateOptimizedImageVariants(
      image.src || image.url,
      productName
    );
    
    // Generar alt text si no existe o es genérico
    let altText = image.alt;
    if (!altText || altText.includes("Imagen") || altText.length < 10) {
      const context = index === 0 ? "imagen principal" : `imagen ${index + 1}`;
      altText = generateSEOAltText(productName, category, context);
    }
    
    return {
      ...image,
      src: optimized.thumbnail.url, // Usar thumbnail para listas/galerías
      alt: altText,
      optimized // Incluir todas las variantes por si se necesitan
    };
  });
} 
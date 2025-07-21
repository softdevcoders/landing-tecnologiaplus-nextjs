export const LOGO_METADATA = "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1747675231/website-v2/logos/so7xgqia3ntpj1hqlpsk.png"

export const SHOULD_ROBOTS_INDEX = process.env.SHOULD_ROBOTS_INDEX === 'true' ? true : false;

export const ROBOTS_CONFIG = {
  index: SHOULD_ROBOTS_INDEX,
  follow: SHOULD_ROBOTS_INDEX,
  googleBot: {
    index: SHOULD_ROBOTS_INDEX,
    follow: SHOULD_ROBOTS_INDEX,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
}

// Logo optimizado para metadatos (fallback cuando no hay imagen específica)
export const DEFAULT_LOGO_IMAGE = {
  url: LOGO_METADATA,
  width: 192,
  height: 192,
  alt: "Logo de Tecnología Plus"
};

// Información base de la empresa para metadatos
export const COMPANY_INFO = {
  name: "Tecnología Plus",
  siteName: "Tecnología Plus",
  locale: "es_ES",
  type: "website",
  description: "Fabricantes expertos en sistemas de autoservicio, turnos y gestión de filas para restaurantes, hospitales y centros comerciales.",
  logo: DEFAULT_LOGO_IMAGE
};

/**
 * Genera metadatos estandarizados para landing pages
 * @param {Object} config - Configuración específica de la landing
 * @returns {Object} Metadatos completos listos para exportar
 */
export function generateLandingMetadata(config) {
  const {
    title,
    description,
    keywords,
    url,
    image = null,
    category = "Sistemas de Autoservicio",
    productInfo = null
  } = config;

  let mainImage = null;

  if (typeof image === 'object' && image !== null) {
    mainImage = {
      ...image,
    }
  } else if (typeof image === 'string' && image !== null) {
    const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    mainImage = {
      url: `${CLOUDINARY_BASE_URL}/f_auto,q_auto,c_fill,g_auto,w_1200,h_630${image}`,
      width: 1200,
      height: 630,
      alt: title
    }
  } else {
    mainImage = {
      ...DEFAULT_LOGO_IMAGE,
      alt: title
    }
  }
  
  // Generar metadatos base
  const metadata = {
    title: {
      absolute: title,
    },
    description: description,
    keywords: keywords,
    robots: ROBOTS_CONFIG,
    alternates: {
      canonical: url,
    },
    // Metaetiqueta específica para imágenes en resultados de Google
    other: {
      image: mainImage.url,
      'image:width': mainImage.width,
      'image:height': mainImage.height,
      'image:alt': mainImage.alt,
    },
    openGraph: {
      title: {
        absolute: title,
      },
      description: description,
      siteName: COMPANY_INFO.siteName,
      url: url,
      locale: COMPANY_INFO.locale,
      type: COMPANY_INFO.type,
      images: [mainImage],
    },
    twitter: {
      title: {
        absolute: title,
      },
      description: description,
      siteName: COMPANY_INFO.siteName,
      url: url,
      locale: COMPANY_INFO.locale,
      type: COMPANY_INFO.type,
      images: {
        ...mainImage,
      },
      card: "summary",
    },
  };

  // Si hay información de producto, añadir datos adicionales
  if (productInfo) {
    metadata.productInfo = {
      name: productInfo.name || title,
      description: productInfo.description || description,
      category: category,
      images: image || []
    };
  }

  metadata.seoImages = {
    primary: mainImage,
    gallery: mainImage,
    category: category
  };

  return metadata;
}
import Script from 'next/script';

/**
 * SchemaOrg component to add JSON-LD structured data to web pages
 * Helps search engines better understand the content and provide rich results
 */
export default function SchemaOrg() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Tecnología Plus',
    'url': 'https://landing-tecnologiaplus-nextjs-dev.vercel.app',
    'logo': 'https://landing-tecnologiaplus-nextjs-dev.vercel.app/logo.png',
    'description': 'Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'Colombia',
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+57-XXX-XXX-XXXX',
      'contactType': 'customer service',
      'availableLanguage': 'Spanish'
    },
    'sameAs': [
      'https://www.facebook.com/tecnologiaplus',
      'https://www.youtube.com/channel/UCPho92vfQwC24X8Y3eI8Dvg',
      'https://www.tiktok.com/@tecnologiaplus'
    ]
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Llamador de Meseros Tecnología Plus',
    'description': 'Sistema de llamador de meseros para restaurantes y hoteles',
    'brand': {
      '@type': 'Brand',
      'name': 'Tecnología Plus'
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'COP',
      'availability': 'https://schema.org/InStock'
    }
  };

  return (
    <>
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
} 
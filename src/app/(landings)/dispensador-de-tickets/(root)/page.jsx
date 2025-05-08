// Importing components for different sections of the landing page
import DispensadorTiquetesBenefitsSection from "@/sections/dispensador-de-tickets/landing/components/BenefitsSection/DispensadorTiquetesBenefitsSection";
import DispensadorTiquetesClientsSection from "@/sections/dispensador-de-tickets/landing/components/ClientsSection/DispensadorTiquetesClientsSection";
import DispensadorTiquetesHeroSection from "@/sections/dispensador-de-tickets/landing/components/HeroSection/DispensadorTiquetesHeroSection";
import DispensadorTiquetesIndustriesSection from "@/sections/dispensador-de-tickets/landing/components/IndustriesSection/DispensadorTiquetesIndustriesSection";
import DispensadorTiquetesProductsSection from "@/sections/dispensador-de-tickets/landing/components/ProductsSection/DispensadorTiquetesProductsSection";
import DispensadorTiquetesRelatedProducts from "@/sections/dispensador-de-tickets/landing/components/RelatedProducts/DispensadorTiquetesRelatedProducts";

// Metadata for the page, including SEO and social sharing information
export const metadata = {
  title: "Dispensador de Tiquetes | Agiliza la Atención",
  description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets",
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/dispensador-de-tickets",
    title: "Dispensador de Tiquetes | Agiliza la Atención",
    description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
    siteName: "TecnologiaPlus",
    images: [
      {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/2_dccdnc.webp",
        width: 958,
        height: 747,
        alt: "Dispensador de tiquetes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dispensador de Tiquetes | Agiliza la Atención",
    description: "Mejora la experiencia de tus clientes con nuestro dispensador de tiquetes. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!",
  },
  other: {
    "article:publisher": "https://www.facebook.com/tecnologiapluscolombia",
    "article:modified_time": "2025-02-27T15:41:02+00:00",
  },
};

// Main landing page component
export default function DispensadorTiquetesLanding() {
  return (
    <>
      {/* Hero Section: Displays the main banner or introduction */}
      <DispensadorTiquetesHeroSection />

      {/* Clients Section: Highlights client testimonials or logos */}
      <DispensadorTiquetesClientsSection />

      {/* Products Section: Showcases the products related to ticket dispensers */}
      <DispensadorTiquetesProductsSection />

      {/* Benefits Section: Lists the benefits of using the product */}
      <DispensadorTiquetesBenefitsSection />

      {/* Industries Section: Displays industries where the product can be used */}
      <DispensadorTiquetesIndustriesSection />

      {/* Related Products Section: Suggests related products */}
      <DispensadorTiquetesRelatedProducts />
    </>
  );
}
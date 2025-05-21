// Importación de las secciones del landing page
import TurnoExpressBenefitsSection from "@/sections/turnero-turnoexpress/root/components/BenefitsSection/TurnoExpressBenefitsSection"; // Props: Ninguna
import TurnoExpressClientsSection from "@/sections/turnero-turnoexpress/root/components/ClientsSection/TurnoExpressClientsSection"; // Props: Ninguna
import TurnoExpressHeroSection from "@/sections/turnero-turnoexpress/root/components/HeroSection/TurnoExpressHeroSection"; // Props: Ninguna
import TurnoExpressIndustriesSection from "@/sections/turnero-turnoexpress/root/components/IndustriesSection/TurnoExpressIndustriesSection"; // Props: Ninguna
import TurnoExpressProductsSection from "@/sections/turnero-turnoexpress/root/components/ProductsSection/TurnoExpressProductsSection"; // Props: Ninguna
import TurnoExpressRelatedProducts from "@/sections/turnero-turnoexpress/root/components/RelatedProducts/TurnoExpressRelatedProducts"; // Props: Ninguna
import SecondaryTurnoExpressProductsSection from "@/sections/turnero-turnoexpress/root/components/SecondaryProductsSection/SecondaryTurnoExpressProductsSection"; // Props: Ninguna

// Metadatos para SEO y redes sociales
export const metadata = {
  title: "Turnero Digital: Agiliza y Organiza las Filas en tu negocio.",
  description:
    "Turnero digital: Somos fabricantes. Acelera la atención al cliente y moderniza tu negocio. ¡Solicita una asesoria ahora!",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero/",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Turnero Digital: Agiliza y Organiza las Filas en tu negocio.",
    description:
      "Turnero digital: Somos fabricantes. Acelera la atención al cliente y moderniza tu negocio. ¡Solicita una asesoria ahora!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/turnero/",
    siteName: "TecnologiaPlus",
    images: [
      {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/9_pl5ffb.webp",
        width: 1600,
        height: 600,
        alt: "pantallas de turnos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "article:publisher": "https://www.facebook.com/tecnologiapluscolombia",
    "article:modified_time": "2024-12-16T22:12:14+00:00",
  },
};

// Componente principal del landing page
export default function TurnoExpressLanding() {
  return (
    <>
      {/* Sección del héroe principal */}
      <TurnoExpressHeroSection />
      
      {/* Sección de clientes destacados */}
      <TurnoExpressClientsSection />
      
      {/* Sección de productos principales */}
      <TurnoExpressProductsSection />
      
      {/* Sección de beneficios del producto */}
      <TurnoExpressBenefitsSection />
      
      {/* Sección de productos secundarios */}
      <SecondaryTurnoExpressProductsSection />
      
      {/* Sección de industrias relacionadas */}
      <TurnoExpressIndustriesSection />
      
      {/* Sección de productos relacionados */}
      <TurnoExpressRelatedProducts />
    </>
  );
}
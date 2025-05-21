// Importación de componentes específicos de la página
import TurnoMasterBenefitsSection from "@/sections/sistema-de-turnos-turnomaster/components/BenefitsSection/TurnoMasterBenefitsSection";
import TurnoMasterClientsSection from "@/sections/sistema-de-turnos-turnomaster/components/ClientsSection/TurnoMasterClientsSection";
import TurnoMasterHeroSection from "@/sections/sistema-de-turnos-turnomaster/components/HeroSection/TurnoMasterHeroSection";
import TurnoMasterIndustriesSection from "@/sections/sistema-de-turnos-turnomaster/components/IndustriesSection/TurnoMasterIndustriesSection";
import TurnoMasterProductsSection from "@/sections/sistema-de-turnos-turnomaster/components/ProductsSection/TurnoMasterProductsSection";
import TurnoMasterRelatedProducts from "@/sections/sistema-de-turnos-turnomaster/components/RelatedProducts/TurnoMasterRelatedProducts";
import SecondaryTurnoMasterProductsSection from "@/sections/sistema-de-turnos-turnomaster/components/SecondaryProductsSection/SecondaryTurnoMasterProductsSection";

// Metadatos de la página
export const metadata = {
  title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
  description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/sistema-de-turnos/turnomaster",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
    description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/software-para-turnos/",
    siteName: "TecnologiaPlus",
    images: [
      {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/10_zozuzq.webp",
        width: 900,
        height: 514,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Turnos: Agiliza Organiza las Filas en tu negocio",
    description: "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera . ¡Solicita una asesoria ahora!",
  },
};

// Componente principal de la página
export default function TurnoMasterLanding() {
  return (
    <>
      {/* Sección de héroe: espera parámetros como título, subtítulo e imagen */}
      <TurnoMasterHeroSection />

      {/* Sección de clientes: espera una lista de clientes o testimonios */}
      <TurnoMasterClientsSection />

      {/* Sección de productos principales: espera una lista de productos destacados */}
      <TurnoMasterProductsSection />

      {/* Sección de beneficios: espera una lista de beneficios o características */}
      <TurnoMasterBenefitsSection />

      {/* Sección de productos secundarios: espera una lista de productos adicionales */}
      <SecondaryTurnoMasterProductsSection />

      {/* Sección de industrias: espera una lista de industrias o sectores */}
      <TurnoMasterIndustriesSection />

      {/* Sección de productos relacionados: espera una lista de productos relacionados */}
      <TurnoMasterRelatedProducts />
    </>
  );
}
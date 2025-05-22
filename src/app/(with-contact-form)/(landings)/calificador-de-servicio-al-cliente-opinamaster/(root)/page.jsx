// Importación de secciones específicas de la landing page
import getMetadata from "@/request/server/metadata/get-metadata";
import CalificadorBenefitsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/BenefitsSection/CalificadorBenefitsSection";
import CalificadorClientsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/ClientsSection/CalificadorClientsSection";
import CalificadorHeroSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/HeroSection/CalificadorHeroSection";
import CalificadorIndustriesSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/IndustriesSection/CalificadorIndustriesSection";
import CalificadorProductsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/ProductsSection/CalificadorProductsSection";
import CalificadorRelatedProducts from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/RelatedProducts/CalificadorRelatedProducts";
import SecondaryCalificadorProductsSection from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/SecondaryProductsSection/SecondaryCalificadorProductsSection";
import StepsSectionCalificador from "@/sections/calificador-de-servicio-al-cliente-opinamaster/landing/components/StepsSection/StepsSectionCalificador";

export async function generateMetadata() {
  const { 'calificador-de-servicio-al-cliente-opinamaster': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function CalificadorLanding() {
  // Datos estructurados (JSON-LD) para SEO
  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "WebPage",
  //   url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/calificador-de-servicios/",
  //   name: "Calificador de Servicios: Conoce la opinión real de tus clientes",
  //   description:
  //     "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.",
  //   image: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/1_spvfxt.webp",
  //   datePublished: "2020-08-21T01:24:34+00:00",
  //   dateModified: "2024-12-30T21:34:53+00:00",
  //   inLanguage: "es",
  //   publisher: {
  //     "@type": "Organization",
  //     name: "TecnologiaPlus",
  //     url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/",
  //     logo: {
  //       "@type": "ImageObject",
  //       url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/wp-content/uploads/2020/10/Logo-1a1.jpg",
  //     },
  //   },
  // };

  return (
    <>
      {/* Script para incluir datos estructurados en formato JSON-LD */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
      {/* Renderizado de las secciones de la landing page */}
      <CalificadorHeroSection />
      <CalificadorClientsSection />
      <CalificadorProductsSection />
      <CalificadorBenefitsSection />
      <SecondaryCalificadorProductsSection />
      <StepsSectionCalificador />
      <CalificadorIndustriesSection />
      <CalificadorRelatedProducts />
    </>
  );
}

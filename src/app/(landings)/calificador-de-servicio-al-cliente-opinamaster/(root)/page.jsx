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
import LandingPageSchema from "@/components/schema/LandingPageSchema";

export async function generateMetadata() {
  const { 'calificador-de-servicio-al-cliente-opinamaster': { root: metadata } } = getMetadata('landings');
  return metadata;
}

export default function CalificadorLanding() {
  const { 'calificador-de-servicio-al-cliente-opinamaster': { root: metadata } } = getMetadata('landings');

  return (
    <>
      {/* Schema.org optimizado para SEO usando datos centralizados */}
      {/* <LandingPageSchema
        pageTitle={metadata.title.absolute}
        pageDescription={metadata.description}
        pageUrl={metadata.alternates.canonical}
        keywords={Array.isArray(metadata.keywords) ? metadata.keywords : [metadata.keywords]}
        landingCategory="calificadorDeServicioAlClienteOpinamaster"
        primaryImage={metadata.seoImages?.primary}
        productImages={metadata.seoImages?.gallery || []}
      /> */}
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

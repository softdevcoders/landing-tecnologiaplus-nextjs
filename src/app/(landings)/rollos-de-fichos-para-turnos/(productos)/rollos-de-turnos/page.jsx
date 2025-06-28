import TechnicalSheet from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/TechnicalSheet/TechnicalSheet";
import TurnosRelatedProducts from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/RelatedProducts/TurnosRelatedProducts";
import HowItWorks from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/ProductGallery/ProductGallerySelected";
import TurnosClientsSection from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/ClientsSection/TurnosClientsSection";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'rollos-de-fichos-para-turnos': { 'rollos-de-turnos': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasRollosTurnos() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <TurnosClientsSection />
      <TurnosRelatedProducts />
    </>
  );
}
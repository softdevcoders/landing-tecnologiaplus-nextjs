import TechnicalSheet from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/TechnicalSheet/TechnicalSheet";
import TurnosRelatedProducts from "@/sections/rollos-de-fichos-para-turnos/landing/components/RelatedProducts/TurnosRelatedProducts";
import HowItWorks from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/ProductGallery/ProductGallerySelected";
import LogosSection from "@/sections/rollos-de-fichos-para-turnos/rollos-de-turnos/components/LogosSection/LogosSection";

export default function VerMasRollosTurnos() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <LogosSection />
      <TurnosRelatedProducts />
    </>
  );
}
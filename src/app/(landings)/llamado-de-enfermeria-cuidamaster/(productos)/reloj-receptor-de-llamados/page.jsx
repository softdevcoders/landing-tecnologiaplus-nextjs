// Importing components for the page
import LogosSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection"; // Logos section component
import TechnicalSheet from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/TechnicalSheet/TechnicalSheet"; // Technical sheet component
import HowItWorks from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/HowItWorks/HowItWorks"; // How it works section component
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts"; // Related products section component
import ProductGallerySelected from "@/sections/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados/components/ProductGallery/ProductGallerySelected"; // Product gallery component

// Metadata for the page
export const metadata = {
  title: "Reloj Receptor de Llamados: Atención Ágil en Enfermería",
  description:
    "Recibe alertas instantáneas y vibra mostrando el número de cama. Ideal para personal de salud en hospitales y hogares geriátricos. ¡Solicita asesoría!",
  keywords: ["Reloj receptor de llamados de enfermería"],
  openGraph: {
    title: "Reloj Receptor de Llamados: Atención Ágil en Enfermería",
    description:
      "Recibe alertas instantáneas y vibra mostrando el número de cama. Ideal para personal de salud en hospitales y hogares geriátricos. ¡Solicita asesoría!",
    url: "http://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria-cuidamaster/reloj-receptor-de-llamados",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reloj Receptor de Llamados: Atención Ágil en Enfermería",
    description:
      "Recibe alertas instantáneas y vibra mostrando el número de cama. Ideal para personal de salud en hospitales y hogares geriátricos. ¡Solicita asesoría!",
  },
};

// Main component for the page
export default function VerMasEnfermeriaRelojReceptor() {
  return (
    <>
      {/* Product gallery section */}
      <ProductGallerySelected />
      
      {/* Technical sheet section */}
      <TechnicalSheet />
      
      {/* How it works section */}
      <HowItWorks />
      
      {/* Logos section */}
      <LogosSection />
      
      {/* Related products section */}
      <EnfermeriaRelatedProducts />
    </>
  );
}
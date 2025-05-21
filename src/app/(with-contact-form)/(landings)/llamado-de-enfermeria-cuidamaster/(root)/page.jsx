// Section imports
import EnfermeriaBenefitsSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/BenefitsSection/EnfermeriaBenefitsSection";
import EnfermeriaClientsSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ClientsSection/EnfermeriaClientsSection";
import EnfermeriaHeroSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/HeroSection/EnfermeriaHeroSection";
import EnfermeriaIndustriesSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/IndustriesSection/EnfermeriaIndustriesSection";
import EnfermeriaProductsSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/ProductsSection/EnfermeriaProductsSection";
import EnfermeriaRelatedProducts from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/RelatedProducts/EnfermeriaRelatedProducts";
import EnfermeriaSecondaryProductsSection from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/SecondaryProductsSection/EnfermeriaSecondaryProductsSection";
import StepsSectionEnfermeria from "@/sections/llamado-de-enfermeria-cuidamaster/landing/components/StepsSection/StepsSectionEnfermeria";

// Metadata for the page
export const metadata = {
  title: "Llamado de Enfermería: Hacemos fácil la atención de tus pacientes",
  description: "Sistema de llamado de enfermería, somos fabricantes de bajo costo para modernizar y facilitar la atención de pacientes en el sector salud y geriátrico.",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/",
  },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamado-de-enfermeria/",
    siteName: "TecnologiaPlus",
    title: "Llamado de enfermería - TecnologiaPlus",
    description: "Llamadores de enfermería de largo alcance y alta resistencia. Sistema eficiente para llamar enfermeras. ¡Contáctanos hoy!",
    images: [
      {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/4_aggf31.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Llamado de enfermería - TecnologiaPlus",
    description: "Llamadores de enfermería de largo alcance y alta resistencia. Sistema eficiente para llamar enfermeras. ¡Contáctanos hoy!",
  },
};

// Main landing page component
export default function EnfermeriaLanding() {
  return (
    <>
      {/* Hero section */}
      <EnfermeriaHeroSection />
      
      {/* Clients section */}
      <EnfermeriaClientsSection />
      
      {/* Products section */}
      <EnfermeriaProductsSection />
      
      {/* Benefits section */}
      <EnfermeriaBenefitsSection />
      
      {/* Secondary products section */}
      <EnfermeriaSecondaryProductsSection />
      
      {/* Steps section */}
      <StepsSectionEnfermeria />
      
      {/* Industries section */}
      <EnfermeriaIndustriesSection />
      
      {/* Related products section */}
      <EnfermeriaRelatedProducts />
    </>
  );
}
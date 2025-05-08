// Importing sections for the landing page
import BenefitsSection from "@/sections/rollos-de-papel-termico/landing/components/BenefitsSection/BenefitsSection";
import ClientsSection from "@/sections/rollos-de-papel-termico/landing/components/ClientsSection/ClientsSection";
import HeroSection from "@/sections/rollos-de-papel-termico/landing/components/HeroSection/HeroSection";
import IndustriesSection from "@/sections/rollos-de-papel-termico/landing/components/IndustriesSection/IndustriesSection";
import ProductsSection from "@/sections/rollos-de-papel-termico/landing/components/ProductsSection/ProductsSection";
import RelatedProducts from "@/sections/rollos-de-papel-termico/landing/components/RelatedProducts/RelatedProducts";
import TechnicalDetails from "@/sections/rollos-de-papel-termico/landing/components/TechnicalDetails/TechnicalDetails";

// Metadata for the page
export const metadata = {
  title: "Rollos Térmicos: Somos fabricantes de alta calidad",
  description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  alternates: {
    canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Rollos Térmicos - Tecnología Plus",
    description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico/",
    siteName: "Tecnología Plus",
    images: [
      {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/8_obkppw.webp",
        width: 1200,
        height: 630,
        alt: "Rollos térmicos de alta calidad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rollos Térmicos - Tecnología Plus",
    description: "Rollos de papel térmico de alta calidad, durabilidad y precios bajos. ¡Compra ahora en Tecnología Plus!",
    images: ["https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/8_obkppw.webp"],
  },
};

// Main landing page component
export default function RollosTermicosLanding() {
  return (
    <>
      {/* HeroSection: Expects no props, renders the hero/banner section */}
      <HeroSection />
      
      {/* ClientsSection: Expects no props, displays client logos or testimonials */}
      <ClientsSection />
      
      {/* ProductsSection: Expects no props, showcases the product catalog */}
      <ProductsSection />
      
      {/* BenefitsSection: Expects no props, highlights the benefits of the product */}
      <BenefitsSection />
      
      {/* TechnicalDetails: Expects no props, provides technical specifications */}
      <TechnicalDetails />
      
      {/* IndustriesSection: Expects no props, lists industries that use the product */}
      <IndustriesSection />
      
      {/* RelatedProducts: Expects no props, displays related products */}
      <RelatedProducts />
    </>
  );
}

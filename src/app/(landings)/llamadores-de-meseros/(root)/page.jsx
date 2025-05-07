// Importación de componentes específicos de la página
import LlamadorMeserosBenefitsSection from "@/sections/llamadores-de-meseros/landing/components/BenefitsSection/LlamadorMeserosBenefitsSection"; // Props: { benefits: Array }
import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/landing/components/ClientsSection/LlamadorMeserosClientsSection"; // Props: { clients: Array }
import LlamadorMeserosHeroSection from "@/sections/llamadores-de-meseros/landing/components/HeroSection/LlamadorMeserosHeroSection"; // Props: { title: String, subtitle: String, image: String }
import LlamadorMeserosIndustriesSection from "@/sections/llamadores-de-meseros/landing/components/IndustriesSection/LlamadorMeserosIndustriesSection"; // Props: { industries: Array }
import LlamadorMeserosProductsSection from "@/sections/llamadores-de-meseros/landing/components/ProductsSection/LlamadorMeserosProductsSection"; // Props: { products: Array }
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/landing/components/RelatedProducts/LlamadorMeserosRelatedProducts"; // Props: { relatedProducts: Array }
import LlamadorMeserosSecondaryProductsSection from "@/sections/llamadores-de-meseros/landing/components/SecondaryProductsSection/LlamadorMeserosSecondaryProductsSection"; // Props: { secondaryProducts: Array }
import StepsSectionLlamadorMeseros from "@/sections/llamadores-de-meseros/landing/components/StepsSection/StepsSectionLlamadorMeseros"; // Props: { steps: Array }

// Metadatos de la página
export const metadata = {
  title: "Llamadores de Meseros: Hacemos Fácil la Atención de tus Clientes",
  description:
    "Facilita el servicio con nuestros llamadores de meseros inalámbricos. Agiliza la atención y mejora la experiencia del cliente. ¡Asesoría personalizada!",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamadores-de-meseros",
  },
  openGraph: {
    locale: "es_ES",
    type: "article",
    title: "Llamadores de Meseros: Hacemos Fácil la Atención de tus Clientes",
    description:
      "Facilita el servicio con nuestros llamadores de meseros inalámbricos. Agiliza la atención y mejora la experiencia del cliente. ¡Asesoría personalizada!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/llamadores-de-meseros",
    siteName: "TecnologiaPlus",
    images: [
      {
        url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743970202/5_jjo8ks.webp",
        width: 1600,
        height: 600,
        alt: "Llamadores de meseros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Llamadores de Meseros: Hacemos Fácil la Atención de tus Clientes",
    description:
      "Facilita el servicio con nuestros llamadores de meseros inalámbricos. Agiliza la atención y mejora la experiencia del cliente. ¡Asesoría personalizada!",
  },
  other: {
    "article:publisher": "https://www.facebook.com/tecnologiapluscolombia",
    "article:modified_time": "2025-02-27T15:50:15+00:00",
  },
};

// Componente principal de la página
export default function LlamadorMeserosLanding() {
  return (
    <>
      {/* Sección de héroe: muestra el título, subtítulo e imagen principal */}
      <LlamadorMeserosHeroSection />

      {/* Sección de clientes: lista de clientes destacados */}
      <LlamadorMeserosClientsSection />

      {/* Sección de productos principales */}
      <LlamadorMeserosProductsSection />

      {/* Sección de beneficios: muestra los beneficios del producto */}
      <LlamadorMeserosBenefitsSection />

      {/* Sección de pasos: describe los pasos para usar el producto */}
      <StepsSectionLlamadorMeseros />

      {/* Sección de productos secundarios */}
      <LlamadorMeserosSecondaryProductsSection />

      {/* Sección de industrias: muestra las industrias que pueden beneficiarse */}
      <LlamadorMeserosIndustriesSection />

      {/* Sección de productos relacionados */}
      <LlamadorMeserosRelatedProducts />
    </>
  );
}
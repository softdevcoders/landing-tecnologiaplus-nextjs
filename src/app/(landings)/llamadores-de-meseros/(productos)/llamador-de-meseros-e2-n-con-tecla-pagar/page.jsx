import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/ClientsSection/LlamadorMeserosClientsSection";
import TechnicalSheet from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/TechnicalSheet/TechnicalSheet";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/HowItWorks/HowItWorks";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

const verMasInformacion = {

  title: "Ver más información",
  description: "Ver más información sobre el producto",
  images: [
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/7_4x-8_1_saux20.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/3_4x-8_wiiwjz.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/7_4x-8_1_saux20.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/3_4x-8_wiiwjz.webp",
      alt: "Imagen del producto"
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he.webp",
      alt: "Imagen del producto"
    }
  ]
}

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-n-con-tecla-pagar': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasMeserosLlamadorV2n() {
  return (
    <>
      <ProductGallerySelected />
      <TechnicalSheet />
      <HowItWorks />
      <LlamadorMeserosClientsSection />
      <LlamadorMeserosRelatedProducts />
    </>
  );
}
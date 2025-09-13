import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import HowItWorks from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/HowItWorks/HowItWorks";
import TechnicalSheet from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/TechnicalSheet/TechnicalSheet";
import ProductGallerySelected from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/components/ProductGallery/ProductGallerySelected";
import getMetadata from "@/request/server/metadata/get-metadata";

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-b': metadata } } = getMetadata('landings');
  return metadata;
} 

export default function VerMasMeserosLlamadorV2b() {
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

// import getMetadata from '@/request/server/metadata/get-metadata';

// import ProductGallerySection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/ProductGallerySection'; 
// import DetallesDelProductoSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/DetallesDelProductoSection';
// import QueIncluyeSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/QueIncluyeSection';    
// import FichaTecnicaSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/FichaTecnicaSection';
// import ComoFuncionaSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/ComoFuncionaSection';
// import NuestrosClientesSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/NuestrosClientesSection';
// import ProductosRelacionadosSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/ProductosRelacionadosSection';
// import LlamadoresDeMeserosPreguntasFrecuentes from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/PreguntasFrecuentes'

// export async function generateMetadata() {
//   const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-b': metadata } } = getMetadata('landings'); 
//   return metadata;
// } 

// const VerMasMeserosLlamadorV2b = () => {
//   return (
//     <>
//       <ProductGallerySection />
//       <DetallesDelProductoSection />
//       <QueIncluyeSection /> 
//       <FichaTecnicaSection />
//       <ComoFuncionaSection />
//       <NuestrosClientesSection />
//       <ProductosRelacionadosSection />
//       <LlamadoresDeMeserosPreguntasFrecuentes />
//     </>
//   );
// };

// export default VerMasMeserosLlamadorV2b; 
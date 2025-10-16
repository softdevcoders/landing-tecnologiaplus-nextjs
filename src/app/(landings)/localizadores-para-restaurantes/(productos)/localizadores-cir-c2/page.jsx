// import TechnicalSheet from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/TechnicalSheet/TechnicalSheet";
// import HowItWorks from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/HowItWorks/HowItWorks";
// import LocalizadoresRelatedProducts from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/RelatedProducts/LocalizadoresRelatedProducts"
// import LogosSection from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/LogosSection/LogosSection";
// import ProductGallerySelected from "@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components/ProductGallery/ProductGallerySelected";
// import getMetadata from "@/request/server/metadata/get-metadata";
  
// export async function generateMetadata() {
//   const { 'localizadores-para-restaurantes': { 'localizadores-cir-c2': metadata } } = getMetadata('landings');
//   return metadata;
// } 

// export default function VerMasLocalizadoresCirC2() {
//   return (
//     <>
//       <ProductGallerySelected />
//       <TechnicalSheet />
//       <HowItWorks />
//       <LogosSection />
//       <LocalizadoresRelatedProducts />
//     </>
//   );
// }

import getMetadata from '@/request/server/metadata/get-metadata';

import ProductGallerySection from '@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components-v2/ProductGallerySection'; 
import DetallesDelProductoSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components-v2/DetallesDelProductoSection';
import QueIncluyeSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components-v2/QueIncluyeSection';    
import FichaTecnicaSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components-v2/FichaTecnicaSection';
import ComoFuncionaSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components-v2/ComoFuncionaSection';
import NuestrosClientesSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components-v2/NuestrosClientesSection';
import ProductosRelacionadosSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components-v2/ProductosRelacionadosSection';
import LlamadoresDeMeserosPreguntasFrecuentes from '@/sections/localizadores-para-restaurantes/localizadores-cir-c2/components-v2/PreguntasFrecuentes'

export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { 'localizadores-cir-c2': metadata } } = getMetadata('landings');
  return metadata;
} 

const VerMasLocalizadoresCirC2 = () => {
  return (
    <>
      <ProductGallerySection />
      <DetallesDelProductoSection />
      <QueIncluyeSection /> 
      <FichaTecnicaSection />
      <ComoFuncionaSection />
      <NuestrosClientesSection />
      <ProductosRelacionadosSection />
      <LlamadoresDeMeserosPreguntasFrecuentes />
    </>
  );
};

export default VerMasLocalizadoresCirC2; 
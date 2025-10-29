import getMetadata from '@/request/server/metadata/get-metadata';

import ProductGallerySection from '@/sections/localizadores-para-restaurantes/localizadores-cir-resistente-al-agua/components/ProductGallerySection'; 
import DetallesDelProductoSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-resistente-al-agua/components/DetallesDelProductoSection';
import FichaTecnicaSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-resistente-al-agua/components/FichaTecnicaSection';
import ComoFuncionaSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-resistente-al-agua/components/ComoFuncionaSection';
import NuestrosClientesSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-resistente-al-agua/components/NuestrosClientesSection';
import ProductosRelacionadosSection from '@/sections/localizadores-para-restaurantes/localizadores-cir-resistente-al-agua/components/ProductosRelacionadosSection';
import LlamadoresDeMeserosPreguntasFrecuentes from '@/sections/localizadores-para-restaurantes/localizadores-cir-resistente-al-agua/components/PreguntasFrecuentes'

export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { 'localizadores-cir-resistente-al-agua': metadata } } = getMetadata('landings');
  return metadata;
} 

const VerMasLocalizadoresCirResistenteAlAgua = () => {
  return (
    <>
      <ProductGallerySection />
      <DetallesDelProductoSection />
      <FichaTecnicaSection />
      {/* <ComoFuncionaSection /> */}
      <NuestrosClientesSection />
      <ProductosRelacionadosSection />
      <LlamadoresDeMeserosPreguntasFrecuentes />
    </>
  );
};

export default VerMasLocalizadoresCirResistenteAlAgua; 
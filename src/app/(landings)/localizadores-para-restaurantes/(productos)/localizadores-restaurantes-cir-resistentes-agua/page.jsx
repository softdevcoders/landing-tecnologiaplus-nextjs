import getMetadata from '@/request/server/metadata/get-metadata';

import ProductGallerySection from '@/sections/localizadores-para-restaurantes/localizadores-restaurantes-cir-resistentes-agua/components/ProductGallerySection'; 
import DetallesDelProductoSection from '@/sections/localizadores-para-restaurantes/localizadores-restaurantes-cir-resistentes-agua/components/DetallesDelProductoSection';
import FichaTecnicaSection from '@/sections/localizadores-para-restaurantes/localizadores-restaurantes-cir-resistentes-agua/components/FichaTecnicaSection';
import NuestrosClientesSection from '@/sections/localizadores-para-restaurantes/localizadores-restaurantes-cir-resistentes-agua/components/NuestrosClientesSection';
import ProductosRelacionadosSection from '@/sections/localizadores-para-restaurantes/localizadores-restaurantes-cir-resistentes-agua/components/ProductosRelacionadosSection';
import LlamadoresDeMeserosPreguntasFrecuentes from '@/sections/localizadores-para-restaurantes/localizadores-restaurantes-cir-resistentes-agua/components/PreguntasFrecuentes'
import ComoFuncionaSection from '@/sections/localizadores-para-restaurantes/localizadores-restaurantes-cir-resistentes-agua/components/ComoFuncionaSection';

export async function generateMetadata() {
  const { 'localizadores-para-restaurantes': { 'localizadores-restaurantes-cir-resistentes-agua': metadata } } = getMetadata('landings');
  return metadata;
} 

const VerMasLocalizadoresCirResistenteAlAgua = () => {
  return (
    <>
      <ProductGallerySection />
      <DetallesDelProductoSection />
      <FichaTecnicaSection />
      <ComoFuncionaSection />
      <NuestrosClientesSection />
      <ProductosRelacionadosSection />
      <LlamadoresDeMeserosPreguntasFrecuentes />
    </>
  );
};

export default VerMasLocalizadoresCirResistenteAlAgua; 
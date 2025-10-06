import getMetadata from '@/request/server/metadata/get-metadata';

import ProductGallerySection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes/ProductGallerySection'; 
import DetallesDelProductoSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes/DetallesDelProductoSection';
import QueIncluyeSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes/QueIncluyeSection';    
import FichaTecnicaSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes/FichaTecnicaSection';
import ComoFuncionaSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes/ComoFuncionaSection';
import NuestrosClientesSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes/NuestrosClientesSection';
import ProductosRelacionadosSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes/ProductosRelacionadosSection';
import LlamadoresDeMeserosPreguntasFrecuentes from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes/PreguntasFrecuentes'

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-b': metadata } } = getMetadata('landings'); 
  return metadata;
} 

const VerMasMeserosLlamadorV2b = () => {
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

export default VerMasMeserosLlamadorV2b; 
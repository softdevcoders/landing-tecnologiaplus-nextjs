import getMetadata from '@/request/server/metadata/get-metadata';

import ProductGallerySection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/ProductGallerySection'; 
import DetallesDelProductoSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/DetallesDelProductoSection';
import QueIncluyeSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/QueIncluyeSection';    
import FichaTecnicaSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/FichaTecnicaSection';
import ComoFuncionaSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/ComoFuncionaSection';
import NuestrosClientesSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/NuestrosClientesSection';
import ProductosRelacionadosSection from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/ProductosRelacionadosSection';
import LlamadoresDeMeserosPreguntasFrecuentes from '@/sections/llamadores-de-meseros/llamador-de-meseros-e2-b/componentes-v2/PreguntasFrecuentes'

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-b': metadata } } = getMetadata('landings'); 
  return metadata;
} 

const TestMigration = () => {
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

export default TestMigration; 
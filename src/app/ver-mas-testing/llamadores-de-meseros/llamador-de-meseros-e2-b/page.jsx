import ProductGallerySection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/ProductGallerySection'; 
import getMetadata from '@/request/server/metadata/get-metadata';
import DetallesDelProductoSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/DetallesDelProductoSection';
import QueIncluyeSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/QueIncluyeSection';    
import FichaTecnicaSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/FichaTecnicaSection';
import ComoFuncionaSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/ComoFuncionaSection';
import NuestrosClientesSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/NuestrosClientesSection';
import ProductosRelacionadosSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/ProductosRelacionadosSection';

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
    </>
  );
};

export default TestMigration; 
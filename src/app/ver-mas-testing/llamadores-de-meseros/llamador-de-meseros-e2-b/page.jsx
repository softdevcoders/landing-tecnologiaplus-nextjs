import ProductGallery from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/ProductGallery'; 
import getMetadata from '@/request/server/metadata/get-metadata';
import DetallesDelProducto from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/DetallesDelProducto';
import QueIncluyeSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/QueIncluye';

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-b': metadata } } = getMetadata('landings'); 
  return metadata;
} 

const TestMigration = () => {
  return (
    <>
      <ProductGallery />
      <DetallesDelProducto />
      <QueIncluyeSection />
    </>
  );
};

export default TestMigration; 
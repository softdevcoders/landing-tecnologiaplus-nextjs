import ProductGallery from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/ProductGallery'; 
import getMetadata from '@/request/server/metadata/get-metadata';

export async function generateMetadata() {
  const { 'llamadores-de-meseros': { 'llamador-de-meseros-e2-b': metadata } } = getMetadata('landings'); 
  return metadata;
} 

const TestMigration = () => {
  return (
    <>
      <ProductGallery />
    </>
  );
};

export default TestMigration; 
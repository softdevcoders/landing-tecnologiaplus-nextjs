import ProductGallery from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/ProductGallery'; 
import getMetadata from '@/request/server/metadata/get-metadata';
import DetallesDelProducto from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/DetallesDelProducto';
import QueIncluyeSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/QueIncluye';
import HowItWorks from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/HowItWorks/HowItWorks";
import LlamadorMeserosClientsSection from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/ClientsSection/LlamadorMeserosClientsSection";
import LlamadorMeserosRelatedProducts from "@/sections/llamadores-de-meseros/llamador-de-meseros-e2-n-con-tecla-pagar/components/RelatedProducts/LlamadorMeserosRelatedProducts";
import FichaTecnicaSection from '@/sections/ver-mas-testing/llamadores-de-meseros/llamador-de-meseros-e2-b/FichaTecnica';

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
      <FichaTecnicaSection />
      <HowItWorks />
      <LlamadorMeserosClientsSection />
      <LlamadorMeserosRelatedProducts />
    </>
  );
};

export default TestMigration; 
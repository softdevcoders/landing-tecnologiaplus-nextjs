import GaleriaVerMas from '@/components/ver-mas-productos/galeria-ver-mas/GaleriaVerMas';
import { productosGaleriaVerMas } from @/data/productos-galeria-ver-mas';

function ProductGallerySection() {
  return (
    <GaleriaVerMas 
      verMasInformacion={productosGaleriaVerMas.llamadoresMeseros.llamadorDeMeserosE2B} 
    />
  );
}

export default ProductGallerySection; 
import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';
import { productosGaleriaVerMas } from '@/config/productos-galeria-ver-mas';

function ProductGallery() {
  return (
    <GaleriaVerMas 
      verMasInformacion={productosGaleriaVerMas.llamadoresMeseros.llamadorDeMeserosE2B} 
    />
  );
}

export default ProductGallery; 
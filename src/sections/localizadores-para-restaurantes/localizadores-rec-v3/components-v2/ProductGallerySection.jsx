import GaleriaVerMas from '@/components/ver-mas-productos/galeria-ver-mas/GaleriaVerMas';
import { productosGaleriaVerMas } from '@/config/productos-galeria-ver-mas';

function ProductGallerySection() {
  return (
    <GaleriaVerMas 
      verMasInformacion={productosGaleriaVerMas.localizadoresParaRestaurantes.localizadoresRecV3}   
    />
  );
}

export default ProductGallerySection; 
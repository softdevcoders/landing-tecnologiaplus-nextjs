import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function EncuestaVirtualRelatedProducts() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.CALIFICADOR_DE_SERVICIO_AL_CLIENTE_OPINAMASTER.category_key,
        categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
      ]}
    />
  );
}

export default EncuestaVirtualRelatedProducts;

import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function LocalizadoresRelatedProducts() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.LLAMADORES_DE_MESEROS.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.CALIFICADOR_DE_SERVICIO_AL_CLIENTE_OPINAMASTER.category_key,
      ]} 
      addMarginBottom={false}
    />
  )
}

export default LocalizadoresRelatedProducts;

import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function LlamadorMeserosRelatedProducts() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.LOCALIZADORES_PARA_RESTAURANTES.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.LLAMADO_DE_ENFERMERIA_CUIDAMASTER.category_key,
      ]} 
      isVerMasView={true}
    />
  )
}

export default LlamadorMeserosRelatedProducts;

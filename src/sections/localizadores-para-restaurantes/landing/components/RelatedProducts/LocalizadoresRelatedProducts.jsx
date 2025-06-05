import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function LocalizadoresRelatedProducts() {
  return (
    <RelatedProducts productsKeys={[
      categories.ROLLOS_DE_FICHOS_PARA_TURNOS.category_key,
      categories.TURNERO_TURNOEXPRESS.category_key,
      categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
    ]} />
  )
}

export default LocalizadoresRelatedProducts;

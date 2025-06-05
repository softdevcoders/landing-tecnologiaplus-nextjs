import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function CalificadorRelatedProducts() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.LLAMADO_DE_ENFERMERIA_CUIDAMASTER.category_key,
      ]}
    />
  );
}

export default CalificadorRelatedProducts;

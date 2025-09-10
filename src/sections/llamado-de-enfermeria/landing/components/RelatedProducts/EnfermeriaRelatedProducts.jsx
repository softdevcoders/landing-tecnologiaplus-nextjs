import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function EnfermeriaRelatedProducts() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.ENCUESTA_VIRTUAL_OPINAMASTER.category_key,
      ]}
      addMarginBottom={false}
    />
  );
}

export default EnfermeriaRelatedProducts;

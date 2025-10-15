import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function TurnosRelatedProducts() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.DISPENSADOR_DE_TICKETS.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
      ]}
      addMarginBottom={false}
    />
  );
}

export default TurnosRelatedProducts;

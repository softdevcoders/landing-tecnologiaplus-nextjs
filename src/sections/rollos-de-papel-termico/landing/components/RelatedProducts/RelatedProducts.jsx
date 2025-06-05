import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function RelatedProductsRollosPapelTermico() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.DISPENSADOR_DE_TICKETS.category_key,
      ]}
    />
  ) 
}

export default RelatedProductsRollosPapelTermico;

import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function LlamadoDeEnfermeriaRelatedProductsSection() {
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

export default LlamadoDeEnfermeriaRelatedProductsSection;

import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function TurnoExpressRelatedProducts() {
  return (
    <RelatedProducts productsKeys={[
      categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
      categories.ROLLOS_DE_PAPEL_TERMICO.category_key,
      categories.LOCALIZADORES_PARA_RESTAURANTES.category_key,
    ]} />
  )
}

export default TurnoExpressRelatedProducts;


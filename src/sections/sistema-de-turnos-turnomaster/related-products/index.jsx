import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function TurnoMasterRelatedProducts() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.ROLLOS_DE_PAPEL_TERMICO.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.ROLLOS_DE_FICHOS_PARA_TURNOS.category_key,
      ]} 
      addMarginBottom={false}
    />
  )
}

  export default TurnoMasterRelatedProducts;


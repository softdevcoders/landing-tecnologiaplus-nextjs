import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function TurnoExpressRelatedProducts() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.ROLLOS_DE_FICHOS_PARA_TURNOS.category_key,
        categories.SISTEMA_DE_TURNOS_TURNOMASTER.category_key,
        categories.ROLLOS_DE_PAPEL_TERMICO.category_key,
      ]} 
      isVerMasView={true} 
    />
  )
}

export default TurnoExpressRelatedProducts;


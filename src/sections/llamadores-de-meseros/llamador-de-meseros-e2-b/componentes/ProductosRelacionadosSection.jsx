import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function ProductosRelacionadosSection() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.LOCALIZADORES_PARA_RESTAURANTES.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.LLAMADO_DE_ENFERMERIA_CUIDAMASTER.category_key,
      ]} 
      isVerMasVersionNueva={true}
      addMarginBottom={false}
      title="Productos relacionados del llamador de meseros E2-B"
    />
  )
}

export default ProductosRelacionadosSection;

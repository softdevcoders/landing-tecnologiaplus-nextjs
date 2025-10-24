import RelatedProducts from "@/components/related-products";
import { categories } from "@/config/categories";

function ProductosRelacionadosSection() {
  return (
    <RelatedProducts 
      productsKeys={[
        categories.LLAMADORES_DE_MESEROS.category_key,
        categories.TURNERO_TURNOEXPRESS.category_key,
        categories.CALIFICADOR_DE_SERVICIO_AL_CLIENTE_OPINAMASTER.category_key,
      ]} 
      isVerMasVersionNueva={true}
      addMarginBottom={false}
      title="Productos relacionados del avisador de pedidos LRS CIR-C2"
      headingTag="h2"
    />
  )
}

export default ProductosRelacionadosSection;

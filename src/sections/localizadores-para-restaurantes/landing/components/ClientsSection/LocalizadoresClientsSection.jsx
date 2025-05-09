import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosLocalizadores } from "@/config/client-logos";

function HomeClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Grandes marcas confían en nuestros Localizadores de clientes para mejorar su atención y agilizar sus pedidos."
      logos={logosLocalizadores}
    />
  );
}

export default HomeClientsSection;

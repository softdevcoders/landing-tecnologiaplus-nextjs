import NuestrosClientes from "@/components/nuestros-clientes";
import { logosLocalizadores } from "@/config/client-logos";

function HomeClientsSection() {
  return (
    <NuestrosClientes 
      title="Clientes que prefieren nuestros localizadores para restaurantes"
      description="Grandes marcas confían en nuestros Localizadores de clientes para mejorar su atención y agilizar sus pedidos."
      logos={logosLocalizadores}
    />
  );
}

export default HomeClientsSection;

import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosHome } from "@/config/client-logos";

function HomeClientsSection() {

  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosHome}
    />
  );
}

export default HomeClientsSection;

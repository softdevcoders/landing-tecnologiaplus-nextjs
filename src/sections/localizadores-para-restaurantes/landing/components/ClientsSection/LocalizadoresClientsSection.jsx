import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosLocalizadores } from "@/config/client-logos";

function HomeClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosLocalizadores}
    />
  );
}

export default HomeClientsSection;

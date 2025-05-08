import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosEnfermeria } from "@/config/client-logos";

function EnfermeriaClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosEnfermeria}
    />
  );
}

export default EnfermeriaClientsSection;

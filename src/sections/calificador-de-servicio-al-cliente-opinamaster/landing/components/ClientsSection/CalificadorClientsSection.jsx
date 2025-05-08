import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosCalificador } from "@/config/client-logos";

function CalificadorClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosCalificador}
    />
  );
}

export default CalificadorClientsSection;

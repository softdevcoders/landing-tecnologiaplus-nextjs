import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosCalificador } from "@/config/client-logos";

function CalificadorClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que toman decisiones con el calificador de servicio al cliente de OpinaMaster"
      logos={logosCalificador}
    />
  );
}

export default CalificadorClientsSection;

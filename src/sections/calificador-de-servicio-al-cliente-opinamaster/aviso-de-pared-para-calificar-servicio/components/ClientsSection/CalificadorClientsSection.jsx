import NuestrosClientes from "@/components/nuestros-clientes";
import { logosCalificador } from "@/config/client-logos";

function CalificadorClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos clientes"
      logos={logosCalificador}
      isVerMasView={true}
    />
  );
}

export default CalificadorClientsSection;

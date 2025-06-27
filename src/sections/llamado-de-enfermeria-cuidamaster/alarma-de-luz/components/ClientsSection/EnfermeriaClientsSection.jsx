import NuestrosClientes from "@/components/nuestros-clientes";
import { logosEnfermeria } from "@/config/client-logos";

function EnfermeriaClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos clientes"
      logos={logosEnfermeria}
      isVerMasView={true}
    />
  );
}

export default EnfermeriaClientsSection;

import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTermicos } from "@/config/client-logos";

function ClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos clientes"
      logos={logosTermicos}
      isVerMasView={true}
    />
  );
}

export default ClientsSection;

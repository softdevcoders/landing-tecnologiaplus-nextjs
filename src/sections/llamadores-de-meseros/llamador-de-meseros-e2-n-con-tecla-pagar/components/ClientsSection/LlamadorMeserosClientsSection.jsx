import NuestrosClientes from "@/components/nuestros-clientes";
import { logosLlamadorMeseros } from "@/config/client-logos";

function LlamadorMeserosClientsSection() {
  return (
    <NuestrosClientes
      title="Algunos clientes"
      logos={logosLlamadorMeseros}
      isVerMasView={true}
    />
  );
}

export default LlamadorMeserosClientsSection;

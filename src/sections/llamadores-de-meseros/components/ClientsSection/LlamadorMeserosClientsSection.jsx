import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosLlamadorMeseros } from "@/config/client-logos";

function LlamadorMeserosClientsSection() {
  return (
    <NuestrosClientes
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosLlamadorMeseros}
    />
  );
}

export default LlamadorMeserosClientsSection;

import NuestrosClientes from "@/components/nuestros-clientes";
import { logosLlamadorMeseros } from "@/config/client-logos";

function LlamadorMeserosClientsSection() {
  return (
    <NuestrosClientes
      title="Clientes que usan nuestros llamadores de meseros"
      description="Negocios que agilizan su atención al cliente con nuestro sistema de Llamador de Meseros."
      logos={logosLlamadorMeseros}
    />
  );
}

export default LlamadorMeserosClientsSection;

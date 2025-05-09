import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosCalificador } from "@/config/client-logos";

function EncuestaVirtualClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Marcas que utilizan la encuesta virtual y mejoran la experiencia de sus clientes."
      logos={logosCalificador}
    />
  );
}

export default EncuestaVirtualClientsSection;

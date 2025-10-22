import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTermicos } from "@/config/client-logos";

function ClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Clientes que prefieren nuestros Rollos Térmicos"
      logos={logosTermicos}
    />
  );
}

export default ClientsSection;

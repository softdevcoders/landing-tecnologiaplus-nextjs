import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTurnos } from "@/config/client-logos";

function TurnosClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos clientes"
      logos={logosTurnos}
      isVerMasView={true}
    />
  );
}

export default TurnosClientsSection;

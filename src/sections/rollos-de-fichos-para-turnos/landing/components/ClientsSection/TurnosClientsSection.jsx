import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTurnos } from "@/config/client-logos";

function TurnosClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Grandes y pequeñas empresas confían en nuestros fichos de turnos para ordenar la atención al cliente."
      logos={logosTurnos}
    />
  );
}

export default TurnosClientsSection;

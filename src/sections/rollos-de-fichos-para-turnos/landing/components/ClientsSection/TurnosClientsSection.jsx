import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosTurnos } from "@/config/client-logos";

function TurnosClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosTurnos}
    />
  );
}

export default TurnosClientsSection;

import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosTurnoExpress } from "@/config/client-logos";

function TurnoExpressClientsSection() {
  return (
    <NuestrosClientes
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosTurnoExpress}
    />
  );
}

export default TurnoExpressClientsSection;

import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosTurnoExpress } from "@/config/client-logos";

function TurnoExpressClientsSection() {
  return (
    <NuestrosClientes
      title="Algunos de nuestros clientes"
      description="Empresas que eliminan las filas usando el Turnero Digital."
      logos={logosTurnoExpress}
    />
  );
}

export default TurnoExpressClientsSection;

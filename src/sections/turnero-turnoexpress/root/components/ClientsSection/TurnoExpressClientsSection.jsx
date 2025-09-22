import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTurnoExpress } from "@/config/client-logos";

function TurnoExpressClientsSection() {
  return (
    <NuestrosClientes
      title="Clientes que usan nuestro Turnero Digital en Colombia"
      description="Empresas que eliminan las filas usando el Turnero Digital."
      logos={logosTurnoExpress}
    />
  );
}

export default TurnoExpressClientsSection;

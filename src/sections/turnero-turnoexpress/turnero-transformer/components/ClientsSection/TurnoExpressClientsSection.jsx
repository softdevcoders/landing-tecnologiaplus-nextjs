import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTurnoExpress } from "@/config/client-logos";

function TurnoExpressClientsSection() {
  return (
    <NuestrosClientes
      title="Algunos clientes"
      isVerMasView={true} 
      logos={logosTurnoExpress}
    />
  );
}

export default TurnoExpressClientsSection;

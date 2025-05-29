import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTurnoMaster } from "@/config/client-logos";


function TurnoMasterClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que usan TurnoMaster para agilizar el flujo de filas en tiempo real"
      logos={logosTurnoMaster}
    />
  );
}

export default TurnoMasterClientsSection;

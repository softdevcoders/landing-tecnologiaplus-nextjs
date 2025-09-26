import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTurnoMaster } from "@/config/client-logos";

function TurnoMasterClientsSection() {
  return (
    <NuestrosClientes 
      title="Clientes que confían en nuestro Sistema de Turnos"
      description="Empresas que usan TurnoMaster para agilizar el flujo de filas en tiempo real"
      logos={logosTurnoMaster}
    />
  );
}

export default TurnoMasterClientsSection;

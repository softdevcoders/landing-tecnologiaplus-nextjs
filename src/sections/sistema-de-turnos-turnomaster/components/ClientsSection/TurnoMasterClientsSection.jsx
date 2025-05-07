import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosTurnoMaster } from "@/config/client-logos";


function TurnoMasterClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosTurnoMaster}
    />
  );
}

export default TurnoMasterClientsSection;

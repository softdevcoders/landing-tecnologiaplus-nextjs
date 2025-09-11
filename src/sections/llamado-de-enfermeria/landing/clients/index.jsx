import NuestrosClientes from "@/components/nuestros-clientes";
import { logosEnfermeria } from "@/config/client-logos";

function LlamadoDeEnfermeriaClientsSection() {
  return (
    <NuestrosClientes 
      title="Entidades que confían en nuestro sistema de llamado de enfermería"
      description="Entidades médicas que mejoran su atención con el llamado de enfermeras"
      logos={logosEnfermeria}
    />
  );
}

export default LlamadoDeEnfermeriaClientsSection;

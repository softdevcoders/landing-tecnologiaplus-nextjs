import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosEnfermeria } from "@/config/client-logos";

function EnfermeriaClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Entidades médicas que mejoran su atención con el llamado de enfermeras"
      logos={logosEnfermeria}
    />
  );
}

export default EnfermeriaClientsSection;

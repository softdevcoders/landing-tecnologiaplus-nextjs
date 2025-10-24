import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTermicos } from "@/config/client-logos";

function ClientsSection() {
  return (
    <NuestrosClientes 
      title="Clientes que prefieren nuestros Rollos Térmicos"
      description="Nuestra calidad en rollos térmicos respalda a grandes empresas."
      logos={logosTermicos}
    />
  );
}

export default ClientsSection;

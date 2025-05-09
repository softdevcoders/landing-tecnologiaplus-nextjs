import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosTermicos } from "@/config/client-logos";

function ClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Nuestra calidad en rollos térmicos respalda a grandes empresas."
      logos={logosTermicos}
    />
  );
}

export default ClientsSection;

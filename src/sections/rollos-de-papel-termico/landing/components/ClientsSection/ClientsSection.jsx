import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosTermicos } from "@/config/client-logos";

function ClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Empresas que confían en Tecnología Plus para mejorar la atención al cliente."
      logos={logosTermicos}
    />
  );
}

export default ClientsSection;

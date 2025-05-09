import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosTurnos } from "@/config/client-logos";

function LogosSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Grandes y pequeñas empresas confían en nuestros fichos de turnos para ordenar la atención al cliente."
      logos={logosTurnos}
    />
  );
}

export default LogosSection;

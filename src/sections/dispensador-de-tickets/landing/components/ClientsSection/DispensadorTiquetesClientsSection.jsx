import NuestrosClientes from "@/components/layout/nuestros-clientes";
import { logosTurnos } from "@/config/client-logos";

function DispensadorTiquetesClientsSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Grandes y pequeños negocios eliminan filas con nuestro dispensador de turnos."
      logos={logosTurnos}
    />
  );
}

export default DispensadorTiquetesClientsSection;

import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTurnos } from "@/config/client-logos";

function DispensadorTiquetesClientsSection() {
  return (
    <NuestrosClientes 
      title="Clientes que usan nuestro dispensador de tickets"
      description="Grandes y pequeños negocios eliminan filas con nuestro dispensador de turnos."
      logos={logosTurnos}
    />
  );
}

export default DispensadorTiquetesClientsSection;

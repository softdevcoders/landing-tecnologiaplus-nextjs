import NuestrosClientes from "@/components/ver-mas-productos/nuestros-clientes/NuestrosClientes";
import { logosLlamadorMeseros } from "@/config/client-logos";

const NuestrosClientesSection = () => {
  return (
    <NuestrosClientes 
      logos={logosLlamadorMeseros} 
      title="Algunos clientes del llamador de meseros E2-B" 
    />
  );
};

export default NuestrosClientesSection;
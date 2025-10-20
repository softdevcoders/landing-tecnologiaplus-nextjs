import NuestrosClientes from "@/components/ver-mas-productos/nuestros-clientes/NuestrosClientes";
import { logosLocalizadores } from "@/config/client-logos";

const NuestrosClientesSection = () => {
  return (
    <NuestrosClientes 
      logos={logosLocalizadores} 
      title="Algunos clientes de los LRS CIR-C2"
    />
  );
};

export default NuestrosClientesSection;
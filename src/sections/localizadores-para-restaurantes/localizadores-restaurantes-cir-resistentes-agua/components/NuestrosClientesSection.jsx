import NuestrosClientes from "@/components/ver-mas-productos/nuestros-clientes/NuestrosClientes";
import { logosLocalizadores } from "@/config/client-logos";

const NuestrosClientesSection = () => {
  return (
    <NuestrosClientes 
      logos={logosLocalizadores} 
      title="Clientes que eligen el avisador de pedidos CIR por su resistencia al agua"
    />
  );
};

export default NuestrosClientesSection;
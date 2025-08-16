import NuestrosClientes from "@/components/ver-mas-productos/nuestros-clientes/NuestrosClientes";
import { logosLlamadorMeseros } from "@/config/client-logos";

const NuestrosClientesSection = () => {
  return (
    <NuestrosClientes logos={logosLlamadorMeseros} />
  );
};

export default NuestrosClientesSection;
import NuestrosClientes from "@/components/nuestros-clientes";
import { logosLocalizadores } from "@/config/client-logos";

function LogosSection() {
  return (
    <NuestrosClientes 
      title="Algunos clientes"
      logos={logosLocalizadores}
      isVerMasView={true}
    />
  );
}

export default LogosSection;

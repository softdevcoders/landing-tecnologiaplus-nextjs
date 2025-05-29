import NuestrosClientes from "@/components/nuestros-clientes";
import { logosLocalizadores } from "@/config/client-logos";

function LogosSection() {

  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      logos={logosLocalizadores}
    />
  );
}

export default LogosSection;

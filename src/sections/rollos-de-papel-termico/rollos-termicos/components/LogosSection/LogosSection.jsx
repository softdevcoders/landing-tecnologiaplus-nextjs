import NuestrosClientes from "@/components/nuestros-clientes";
import { logosTurnos } from "@/config/client-logos";

function LogosSection() {
  return (
    <NuestrosClientes 
      title="Algunos de nuestros clientes"
      description="Nuestra calidad en rollos térmicos respalda a grandes empresas."
      logos={logosTurnos}
    />
  );
}

export default LogosSection;

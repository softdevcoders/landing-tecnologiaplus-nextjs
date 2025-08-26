import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Llamado de Enfermería: Facilita la Atención al Paciente";
const description = "Llamado de enfermería, somos fabricantes directos que facilitan la atención en clínicas y geriátricos con equipos modernos de bajo costo. ¡Contactanos hoy!";
const keywords = ["Llamado de enfermería"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeriaCuidamaster.url}`;

const landingConfig = getLandingPageConfig('llamadoDeEnfermeriaCuidamaster', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
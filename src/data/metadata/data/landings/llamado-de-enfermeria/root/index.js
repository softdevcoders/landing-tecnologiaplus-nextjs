import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Llamado de Enfermería - Tecnología Plus";
const description = "Llamado de enfermería, somos fabricantes directos que facilitan la atención en clínicas y geriátricos con equipos modernos de bajo costo. ¡Contactanos hoy!";
const keywords = ["Llamado de enfermería"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeria.url}`;

const landingConfig = getLandingPageConfig('llamadoDeEnfermeria', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
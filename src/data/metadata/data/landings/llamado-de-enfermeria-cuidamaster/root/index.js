import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Llamado de Enfermería: Hacemos fácil la atención de tus pacientes";
const description = "Sistema de llamado de enfermería, somos fabricantes de bajo costo para modernizar y facilitar la atención de pacientes en el sector salud y geriatrico.";
const keywords = ["Llamado de Enfermería"];
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
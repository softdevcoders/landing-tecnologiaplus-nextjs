import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Dispensador de Tickets | Agiliza la Atención";
const description = "Mejora la experiencia de tus clientes con nuestro dispensador de tickets. Ordena filas y agiliza el servicio. ¡Cotiza ahora y recibe asesoría!";
const keywords = ["Dispensador De Tickets"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.dispensadorDeTickets.url}`;

const landingConfig = getLandingPageConfig('dispensadorDeTickets', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
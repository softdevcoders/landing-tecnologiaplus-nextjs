import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Encuesta Virtual OpinaMaster | Tecnología Plus";
const description = "Crea tu encuesta virtual en segundos con OpinaMaster. Recoge opiniones de clientes en tiempo real y mejora tu servicio con datos reales y útiles. ¡Contactanos!";
const keywords = ["Encuesta Virtual"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.encuestaVirtual.url}`;

const landingConfig = getLandingPageConfig('encuestaVirtual', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
}); 
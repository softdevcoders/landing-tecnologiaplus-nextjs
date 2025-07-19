import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Calificador de Servicios: Conoce la opinión real de tus clientes";
const description = "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.";
const keywords = ["Calificador de Servicio al cliente"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.calificadorDeServicioAlClienteOpinamaster.url}`;

const landingConfig = getLandingPageConfig('calificadorDeServicioAlClienteOpinamaster', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
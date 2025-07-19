import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Fichos para Turnos: Fabricantes de calidad garantizada";
const description = "Somos fabricantes de fichos para turnos de alta calidad. Compra directo de fábrica con entrega rápida. ¡Cotiza ahora y recibe asesoría personalizada!";
const keywords = ["Fichos para Turnos"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.rollosDeFichosParaTurnos.url}`;

const landingConfig = getLandingPageConfig('rollosDeFichosParaTurnos', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
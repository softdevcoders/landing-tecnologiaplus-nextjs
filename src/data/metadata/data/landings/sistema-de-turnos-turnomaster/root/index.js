import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Sistema de Turnos - Tecnología Plus";
const description = "Sistema de turnos para organizar filas: Somos fabricantes. Ideal para agilizar la atención en salas de espera. ¡Solicita una asesoria ahora!";
const keywords = ["Sistema de Turnos"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.sistemasDeTurnosTurnomaster.url}`;

const landingConfig = getLandingPageConfig('sistemasDeTurnosTurnomaster', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
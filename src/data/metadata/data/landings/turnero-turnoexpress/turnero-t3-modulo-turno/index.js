import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Turnero T3: Llama Turnos y Resalta tu Marca Profesionalmente";
const description = "Turnero digital con espacio para logo. Llama turnos en orden y muestra ventanillas libres. Eleva la imagen y eficiencia de tu empresa. ¡Solicita demo!";
const keywords = ["Turnero digital"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.children.turneroT3ModuloTurno.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('turneroTurnoexpress', 'turnero-t3-modulo-turno');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
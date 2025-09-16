import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Reloj Receptor de Llamados: Atención Ágil en Enfermería";
const description = "Recibe alertas instantáneas y vibra mostrando el número de cama. Ideal para personal de salud en hospitales y hogares geriátricos. ¡Solicita asesoría!";
const keywords = ["Reloj receptor de llamados de enfermería"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeria.children.relojReceptorDeLlamados.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoDeEnfermeria', 'reloj-receptor-de-llamados');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});

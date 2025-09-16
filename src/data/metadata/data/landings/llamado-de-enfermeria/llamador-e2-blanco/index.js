import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Llamador de Enfermería E2 Blanco: Atención Inmediata";
const description = "Mejora la experiencia de pacientes en clínicas y hospitales con el llamador inalámbrico E2. Ágil, cómodo y fácil de usar. ¡Solicita asesoría hoy!";
const keywords = ["Llamado de enfermería inalámbrico"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeria.children.llamadorE2NBlanco.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoDeEnfermeria', 'llamador-e2-blanco');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
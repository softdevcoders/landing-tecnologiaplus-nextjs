import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Pantalla T1-B para Enfermería: Visualiza Llamados en Tiempo Real";
const description = "Gestiona hasta 15 llamados en pantalla. Solución ideal para hospitales y hogares geriátricos. Mejora la atención y la coordinación del personal.";
const keywords = ["Pantalla para Timbre Hospitalario"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeria.children.pantallaT1B.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoDeEnfermeria', 'pantalla-t1-b');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
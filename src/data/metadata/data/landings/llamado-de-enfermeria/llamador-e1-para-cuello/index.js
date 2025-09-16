import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Llamador de Enfermería E1 para Cuello: Autonomía Total";
const description = "Brinda libertad a tus pacientes con el botón portátil E1. Resistente al agua y fácil de usar. Perfecto para adultos mayores. ¡Conoce sus ventajas!";
const keywords = ["Botón de enfermería"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoDeEnfermeria.children.llamadorE1ParaCuello.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoDeEnfermeria', 'llamador-e1-para-cuello');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
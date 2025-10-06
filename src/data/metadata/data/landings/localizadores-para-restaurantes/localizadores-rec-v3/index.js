import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Localizadores para Restaurantes REC-V3: Sin Espera";
const description = "Localizadores para Restaurantes REC-V3 permiten que tus clientes esperen su pedido sin perder el turno. Vibra y alumbra cuando la orden está lista.";
const keywords = ["Localizadores para restaurantes"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.localizadoresParaRestaurantes.children.rec_v3.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('localizadoresParaRestaurantes', 'localizadores-rec-v3');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
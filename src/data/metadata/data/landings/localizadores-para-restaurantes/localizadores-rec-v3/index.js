import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Localizadores para Restaurantes REC-V3: Experiencia Sin Espera";
const description = "Tus clientes esperan su pedido sin perder el turno. Avisador vibra y alumbra cuando el pedido está listo. Ideal para autoservicio y plazoletas de comida.";
const keywords = ["localizadores para restaurantes"];
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
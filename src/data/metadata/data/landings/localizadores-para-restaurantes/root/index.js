import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

// Datos específicos de esta landing page
const title = "Localizadores para Restaurantes - Tecnología Plus";
const description = "Localizadores de clientes para restaurantes autoservicio y más. Fabricantes expertos. Impulsa tu negocio y solicita tu asesoría ahora.";
const keywords = ["Localizadores para Restaurantes"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.localizadoresParaRestaurantes.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('localizadoresParaRestaurantes', 'root');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
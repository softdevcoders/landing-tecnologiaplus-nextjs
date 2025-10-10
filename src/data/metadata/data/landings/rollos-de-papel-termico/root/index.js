import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Rollos de papel Térmico - Tecnología Plus";
const description = "Rollos de papel Térmico, somos fabricantes de alta calidad, durabilidad y precios bajos, cuidando tu impresora termica. ¡Compra ahora en Tecnología Plus!";
const keywords = ["Papél Térmico"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.rollosDePapelTermico.url}`;

const landingConfig = getLandingPageConfig('rollosDePapelTermico', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
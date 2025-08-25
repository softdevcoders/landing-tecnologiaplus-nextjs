import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Sistemas innovadores para agilizar y potenciar la atención al cliente";
const description = "Lleva tu negocio al siguiente nivel, en Tecnología Plus somos expertos en sistemas para agilizar y pontenciar el servicio al cliente ¡Contactanos ahora!";
const keywords = ["Tecnología Plus"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const landingConfig = getLandingPageConfig('home', 'root');

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
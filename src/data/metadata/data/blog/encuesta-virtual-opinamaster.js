import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Encuesta Virtual -BlogTecnología Plus";
const description = "OpinaMaster Encuesta Virtual permite recopilar opiniones de clientes desde cualquier dispositivo. Ideal para medir satisfacción y mejorar la atención.";
const keywords = ["Blog", "Encuesta Virtual"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.encuestaVirtualOpinamaster.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
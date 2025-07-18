import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Calificador Servicio al cliente- Blog Tecnología Plus";
const description = "OpinaMaster es un calificador de servicio al cliente que recoge opiniones en tiempo real para mejorar la atención y tomar decisiones con base en datos reales.";
const keywords = ["Blog", "Calificador de Servicio al Cliente"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.calificadorDeServicioAlClienteOpinamaster.url}`;

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
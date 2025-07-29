import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Turnero TurnoExpress -Blog Tecnología Plus";
const description = "Turnero TurnoExpress organiza filas, mejora la atención y optimiza tiempos. Ideal para puntos de atención al cliente que buscan orden y eficiencia.";
const keywords = ["Blog", "Turnero TurnoExpress"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.turneroTurnoexpress.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Rollos de Fichos para Turnos -Blog Tecnología Plus";
const description = "Rollos de fichos para turnos compatibles con dispensadores manuales o automáticos. Alta calidad, impresión nítida y numeración precisa garantizada.";
const keywords = ["Blog", "Rollos de Fichos para Turnos"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.rollosDeFichosParaTurnos.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
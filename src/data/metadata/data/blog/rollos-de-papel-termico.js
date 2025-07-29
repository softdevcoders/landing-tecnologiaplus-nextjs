import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Rollos de Papel Térmico - Blog Tecnología Plus";
const description = "Somos fabricantes en Rollos de papel térmico para impresoras térmicas, turneros y datáfonos. Impresión clara, durabilidad y compatibilidad garantizada.";
const keywords = ["Blog", "Rollos de papel térmico"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.rollosDePapelTermico.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
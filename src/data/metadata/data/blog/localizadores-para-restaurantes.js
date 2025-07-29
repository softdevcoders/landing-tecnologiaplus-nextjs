import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Localizadores para Restaurantes- Blog Tecnología Plus";
const description = "Descubre localizadores para restaurantes que mejoran la atención al cliente, optimizan tiempos y eliminan filas. Soluciones para todo tipo de negocios." ;
const keywords = ["Blog", "Localizadores para restaurantes"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.localizadoresParaRestaurantes.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
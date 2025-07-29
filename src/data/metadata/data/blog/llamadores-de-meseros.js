import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Llamadores de Meseros- Blog Tecnología Plus";
const description = "Llamadores de meseros inalámbricos que agilizan la atención, mejoran el servicio y reducen el tiempo de espera. Ideales para todo tipo de restaurantes.";
const keywords = ["Blog", "Llamadores de meseros"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.llamadoresDeMeseros.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
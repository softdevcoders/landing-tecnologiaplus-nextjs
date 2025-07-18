import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Blog de Tecnología Plus | Innovación, Tendencias y Más";
const description = "Somos fabricantes. Descubre en nuestro blog cómo la tecnología mejora la experiencia de los usuarios en comercios. ¡Innovación para un mejor servicio!";
const keywords = ["Blog"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.url}`;

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});

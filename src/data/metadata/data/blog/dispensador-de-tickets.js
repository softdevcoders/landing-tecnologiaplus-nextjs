import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Dispensador de Tickets -Blog Tecnología Plus";
const description = "Dispensador de tickets para sistemas de turnos. Ideales para organizar filas y mejorar la atención al cliente en puntos de alta concurrencia.";
const keywords = ["Blog", "Dispensador de Tickets"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.dispensadorDeTickets.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
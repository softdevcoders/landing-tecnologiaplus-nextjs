import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Sistema de Turnos - Blog Tecnología Plus";
const description = "TurnoMaster es un sistema de turnos avanzado para gestionar filas, mejorar la atención y brindar una experiencia ágil y profesional al usuario.";
const keywords = ["Blog", "Sistema de Turnos TurnoMaster"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.sistemasDeTurnosTurnomaster.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
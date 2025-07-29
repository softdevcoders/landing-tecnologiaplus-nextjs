import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Llamado de Enfermería -Blog Tecnología Plus";
const description = "CuidaMaster es un sistema de llamado de enfermería inalámbrico que mejora la atención al paciente en clínicas, hospitales, hogares y centros médicos.";
const keywords = ["Blog", "Llamado de Enfermería CuidaMaster"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.llamadoDeEnfermeriaCuidamaster.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
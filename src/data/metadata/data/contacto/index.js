import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Comunícate con Tecnología Plus | Atención Personalizada";
const description = "Somos fabricantes. Descubre productos y servicios de Tecnología Plus con asesoría experta personalizada. Contáctanos: +57 320 3219424.";
const keywords = ["Contacto"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.contact.url}`;

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});
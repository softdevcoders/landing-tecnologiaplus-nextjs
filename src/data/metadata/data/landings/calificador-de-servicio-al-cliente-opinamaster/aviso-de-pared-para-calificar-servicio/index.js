import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Aviso de Pared para Calificar Servicio: Opiniones Sin Contacto";
const description = "Recoge opiniones fácilmente en baños, áreas comunes y coworking. Calificador práctico y discreto para espacios sin contacto humano. ¡Mejora tu servicio!";
const keywords = ["AVISO DE PARED"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.calificadorDeServicioAlClienteOpinamaster.children.avisoDeParedParaCalificarServicio.url}`;

export const metadata = {
  title: {
    absolute: title,
  },
  description: description,
  keywords: keywords,
  robots: ROBOTS_CONFIG,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: {
      absolute: title,
    },
    description: description,
    url: url,
    siteName: "Tecnología Plus",
    locale: "es_ES",
    type: "website",
    images: [{
      url: LOGO_METADATA,
      width: 192,
      height: 192,
      alt: "Logo de Tecnología Plus",
    }],
  },
  twitter: {
    title: {
      absolute: title,
    },
    description: description,
    siteName: "Tecnología Plus",
    url: url,
    locale: "es_ES",
    type: "website",
    images: [{
      url: LOGO_METADATA,
      width: 192,
      height: 192,
      alt: "Logo de Tecnología Plus",
    }],
    card: "summary",
  },
};
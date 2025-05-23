import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Rollos de Turnos: Tickets Numerados para Gestión de Filas";
const description = "Elimina filas y organiza turnos con nuestros rollos numerados. Ideales para dispensadores tipo caracol en salud y servicios. ¡Solicita tu cotización!";
const keywords = ["Rollos de Tickets Numerados"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url}`;

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
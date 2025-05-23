import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Dispensador de Tickets Caracol: Ordena y Optimiza Filas";
const description = "Organiza filas fácilmente con nuestro dispensador tipo caracol. Ideal para salas de espera y servicios. Instalación sencilla. ¡Cotiza y mejora tu atención!";
const keywords = ["DISPENSADOR DE TICKETS"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url}`;

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
import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Calificador de Servicios: Conoce la opinión real de tus clientes";
const description = "Conoce lo que piensan realmente tus clientes con el Calificador de Servicios. Toma decisiones informadas y lleva tu empresa al siguiente nivel.";
const keywords = ["Calificador de Servicio al cliente"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${routes.landings.calificadorDeServicioAlClienteOpinamaster.url}`;

export const metadata = {
  title: {
    absolute: title,
  },
  description: description,
  keywords: keywords,
  robots: ROBOTS_CONFIG,
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
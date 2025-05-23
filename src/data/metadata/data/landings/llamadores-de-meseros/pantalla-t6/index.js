import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Pantalla T6 para Meseros: Monitorea Mesas en Espera";
const description = "Visualiza hasta 6 mesas esperando atención. Compatible con llamadores para restaurantes, bares y clubes. Optimiza la gestión de tu equipo.";
const keywords = ["Pantalla para mostrar a los meseros los numeros de mesas"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.t6.url}`;

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
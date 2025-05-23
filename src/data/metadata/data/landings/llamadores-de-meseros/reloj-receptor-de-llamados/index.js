import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Reloj Receptor de Llamados: Atención Instantánea a Mesas";
const description = "Recibe alertas y vibra mostrando el número de mesa. Ideal para meseros en restaurantes, bares y zonas VIP. Mejora la atención al cliente. ¡Solicita ya!";
const keywords = ["Reloj receptor de llamados para meseros"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.relojReceptorDeLlamados.url}`;

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
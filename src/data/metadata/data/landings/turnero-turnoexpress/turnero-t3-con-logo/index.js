import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Turnero T3 con logo - Resalta tú Marca";
const description = "Turnero digital: Somos fabricantes. Acelera la atención al cliente y moderniza tu negocio. ¡Solicita una asesoria ahora!";
const keywords = ["Turnero T3 con Logo"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.children.turneroT3ConLogo.url}`;

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
import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Llamador de Meseros E2-B: Atención Ágil y Comodidad";
const description = " Diseño ergonómico y resistente para restaurantes y clubes. Llama al mesero y borra el llamado al ser atendido. Solución práctica para tu negocio.";
const keywords = ["Llamado de meseros"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.e2_b.url}`;

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
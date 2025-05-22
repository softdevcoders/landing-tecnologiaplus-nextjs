import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Calificador Servicio al cliente OpinaMaster- Tecnología Plus";
const description = "OpinaMaster es un calificador de servicio al cliente que recoge opiniones en tiempo real para mejorar la atención y tomar decisiones con base en datos reales.";
const keywords = ["Blog", "Calificador de Servicio al Cliente"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.calificadorDeServicioAlClienteOpinamaster.url}`;

export const metadata = {
  title: {
    absolute: title,
  },
  alternates: {
    canonical: url,
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
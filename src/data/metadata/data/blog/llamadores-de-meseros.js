import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Llamadores de Meseros- Blog Tecnología Plus";
const description = "Llamadores de meseros inalámbricos que agilizan la atención, mejoran el servicio y reducen el tiempo de espera. Ideales para todo tipo de restaurantes.";
const keywords = ["Blog", "Llamadores de meseros"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.llamadoresDeMeseros.url}`;

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
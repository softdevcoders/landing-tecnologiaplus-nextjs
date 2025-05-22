import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Blog - Tecnología Plus";
const description = "Somos fabricantes. Descubre en nuestro blog cómo la tecnología mejora la experiencia de los usuarios en comercios. ¡Innovación para un mejor servicio!";
const keywords = ["Blog"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.url}`;

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
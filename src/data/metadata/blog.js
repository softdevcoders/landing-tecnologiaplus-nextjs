import { routes } from "@/config/routes";
import { LOGO_METADATA } from "./config";

export const metadata = {
  title: "Página de Blog",
  description:
    "Somos fabricantes. Descubre en nuestro blog cómo la tecnología mejora la experiencia de los usuarios en comercios. ¡Innovación para un mejor servicio!",
  keywords: [
    "Blog",
  ],
  openGraph: {
    title: "Blog - Tecnología Plus",
    description:
      "Somos fabricantes. Descubre en nuestro blog cómo la tecnología mejora la experiencia de los usuarios en comercios. ¡Innovación para un mejor servicio!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${routes.blog.url}`,
    siteName: "Tecnología Plus",
    locale: "es_ES",
    type: "website",
    images: [{
      url: LOGO_METADATA,
      width: 192,
      height: 192,
      alt: "Tecnología Plus - Soluciones tecnológicas para su negocio",
    }],
  },
  twitter: {
    card: "summary",
    title: "Blog - Tecnología Plus",
    description:
      "Somos fabricantes. Descubre en nuestro blog cómo la tecnología mejora la experiencia de los usuarios en comercios. ¡Innovación para un mejor servicio!",
    siteName: "Tecnología Plus",
    locale: "es_ES",
    type: "website",
    images: [{
      url: LOGO_METADATA,
      width: 192,
      height: 192,
      alt: "Tecnología Plus - Soluciones tecnológicas para su negocio",
    }],
  },
};
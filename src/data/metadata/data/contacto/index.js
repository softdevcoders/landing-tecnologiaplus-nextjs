import { routes } from "@/config/routes";
import { LOGO_METADATA } from "@/data/metadata/config";

const title = "Contacto - Tecnologia Plus";
const description = "Somos fabricantes. Descubre productos y servicios de Tecnología Plus con asesoría experta personalizada. Contáctanos: +57 320 3219424.";
const keywords = ["Contacto"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${routes.contact.url}`;

export const metadata = {
  title: {
    absolute: title,
  },
  description: description,
  keywords: keywords,
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
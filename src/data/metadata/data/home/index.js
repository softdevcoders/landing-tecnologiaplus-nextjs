import { routes } from "@/config/routes";
import { LOGO_METADATA } from "@/data/metadata/config";

const title = "Sistemas innovadores para agilizar y potenciar la atención al cliente";
const description = "Lleva tu negocio al siguiente nivel, en Tecnología Plus somos expertos en sistemas para agilizar y pontenciar el servicio al cliente ¡Contactanos ahora!";
const keywords = ["Tecnología Plus"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${routes.home.url}`;

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
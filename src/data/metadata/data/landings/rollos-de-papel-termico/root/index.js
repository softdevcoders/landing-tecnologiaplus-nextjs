import { routes } from "@/config/routes";
import { LOGO_METADATA } from "@/data/metadata/config";

const title = "Rollos Térmicos: Somos fabricantes de alta calidad";
const description = "Rollos de papel Térmico, somos fabricantes de alta calidad, durabilidad y precios bajos, cuidando tu impresora termica. ¡Compra ahora en Tecnología Plus!";
const keywords = ["Papél Térmico"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${routes.landings.rollosDePapelTermico.url}`;

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
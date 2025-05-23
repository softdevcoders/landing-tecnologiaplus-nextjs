import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Rollos de Papel Térmico: Calidad y Compatibilidad Garantizada";
const description = "Rollos térmicos para tickets y facturas. Variedad de tamaños y alta durabilidad. Compatibles con múltiples impresoras. ¡Compra directo de fabricante!";
const keywords = ["Rollos de Papel térmico"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.rollosDePapelTermico.children.rollosTermicos.url}`;

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
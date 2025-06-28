import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Turnero T1-B: Solución Compacta en Salas de Espera";
const description = "Turnero inalámbrico de bajo costo, ideal para zonas de espera pequeñas. Llama turnos en orden y aleatorios. Fácil instalación y uso. ¡Cotiza ahora!";
const keywords = ["Turnero"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.turneroTurnoexpress.children.turneroT1B.url}`;

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
import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Calificador de Servicio al Cliente: Opinión en Tiempo Real";
const description = "Captura la percepción real de tus clientes en segundos. Recibe alertas de calificaciones negativas y mejora tu servicio. ¡Solicita asesoría personalizada!";
const keywords = ["Calificador de servicio"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.calificadorDeServicioAlClienteOpinamaster.children.calificadorDeServicio.url}`;

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
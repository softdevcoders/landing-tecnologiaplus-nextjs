import { routes } from "@/config/routes";
import { LOGO_METADATA, ROBOTS_CONFIG } from "@/data/metadata/config";

const title = "Llamado de Enfermería: Hacemos fácil la atención de tus pacientes";
const description = "Sistema de llamado de enfermería, somos fabricantes de bajo costo para modernizar y facilitar la atención de pacientes en el sector salud y geriatrico.";
const keywords = ["Llamado de Enfermería"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${routes.landings.llamadoDeEnfermeriaCuidamaster.url}`;

export const metadata = {
  title: {
    absolute: title,
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
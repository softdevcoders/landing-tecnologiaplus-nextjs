import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Llamado de Enfermería -Blog Tecnología Plus";
const description = "CuidaMaster es un sistema de llamado de enfermería inalámbrico que mejora la atención al paciente en clínicas, hospitales, hogares y centros médicos.";
const keywords = ["Blog", "Llamado de Enfermería CuidaMaster"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.llamadoDeEnfermeriaCuidamaster.url}`;

export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url
});

// export const metadata = {
//   title: {
//     absolute: title,
//   },
//   alternates: {
//     canonical: url,
//   },
//   description: description,
//   keywords: keywords,
//   robots: ROBOTS_CONFIG,
//   openGraph: {
//     title: {
//       absolute: title,
//     },
//     description: description,
//     url: url,
//     siteName: "Tecnología Plus",
//     locale: "es_ES",
//     type: "website",
//     images: [{
//       url: LOGO_METADATA,
//       width: 192,
//       height: 192,
//       alt: "Logo de Tecnología Plus",
//     }],
//   },
//   twitter: {
//     title: {
//       absolute: title,
//     },
//     description: description,
//     siteName: "Tecnología Plus",
//     url: url,
//     locale: "es_ES",
//     type: "website",
//     images: [{
//       url: LOGO_METADATA,
//       width: 192,
//       height: 192,
//       alt: "Logo de Tecnología Plus",
//     }],
//     card: "summary",
//   },
// };
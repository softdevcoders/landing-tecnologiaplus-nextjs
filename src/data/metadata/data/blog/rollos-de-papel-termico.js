import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";

const title = "Rollos de Papel Térmico - Blog Tecnología Plus";
const description = "Somos fabricantes en Rollos de papel térmico para impresoras térmicas, turneros y datáfonos. Impresión clara, durabilidad y compatibilidad garantizada.";
const keywords = ["Blog", "Rollos de papel térmico"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.blog.children.rollosDePapelTermico.url}`;

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
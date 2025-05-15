import { LOGO_METADATA } from "./config";

export const metadata = {
    title: {
      template: "%s | Tecnología Plus",
      default: "Tecnología Plus - Sistemas de Turnos y Llamadores de Meseros",
    },
    description:
      "Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores para mejorar la eficiencia y experiencia en su negocio",
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    keywords: [
      "sistemas de turnos",
      "llamador de meseros",
      "localizadores",
      "tecnología para negocios",
      "dispositivos para restaurantes",
    ],
    alternates: {
      canonical: "/",
      languages: {
        "es-ES": "/",
      },
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-image-preview": "none",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: {
        template: "%s | Tecnología Plus",
        default: "Tecnología Plus - Sistemas para Mejorar su Negocio",
      },
      description:
        "Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores para mejorar la eficiencia de su negocio",
      url: process.env.NEXT_PUBLIC_BASE_URL,
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
      title: {
        template: "%s | Tecnología Plus",
        default: "Tecnología Plus - Sistemas para Mejorar su Negocio",
      },
      description:
        "Soluciones tecnológicas profesionales: sistemas de turnos, llamadores de meseros y localizadores",
      images: [LOGO_METADATA],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    // verification: {
    //   google: "your-google-site-verification",
    // },
    other: {
      "msapplication-TileImage": "/mstile-270x270.png",
    },
  };
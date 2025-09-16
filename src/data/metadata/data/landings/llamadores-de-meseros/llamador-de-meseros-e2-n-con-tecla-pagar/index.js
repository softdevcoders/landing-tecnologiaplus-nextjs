import { routes } from "@/config/routes";
import { generateLandingMetadata } from "@/data/metadata/config";
import { getLandingPageConfig } from "@/data/metadata/config/landing-pages-data";

const title = "Llamador de Meseros E2-N: Agiliza Servicio y Pago Rápido";
const description = "Reduce tiempos de espera y permite pedir la cuenta fácilmente. Ideal para restaurantes, bares y salas VIP. Mejora la experiencia del cliente. ¡Cotiza ahora!";
const keywords = ["Llamador de meseros"];
const url = `${process.env.NEXT_PUBLIC_BASE_URL}${routes.landings.llamadoresDeMeseros.children.e2_n.url}`;

// Obtener configuración centralizada (imágenes, categoría, etc.)
const landingConfig = getLandingPageConfig('llamadoresDeMeseros', 'llamador-de-meseros-e2-n-con-tecla-pagar');

// Generar metadatos usando el sistema centralizado
export const metadata = generateLandingMetadata({
  title,
  description,
  keywords,
  url,
  image: landingConfig.image,
  category: landingConfig.category
});
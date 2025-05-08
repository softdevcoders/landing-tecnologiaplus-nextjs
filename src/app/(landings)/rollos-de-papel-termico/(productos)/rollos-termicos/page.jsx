import TechnicalSheet from "@/sections/rollos-de-papel-termico/rollos-termicos/components/TechnicalSheet/TechnicalSheet";
import LogosSection from "@/sections/rollos-de-papel-termico/rollos-termicos/components/LogosSection/LogosSection";
import RelatedProducts from "@/sections/rollos-de-papel-termico/landing/components/RelatedProducts/RelatedProducts";
import ProductGallerySelected from "@/sections/rollos-de-papel-termico/rollos-termicos/components/ProductGallery/ProductGallerySelected";

export const metadata = {
  title: "Rollos de Papel Térmico: Calidad y Compatibilidad Garantizada",
  description:
    "Rollos térmicos para tickets y facturas. Variedad de tamaños y alta durabilidad. Compatibles con múltiples impresoras. ¡Compra directo de fabricante!",
  keywords: ["Rollos de Papel térmico"],
  openGraph: {
    title: "Rollos de Papel Térmico: Calidad y Compatibilidad Garantizada",
    description:
      "Rollos térmicos para tickets y facturas. Variedad de tamaños y alta durabilidad. Compatibles con múltiples impresoras. ¡Compra directo de fabricante!",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/rollos-de-papel-termico/rollos-termicos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rollos de Papel Térmico: Calidad y Compatibilidad Garantizada",
    description:
      "Rollos térmicos para tickets y facturas. Variedad de tamaños y alta durabilidad. Compatibles con múltiples impresoras. ¡Compra directo de fabricante!",
  },
};

export default function VerMasTermicos() {
  return (
    <>
      {/* ProductGallerySelected: No recibe props, muestra una galería de productos seleccionados */}
      <ProductGallerySelected />

      {/* TechnicalSheet: No recibe props, muestra la ficha técnica del producto */}
      <TechnicalSheet />

      {/* LogosSection: No recibe props, muestra una sección con logos relacionados */}
      <LogosSection />

      {/* RelatedProducts: Recibe un prop `titleClassName` para personalizar el estilo del título */}
      <RelatedProducts />
    </>
  );
}
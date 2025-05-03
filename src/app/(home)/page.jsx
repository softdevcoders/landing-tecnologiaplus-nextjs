import HomeBenefitsSection from "@/sections/home/BenefitsSection/HomeBenefitsSection";
// import HomeClientsSection from "@/sections/home/ClientsSection/HomeClientsSection";
import HomeProductsSection from "@/sections/home/ProductsSection/HomeProductsSection";
import HomeRecentPostsSection from "@/sections/home/RecentPost/HomeRecentPostsSection";
import SliderHero from "@/sections/home/slider-hero/SliderHero";
import VideoSection from "@/sections/home/VideoSection/ProductsSection/VideoSection";

export const metadata = {
  title: "Sistemas innovadores para Agilizar y potenciar la atención al cliente",
  description: "Lleva tu negocio al siguiente nivel, en Tecnología Plus somos expertos en sistemas para agilizar y potenciar el servicio al cliente ¡Contáctanos ahora!",
  alternates: {
    canonical: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/",
  },
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: "Tecnología Plus - Llamadores Inalámbricos y Sistemas de Turnos",
    description: "Mejora la eficiencia de tu negocio con los llamadores inalámbricos y sistemas de turnos de Tecnología Plus. Soluciones innovadoras para un mejor servicio.",
    url: "https://landing-tecnologiaplus-nextjs-dev.vercel.app/",
    siteName: "TecnologiaPlus",
    images: [
      {
        url: "/images/logo-tecnologia-plus.jpg",
        width: 831,
        height: 686,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnología Plus - Llamadores Inalámbricos y Sistemas de Turnos",
    description: "Mejora la eficiencia de tu negocio con los llamadores inalámbricos y sistemas de turnos de Tecnología Plus. Soluciones innovadoras para un mejor servicio.",
  }
};

export default function Home() {
  return (
    <>
      <SliderHero />
      {/* <HomeClientsSection /> */}
      <HomeProductsSection />
      <VideoSection />
      <HomeBenefitsSection />
      <HomeRecentPostsSection />
    </>
  );
}
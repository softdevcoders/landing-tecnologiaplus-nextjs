import getMetadata from "@/request/server/metadata/get-metadata";
import HomeBenefitsSection from "@/sections/home/BenefitsSection/HomeBenefitsSection";
import HomeClientsSection from "@/sections/home/ClientsSection/HomeClientsSection";
import HomeProductsSection from "@/sections/home/ProductsSection/HomeProductsSection";
import HomeRecentPostsSection from "@/sections/home/RecentPost/HomeRecentPostsSection";
import SliderHeroSection from "@/sections/home/SliderHeroSection";
import VideoSection from "@/sections/home/VideoSection/ProductsSection/VideoSection";

export async function generateMetadata() {
  const metadata = getMetadata('home');
  return metadata;
}

// Hacemos unos cambios

export default function Home() {
  return (
    <>
      <SliderHeroSection />
      <HomeClientsSection />
      <HomeProductsSection />
      <VideoSection />
      <HomeBenefitsSection />
      <HomeRecentPostsSection />
    </>
  );
}
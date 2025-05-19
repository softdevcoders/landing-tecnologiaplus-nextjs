import getMetadata from "@/request/server/metadata/get-metadata";
import HomeBenefitsSection from "@/sections/home/BenefitsSection/HomeBenefitsSection";
import HomeClientsSection from "@/sections/home/ClientsSection/HomeClientsSection";
import HomeProductsSection from "@/sections/home/ProductsSection/HomeProductsSection";
import HomeRecentPostsSection from "@/sections/home/RecentPost/HomeRecentPostsSection";
import SliderHero from "@/sections/home/slider-hero";
import VideoSection from "@/sections/home/VideoSection/ProductsSection/VideoSection";

export async function generateMetadata() {
  const metadata = getMetadata('default');
  return metadata;
}

export default function Home() {
  return (
    <>
      <SliderHero />
      <HomeClientsSection />
      <HomeProductsSection />
      <VideoSection />
      <HomeBenefitsSection />
      <HomeRecentPostsSection />
    </>
  );
}
import FeaturedProduct from "@/components/FeaturedProduct";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import PromotionBanner from "@/components/PromotionBanner";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Featured Products */}
      <FeaturedProduct />

      {/* Promotion Banner */}
      <PromotionBanner />

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}

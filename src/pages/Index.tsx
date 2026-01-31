import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import BrandStatement from "@/components/BrandStatement";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProducts />
      <Testimonials />
      <BrandStatement />
      <Footer />
    </div>
  );
};

export default Index;

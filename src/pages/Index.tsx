import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductList from "@/components/ProductList";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductList />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

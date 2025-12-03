import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Polimarket - Tu Marketplace de Confianza</title>
        <meta name="description" content="Polimarket es el marketplace donde encuentras todo lo que necesitas con los mejores precios y la mejor calidad. Explora nuestras categorías." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <HeroSection 
            greeting="¡Bienvenido a Polimarket!"
            subtitle="El marketplace donde encuentras todo lo que necesitas con los mejores precios y la mejor calidad. Descubre miles de productos de vendedores verificados."
          />
          
          <ImageCarousel />
          
          <SocialSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;

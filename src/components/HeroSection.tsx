import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  greeting?: string;
  subtitle?: string;
}

const HeroSection = ({ 
  greeting = "¡Bienvenido a Polimarket!", 
  subtitle = "El marketplace donde encuentras todo lo que necesitas con los mejores precios y la mejor calidad."
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Polimarket Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[80vh] items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <span className="animate-fade-up inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
              Tu marketplace de confianza
            </span>
            
            <h1 className="animate-fade-up-delay-1 mt-6 font-display text-5xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
              {greeting}
            </h1>
            
            <p className="animate-fade-up-delay-2 mt-6 text-lg text-primary-foreground/80 md:text-xl">
              {subtitle}
            </p>
            
            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="group animate-pulse-glow">
                Explorar ahora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20">
                Conocer más
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

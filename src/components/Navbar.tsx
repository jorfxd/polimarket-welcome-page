import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hero-gradient">
              <span className="font-display text-lg font-bold text-primary-foreground">P</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Polimarket
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Inicio
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Categorías
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Ofertas
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Contacto
            </a>
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                0
              </span>
            </Button>
            <Button>Iniciar sesión</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-border pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Inicio
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Categorías
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Ofertas
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Contacto
              </a>
              <Button className="mt-4 w-full">Iniciar sesión</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

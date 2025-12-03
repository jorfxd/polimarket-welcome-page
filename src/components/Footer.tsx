const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <div className="font-display text-xl font-bold text-primary-foreground">
            Polimarket
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs text-primary-foreground/60">
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Términos y Condiciones
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Cookies
            </a>
            
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-primary-foreground/10" />

        {/* Bottom Text */}
        <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © {currentYear} Polimarket. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Diseñado con amor para nuestros clientes
          </p>
        </div>

        {/* Extra Small Text */}
        <div className="mt-4 text-center">
          <p className="text-[10px] text-primary-foreground/30">
            Polimarket no se hace responsable por el contenido de terceros. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

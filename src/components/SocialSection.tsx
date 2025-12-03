import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
  { icon: Youtube, href: "#", label: "Youtube", color: "hover:text-red-500" },
];

const contactInfo = [
  { icon: Mail, text: "contacto@polimarket.com", label: "Email" },
  { icon: Phone, text: "+52 (55) 1234-5678", label: "Teléfono" },
  { icon: MapPin, text: "Ciudad de México, México", label: "Ubicación" },
];

const SocialSection = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Social Media */}
          <div className="animate-fade-up">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Síguenos en redes
            </h2>
            <p className="mt-4 text-muted-foreground">
              Mantente al día con nuestras últimas ofertas y novedades
            </p>
            
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`group flex h-14 w-14 items-center justify-center rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up-delay-1">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Información de contacto
            </h2>
            <p className="mt-4 text-muted-foreground">
              Estamos aquí para ayudarte
            </p>
            
            <div className="mt-8 space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 rounded-xl bg-card p-4 shadow-card transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-16 rounded-2xl bg-hero-gradient p-8 text-center shadow-lg md:p-12">
          <h3 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
            ¿Tienes alguna pregunta?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana para ayudarte con cualquier consulta que tengas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

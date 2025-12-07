import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import tiktokicon from "@/components/tiktokicon";


const socialLinks = [
  { icon: tiktokicon, href: "https://www.tiktok.com/@polimarket05?_r=1&_t=ZS-920JmBmHmqb", label: "tiktok", color: "hover:text-blue-500" },
  { icon: Instagram, href: "https://www.instagram.com/polimarket.ec?igsh=MXYxZnc5ZTluZnhtOQ==", label: "Instagram", color: "hover:text-pink-500" },
  { icon: MessageCircle, href: "https://chat.whatsapp.com/J7OYlWSrH3nHXkLEweqelz?mode=hqrt1", label: "WhatsApp", color: "hover:text-green-500" },
 
];

const contactInfo = [
  { icon: Mail, text: "jaarroba@espol.edu.ec", label: "Correo-Espol" },
  { icon: Phone, text: "+593 968349750", label: "Teléfono" },
  { icon: MapPin, text: "Guayaquil-Ecuador", label: "Ubicación" },
];

const SocialSection = () => {
  return (
    <section id="redes" className="bg-secondary py-20">
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
                  className={`group flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:scale-110" />
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
              ¡Estamos aquí para ayudarte!
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

        <div className="mt-16 flex flex-col gap-8 md:flex-row">
  
          {/* Extra Info */}
          <div className="flex-1 rounded-2xl bg-hero-gradient p-8 text-center shadow-lg md:p-12">
            <h3 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
              ¿Tienes alguna pregunta?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana para ayudarte con cualquier consulta que tengas.
            </p>
          </div>

          {/* WhatsApp Banner */}
          <div id="wasap" className="flex-1 rounded-xl bg-green-600 p-6 text-center text-white shadow-card">
            <h3 className="text-2xl font-bold">Únete a nuestro WhatsApp</h3>
            <p className="mt-2 text-white/90">
              Entra a nuestro grupo oficial y recibe novedades exclusivas.
            </p>

            <a
              href="https://chat.whatsapp.com/J7OYlWSrH3nHXkLEweqelz?mode=hqrt1"
              target="_blank"
              className="mt-4 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-green-700 shadow hover:bg-gray-100"
            >
              Únete al Grupo
            </a>
          </div>

        </div>



      </div>
    </section>
  );
};

export default SocialSection;

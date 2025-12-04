import carousel1 from "@/assets/comida.jpg";
import carousel2 from "@/assets/productos.jpg";
import carousel3 from "@/assets/servicios.jpg";
import carpas from "@/assets/carpas.jpg";


const images = [
  { src: carousel1, alt: "Productos" },
  { src: carousel2, alt: "Servicios" },
  { src: carousel3, alt: "Alimentos" },
  { src: carpas, alt: "Ferias" },

];

const ImageCarousel = () => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section id= "info" className="w-full overflow-hidden py-16 bg-muted/50">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-display text-foreground md:text-4xl">
          Descubre nuestras categorías
        </h2>
        <p className="mt-2 text-muted-foreground">
          Todo lo que necesitas en un solo lugar
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-right gap-6">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 overflow-hidden rounded-2xl shadow-card transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-64 object-cover md:h-80 md:w-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 font-display text-lg font-semibold text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.alt}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

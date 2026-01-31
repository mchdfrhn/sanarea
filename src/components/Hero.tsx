import { Link } from "react-router-dom";
import heroImage from "@/assets/model-hero.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sanarea-beige/50 to-transparent" />
      </div>

      <div className="container-padding w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 animate-fade-in">
              Premium Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 animate-fade-in-up">
              Elegance in
              <br />
              <span className="italic">Every Layer</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 animate-fade-in-delay-1">
              Hijab premium untuk muslimah modern. Dibuat dengan bahan berkualitas
              tinggi untuk kenyamanan sepanjang hari.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-2">
              <Link to="/shop" className="btn-primary">
                Shop Collection
              </Link>
              <Link to="/about" className="btn-ghost link-underline">
                Our Story
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-sanarea-beige/30 -rotate-3 rounded-sm" />
              <img
                src={heroImage}
                alt="SANARÉA Seera Shawl"
                className="relative w-full h-full object-cover object-top rounded-sm"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-background px-6 py-4 shadow-lg">
                <span className="block font-sans text-xs tracking-luxury uppercase text-muted-foreground">
                  New Arrival
                </span>
                <span className="block font-serif text-lg">Seera Shawl</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-2">
          Scroll
        </span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  );
};

export default Hero;

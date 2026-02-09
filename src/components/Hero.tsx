import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/model-hero.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial state
      gsap.set(
        [
          textRef.current?.children,
          imageRef.current,
          badgeRef.current,
          scrollRef.current,
        ],
        { opacity: 0 },
      );

      gsap.set(textRef.current?.children || [], { y: 50 });
      gsap.set(imageRef.current, { scale: 1.1, y: 20 });
      gsap.set(badgeRef.current, { y: 20, scale: 0.9 });
      gsap.set(scrollRef.current, { y: -20 });

      // Animation Timeline
      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
      })
        .to(
          textRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=1",
        )
        .to(
          badgeRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        )
        .to(
          scrollRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center bg-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sanarea-beige/50 to-transparent" />
      </div>

      <div className="container-padding w-full pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] md:min-h-screen">
          {/* Content */}
          <div
            ref={textRef}
            className="order-2 lg:order-1 text-center lg:text-left pb-10 lg:pb-0"
          >
            <span className="inline-block font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4">
              Koleksi Premium
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              Keanggunan di
              <br />
              <span className="italic">Setiap Helai</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8">
              Hijab premium untuk muslimah modern. Dibuat dengan bahan
              berkualitas tinggi untuk kenyamanan sepanjang hari.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/shop" className="btn-primary w-full sm:w-auto">
                Lihat Koleksi
              </Link>
              <Link to="/about" className="btn-ghost link-underline">
                Cerita Kami
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative mt-10 md:mt-0">
            <div
              ref={imageRef}
              className="relative aspect-[4/5] lg:aspect-[3/4] max-w-xs md:max-w-md mx-auto lg:max-w-none opacity-0"
            >
              <div className="absolute inset-0 bg-sanarea-beige/30 -rotate-3 rounded-sm" />
              <img
                src={heroImage}
                alt="SANARÉA Seera Shawl"
                className="relative w-full h-full object-cover object-top rounded-sm"
              />
              {/* Floating Badge */}
              <div
                ref={badgeRef}
                className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-background px-4 py-3 md:px-6 md:py-4 shadow-lg opacity-0"
              >
                <span className="block font-sans text-[10px] md:text-xs tracking-luxury uppercase text-muted-foreground">
                  Terbaru
                </span>
                <span className="block font-serif text-base md:text-lg">
                  Seera Shawl
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile screens to save space */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 flex flex-col items-center opacity-0 hidden md:flex"
      >
        <span className="font-sans text-sm tracking-wider uppercase text-muted-foreground mb-2">
          Gulir
        </span>
        <div className="w-px h-8 bg-border" />
      </div>
    </section>
  );
};

export default Hero;

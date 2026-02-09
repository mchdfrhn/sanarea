import { useRef } from "react";
import { Link } from "react-router-dom";
import { Instagram, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import aboutImage from "@/assets/model-about.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const BrandStatement = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Image Reveal Animation
      tl.fromTo(
        imageContainerRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power4.out",
        },
      )
        .from(
          imageRef.current,
          {
            scale: 1.2,
            duration: 1.2,
            ease: "power4.out",
          },
          "<",
        )
        // Content Animation
        .from(
          (contentRef.current?.children as HTMLCollection) || [],
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.8",
        );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="section-padding bg-sanarea-cream/10">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div
              ref={imageContainerRef}
              className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden"
            >
              <img
                ref={imageRef}
                src={aboutImage}
                alt="Sanaréa Philosophy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sanarea-brown/10 -z-10 hidden md:block" />
          </div>

          {/* Content Column */}
          <div
            ref={contentRef}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <span className="font-sans text-xs tracking-luxury uppercase text-sanarea-brown mb-6 block">
              Tentang Sanaréa
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Keanggunan dalam <br />
              <span className="italic text-sanarea-brown">Kesederhanaan</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-sans text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                Di Sanaréa, kami percaya bahwa kecantikan sejati terpancar dari
                rasa percaya diri dan kenyamanan. Setiap helai hijab yang kami
                ciptakan adalah perpaduan antara kualitas premium dan desain
                yang timeless.
              </p>
              <p>
                Kami hadir untuk menemani perjalanan Anda—memberikan sentuhan
                kemewahan yang bersahaja untuk setiap momen berharga dalam hidup
                Anda.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/about"
                className="btn-primary group w-fit flex items-center whitespace-nowrap"
              >
                <span>Cerita Kami</span>
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </Link>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 font-sans text-sm tracking-wider uppercase text-sanarea-charcoal hover:text-sanarea-brown transition-colors"
              >
                <Instagram size={18} />
                <span>@sanarea.id</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;

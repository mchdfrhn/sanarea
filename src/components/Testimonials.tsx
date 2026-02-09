import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpeg";
import testimonial2 from "@/assets/testimonial-2.jpeg";
import testimonial3 from "@/assets/testimonial-3.jpeg";
import testimonial4 from "@/assets/testimonial-4.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    image: testimonial1,
    name: "Aisyah R.",
    text: "Bahannya lembut banget dan jatuhnya cantik. Suka banget sama warna-warnanya yang timeless!",
  },
  {
    image: testimonial2,
    name: "Fatimah S.",
    text: "Sudah repeat order berkali-kali. Kualitas premium dengan harga yang reasonable.",
  },
  {
    image: testimonial3,
    name: "Zahra M.",
    text: "Packagingnya cantik, cocok untuk hadiah. Hijabnya juga nyaman dipakai seharian.",
  },
  {
    image: testimonial4,
    name: "Khadijah A.",
    text: "Akhirnya nemu hijab yang gak bikin gerah. Breathable dan lightweight banget!",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="section-padding bg-secondary/30">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
            Apa Kata Mereka
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Ulasan Sahabat <span className="italic">Sanaréa</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
                >
                  <div className="bg-background p-8 h-full flex flex-col items-center text-center group hover:shadow-lg transition-shadow duration-500 cursor-grab active:cursor-grabbing">
                    <div className="aspect-square w-24 mb-6 overflow-hidden rounded-full bg-card">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover img-zoom"
                      />
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 italic flex-grow">
                      "{testimonial.text}"
                    </p>
                    <p className="font-serif text-base font-medium">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-sanarea-charcoal hover:text-sanarea-cream transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-sanarea-charcoal hover:text-sanarea-cream transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

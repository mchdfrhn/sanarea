import { useRef } from "react";
import { Sparkles, Wind, Palette, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Award,
    title: "Bahan Premium",
    description:
      "Bahan pilihan berkualitas tinggi untuk sentuhan mewah di kulit",
  },
  {
    icon: Wind,
    title: "Sejuk & Ringan",
    description: "Ringan dan sirkulasi udara optimal untuk kenyamanan seharian",
  },
  {
    icon: Sparkles,
    title: "Mudah Dibentuk",
    description: "Mudah dibentuk dengan berbagai gaya untuk tampilan versatile",
  },
  {
    icon: Palette,
    title: "Warna Cantik",
    description:
      "Pilihan warna cantik yang timeless dan cocok untuk segala acara",
  },
];

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(
    () => {
      gsap.from(".feature-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  const onEnter = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector(".feature-icon");
    gsap.to(icon, {
      scale: 1.2,
      rotate: 10,
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  });

  const onLeave = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const icon = e.currentTarget.querySelector(".feature-icon");
    gsap.to(icon, {
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  });

  return (
    <section ref={containerRef} className="section-padding bg-secondary/30">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
            Mengapa Memilih Kami
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Dibuat dengan <span className="italic">Hati</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-item text-center group cursor-default"
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <div className="feature-icon w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-background rounded-full group-hover:bg-sanarea-beige transition-colors duration-300">
                <feature.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-sanarea-brown"
                />
              </div>
              <h3 className="font-serif text-lg mb-3">{feature.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

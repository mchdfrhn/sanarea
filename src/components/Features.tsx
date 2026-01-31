import { Sparkles, Wind, Palette, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Fabric",
    description: "Bahan pilihan berkualitas tinggi untuk sentuhan mewah di kulit",
  },
  {
    icon: Wind,
    title: "Breathable & Lightweight",
    description: "Ringan dan sirkulasi udara optimal untuk kenyamanan seharian",
  },
  {
    icon: Sparkles,
    title: "Easy to Style",
    description: "Mudah dibentuk dengan berbagai gaya untuk tampilan versatile",
  },
  {
    icon: Palette,
    title: "Beautiful Colors",
    description: "Pilihan warna cantik yang timeless dan cocok untuk segala occasion",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Crafted with <span className="italic">Care</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-background rounded-full group-hover:bg-sanarea-beige transition-colors duration-300">
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

import testimonial1 from "@/assets/testimonial-1.jpeg";
import testimonial2 from "@/assets/testimonial-2.jpeg";
import testimonial3 from "@/assets/testimonial-3.jpeg";
import testimonial4 from "@/assets/testimonial-4.jpeg";

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
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            What They <span className="italic">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background p-6 group hover:shadow-lg transition-shadow duration-500"
            >
              <div className="aspect-square mb-6 overflow-hidden bg-card">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-serif text-base">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const BrandStatement = () => {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-6 block">
            Our Philosophy
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8">
            "Kami percaya bahwa setiap muslimah layak merasakan
            <span className="italic"> keanggunan </span>dalam kesederhanaan.
            SANARÉA hadir untuk menjadi bagian dari
            <span className="italic"> perjalanan </span>Anda."
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/about" className="btn-outline">
              Discover Our Story
            </Link>
            <a
              href="https://instagram.com/sanarea"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-sans text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={18} />
              <span>Follow Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;

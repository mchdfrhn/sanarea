import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImage from "@/assets/model-hero.jpeg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block animate-fade-in">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              The Story of <span className="italic">SANARÉA</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground animate-fade-in-delay-1">
              Keanggunan dalam kesederhanaan
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] bg-card overflow-hidden">
              <img
                src={heroImage}
                alt="SANARÉA Story"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="pb-16 md:pb-24">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8 text-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">
                  Bermula dari <span className="italic">Kecintaan</span>
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  SANARÉA lahir dari kecintaan mendalam terhadap fashion muslim
                  yang elegan dan berkualitas. Kami percaya bahwa setiap
                  muslimah layak tampil cantik tanpa mengorbankan kenyamanan.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">
                  Filosofi <span className="italic">Kami</span>
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Kesederhanaan adalah bentuk keanggunan tertinggi. Setiap
                  produk SANARÉA dirancang dengan perhatian terhadap detail,
                  menggunakan bahan premium yang nyaman dipakai sepanjang hari.
                  Warna-warna yang kami pilih adalah warna yang timeless,
                  mencerminkan ketenangan dan kepercayaan diri.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">
                  Komitmen <span className="italic">Kualitas</span>
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Setiap helai hijab SANARÉA melalui proses quality control yang
                  ketat. Kami hanya menggunakan bahan-bahan terbaik yang
                  breathable, lightweight, dan mudah dibentuk. Kepuasan Anda
                  adalah prioritas utama kami.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
              <div className="text-center">
                <span className="font-serif text-3xl md:text-4xl block mb-2">
                  100%
                </span>
                <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground">
                  Premium Quality
                </span>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl md:text-4xl block mb-2">
                  1000+
                </span>
                <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground">
                  Happy Customers
                </span>
              </div>
              <div className="text-center">
                <span className="font-serif text-3xl md:text-4xl block mb-2">
                  11+
                </span>
                <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground">
                  Color Options
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Link to="/shop" className="btn-primary">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

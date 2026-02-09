import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import heroImage from "@/assets/model-about.jpeg";
import storyImage1 from "@/assets/product-rose-shawl.jpg"; // Reusing product images for story
import storyImage2 from "@/assets/model-hero.jpeg";
import { Heart, ShieldCheck, Users, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero Animation
      gsap.from(".hero-text > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      });

      // Story Sections Animation
      gsap.utils.toArray<HTMLElement>(".story-section").forEach((section) => {
        gsap.from(section.querySelectorAll(".story-content > *"), {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });

        gsap.from(section.querySelector(".story-image"), {
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          clipPath: "inset(0 100% 0 0)",
          duration: 1.2,
          ease: "power4.out",
        });
      });

      // Values Animation
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="hero-text text-center lg:text-left order-2 lg:order-1">
              <span className="font-sans text-xs tracking-luxury uppercase text-sanarea-brown mb-4 block">
                Tentang Kami
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Menenun <span className="italic text-sanarea-brown">Kisah</span>{" "}
                <br />
                dalam Setiap Helai
              </h1>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Sanaréa bukan sekadar jenama fashion. Kami adalah manifestasi
                dari impian setiap muslimah untuk tampil anggun, percaya diri,
                dan tetap menjunjung tinggi nilai-nilai kesantunan.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="hero-image aspect-[4/5] rounded-lg overflow-hidden relative z-10">
                <img
                  src={heroImage}
                  alt="Sanaréa Hero"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Abstract decorative shape */}
              <div className="absolute top-10 -right-10 w-3/4 h-3/4 bg-sanarea-cream/30 -z-0 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 1: History */}
      <section className="story-section py-16 md:py-24 bg-sanarea-cream/10">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="story-image rounded-sm order-1 md:order-1 overflow-hidden">
              <img
                src={storyImage2}
                alt="Awal Mula"
                className="w-full h-auto hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="story-content order-2 md:order-2 md:pl-10">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Bermula dari{" "}
                <span className="italic text-sanarea-brown">Cinta</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>
                  Perjalanan kami dimulai dari sebuah pengamatan sederhana:
                  betapa sulitnya menemukan hijab yang tidak hanya indah
                  dipandang, tetapi juga nyaman dikenakan sepanjang hari.
                </p>
                <p>
                  Sanaréa lahir untuk menjawab keresahan itu. Dengan riset
                  mendalam mengenai bahan dan tekstur, kami menghadirkan koleksi
                  yang mengutamakan kenyamanan tanpa sedikitpun mengorbankan
                  estetika.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2: Philosophy */}
      <section className="story-section py-16 md:py-24">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="story-content order-2 md:order-1 md:pr-10">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Filosofi{" "}
                <span className="italic text-sanarea-brown">Kesederhanaan</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                <p>
                  "Simplicity is the ultimate sophistication." Kami percaya
                  bahwa keindahan yang sejati tidak perlu berteriak. Ia hadir
                  dalam keheningan detail yang terjaga dan kualitas yang
                  berbicara.
                </p>
                <p>
                  Warna-warna bumi (earth tones) dan pastel yang menjadi ciri
                  khas Sanaréa dipilih untuk memancarkan aura ketenangan dan
                  kelembutan bagi siapa saja yang mengenakannya.
                </p>
              </div>
            </div>
            <div className="story-image aspect-[4/3] overflow-hidden rounded-sm order-1 md:order-2">
              <img
                src={storyImage1}
                alt="Filosofi Desain"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values / Stats */}
      <section className="py-20 bg-sanarea-charcoal text-sanarea-cream">
        <div className="container-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-luxury uppercase opacity-70 mb-4 block">
              Nilai-Nilai Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl">
              Mengapa Memilih <span className="italic">Sanaréa?</span>
            </h2>
          </div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="value-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 mx-auto bg-sanarea-brown/20 flex items-center justify-center rounded-full mb-6 text-sanarea-brown">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-serif text-xl mb-3">Kualitas Premium</h3>
              <p className="font-sans text-sm opacity-70 leading-relaxed">
                Setiap produk melalui 3 tahap quality control ketat untuk
                memastikan hanya yang terbaik yang sampai ke tangan Anda.
              </p>
            </div>

            {/* Card 2 */}
            <div className="value-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 mx-auto bg-sanarea-brown/20 flex items-center justify-center rounded-full mb-6 text-sanarea-brown">
                <Users size={24} />
              </div>
              <h3 className="font-serif text-xl mb-3">Komunitas Positif</h3>
              <p className="font-sans text-sm opacity-70 leading-relaxed">
                Bergabunglah dengan lebih dari 1000+ #SanareaSister yang telah
                menemukan kenyamanan dalam berhijab.
              </p>
            </div>

            {/* Card 3 */}
            <div className="value-card p-8 border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 mx-auto bg-sanarea-brown/20 flex items-center justify-center rounded-full mb-6 text-sanarea-brown">
                <Heart size={24} />
              </div>
              <h3 className="font-serif text-xl mb-3">Dibuat dengan Cinta</h3>
              <p className="font-sans text-sm opacity-70 leading-relaxed">
                Dari pemilihan benang hingga jahitan terakhir, semuanya
                dikerjakan dengan penuh dedikasi dan rasa cinta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-8 h-8 mx-auto text-sanarea-brown mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Jadilah Bagian dari Cerita Kami
            </h2>
            <p className="font-sans text-muted-foreground mb-10">
              Temukan koleksi yang akan menemani setiap langkah perjalanan Anda.
            </p>
            <Link to="/shop" className="btn-primary">
              Lihat Koleksi Lengkap
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

import { useRef } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/data/products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // tl.from(".section-header > *", {
      //   y: 30,
      //   opacity: 0,
      //   duration: 0.8,
      //   stagger: 0.2,
      //   ease: "power3.out",
      // }).from(
      //   ".product-grid > *",
      //   {
      //     y: 50,
      //     opacity: 0,
      //     duration: 0.8,
      //     stagger: 0.1,
      //     ease: "power3.out",
      //   },
      //   "-=0.4",
      // );
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="section-padding">
      <div className="container-padding">
        <div className="section-header flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
              Koleksi Kami
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              Produk <span className="italic">Unggulan</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-6 md:mt-0 font-sans text-sm tracking-wider uppercase link-underline"
          >
            Lihat Semua Produk
          </Link>
        </div>

        <div className="product-grid grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {featuredProducts.length === 0 && (
            <p className="col-span-4 text-center">
              Tidak ada produk unggulan saat ini.
            </p>
          )}
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              colors={product.colors}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

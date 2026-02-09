import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type FilterCategory = "all" | "pashmina" | "shawl";

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  useGSAP(
    () => {
      // Hero Animation
      gsap.from(".shop-hero > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      // Filter Buttons Animation
      gsap.from(".filter-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.6,
      });

      // Products Animation - Retrigger on filter change if needed,
      // but for simplicity we animate the container or items on mount/scroll
      gsap.from(".product-grid-item", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".products-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef, dependencies: [activeFilter] }, // Re-run when filter changes to animate new items
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container-padding text-center shop-hero">
          <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
            Koleksi Kami
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
            Semua <span className="italic">Produk</span>
          </h1>
          <p className="font-sans text-base text-muted-foreground max-w-md mx-auto mt-4">
            Koleksi hijab premium yang dirancang untuk muslimah modern
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container-padding">
          <div className="flex items-center justify-center space-x-8 shop-filters">
            {(["all", "shawl", "pashmina"] as FilterCategory[]).map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-btn font-sans text-sm tracking-wider uppercase transition-all duration-300 pb-2 border-b-2 ${
                    activeFilter === filter
                      ? "border-sanarea-charcoal opacity-100"
                      : "border-transparent opacity-50 hover:opacity-75"
                  }`}
                >
                  {filter === "all" ? "Semua" : filter}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding pt-8">
        <div className="container-padding">
          <div className="products-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-grid-item">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  colors={product.colors}
                  isNew={product.isNew}
                />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-sans text-muted-foreground">
                Tidak ada produk yang tersedia untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;

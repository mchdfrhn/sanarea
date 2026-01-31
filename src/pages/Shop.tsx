import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

type FilterCategory = "all" | "pashmina" | "shawl";

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="container-padding text-center">
          <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block animate-fade-in">
            Our Collection
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
            Shop <span className="italic">All</span>
          </h1>
          <p className="font-sans text-base text-muted-foreground max-w-md mx-auto mt-4 animate-fade-in-delay-1">
            Koleksi hijab premium yang dirancang untuk muslimah modern
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container-padding">
          <div className="flex items-center justify-center space-x-8">
            {(["all", "shawl", "pashmina"] as FilterCategory[]).map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`font-sans text-sm tracking-wider uppercase transition-all duration-300 pb-2 border-b-2 ${
                    activeFilter === filter
                      ? "border-sanarea-charcoal opacity-100"
                      : "border-transparent opacity-50 hover:opacity-75"
                  }`}
                >
                  {filter === "all" ? "All" : filter}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding pt-8">
        <div className="container-padding">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
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

import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
              Our Collection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              Featured <span className="italic">Pieces</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-6 md:mt-0 font-sans text-sm tracking-wider uppercase link-underline"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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

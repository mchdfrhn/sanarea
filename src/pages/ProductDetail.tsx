import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Truck, RefreshCw, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Produk tidak ditemukan</h1>
          <Link to="/shop" className="btn-primary">
            Kembali ke Shop
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const whatsappMessage = encodeURIComponent(
    `Halo SANARÉA! Saya tertarik dengan produk ${product.name} (${formatPrice(product.price)}). Apakah masih tersedia?`
  );

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-24 md:pt-28 pb-4">
        <div className="container-padding">
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Shop</span>
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="pb-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div className="animate-fade-in">
              <div className="aspect-[3/4] bg-card overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="animate-fade-in-up lg:py-8">
              {product.isNew && (
                <span className="inline-block font-sans text-xs tracking-luxury uppercase bg-sanarea-charcoal text-sanarea-cream px-3 py-1 mb-4">
                  New Arrival
                </span>
              )}
              {product.isBestseller && (
                <span className="inline-block font-sans text-xs tracking-luxury uppercase bg-sanarea-gold text-sanarea-charcoal px-3 py-1 mb-4">
                  Bestseller
                </span>
              )}

              <h1 className="font-serif text-3xl md:text-4xl mb-4">
                {product.name}
              </h1>
              <p className="font-sans text-2xl text-sanarea-brown mb-6">
                {formatPrice(product.price)}
              </p>

              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4">
                  Warna Tersedia
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: color }}
                      />
                      <span className="font-sans text-sm">
                        {product.colorNames[index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="mb-8 space-y-3">
                <div className="flex">
                  <span className="font-sans text-sm text-muted-foreground w-24">
                    Material
                  </span>
                  <span className="font-sans text-sm">{product.material}</span>
                </div>
                <div className="flex">
                  <span className="font-sans text-sm text-muted-foreground w-24">
                    Ukuran
                  </span>
                  <span className="font-sans text-sm">{product.size}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center space-x-3"
              >
                <MessageCircle size={18} />
                <span>Order via WhatsApp</span>
              </a>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <Truck size={20} className="mx-auto mb-2 text-muted-foreground" />
                  <span className="font-sans text-xs text-muted-foreground">
                    Pengiriman Cepat
                  </span>
                </div>
                <div className="text-center">
                  <RefreshCw size={20} className="mx-auto mb-2 text-muted-foreground" />
                  <span className="font-sans text-xs text-muted-foreground">
                    Easy Return
                  </span>
                </div>
                <div className="text-center">
                  <Shield size={20} className="mx-auto mb-2 text-muted-foreground" />
                  <span className="font-sans text-xs text-muted-foreground">
                    100% Original
                  </span>
                </div>
              </div>

              {/* Care Instructions */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4">
                  Cara Perawatan
                </h3>
                <ul className="space-y-2">
                  {product.careInstructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="font-sans text-sm text-muted-foreground flex items-start"
                    >
                      <span className="mr-2">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container-padding">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-12">
              Anda Mungkin <span className="italic">Suka</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  colors={p.colors}
                  isNew={p.isNew}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;

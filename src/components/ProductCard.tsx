import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  colors?: string[];
  isNew?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  colors = [],
  isNew = false,
}: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/product/${id}`} className="product-card block group">
      <div className="relative aspect-[3/4] overflow-hidden bg-card">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover img-zoom"
        />
        {isNew && (
          <span className="absolute top-4 left-4 font-sans text-xs tracking-luxury uppercase bg-sanarea-charcoal text-sanarea-cream px-3 py-1">
            New
          </span>
        )}
        <div className="absolute inset-0 bg-sanarea-charcoal/0 group-hover:bg-sanarea-charcoal/10 transition-colors duration-500" />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-serif text-base mb-1 group-hover:opacity-70 transition-opacity">
          {name}
        </h3>
        <p className="font-sans text-sm text-muted-foreground mb-3">
          {formatPrice(price)}
        </p>
        {colors.length > 0 && (
          <div className="flex items-center justify-center space-x-2">
            {colors.slice(0, 5).map((color, index) => (
              <span
                key={index}
                className="w-3 h-3 rounded-full border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
            {colors.length > 5 && (
              <span className="font-sans text-xs text-muted-foreground">
                +{colors.length - 5}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

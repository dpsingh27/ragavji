import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-xl bg-card border border-border card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
        <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-base font-semibold text-card-foreground transition-colors group-hover:text-primary line-clamp-2">
          {product.name}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{product.subCategory}</p>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Details →
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

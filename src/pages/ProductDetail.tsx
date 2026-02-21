import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Leaf } from "lucide-react";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-24">
          <h1 className="font-heading text-2xl font-bold text-foreground">Product Not Found</h1>
          <Link to="/" className="mt-4 text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 lg:px-8 lg:py-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 animate-fade-in-up">
          {/* Image */}
          <div className="overflow-hidden rounded-xl border border-border card-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="h-full max-h-[500px] w-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              {product.category}
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{product.subCategory}</p>

            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 hero-shadow">
                <Leaf className="h-4 w-4" />
                Enquire Now
              </button>
              <Link
                to="/#products"
                className="rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

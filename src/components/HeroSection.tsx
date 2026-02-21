import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Lush green farmland with growing crops"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      <div className="container relative mx-auto px-4 py-24 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <p className="mb-3 inline-block rounded-full bg-secondary/20 px-4 py-1 text-sm font-semibold text-primary-foreground backdrop-blur-sm animate-fade-in">
            🌾 India's Trusted Seed Partner
          </p>
          <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
            Empowering Farmers with Superior Quality Seeds
          </h1>
          <p className="mb-8 max-w-lg text-lg text-primary-foreground/85 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Raghav Ji Agro Seeds brings 45+ years of research experience to deliver high-yield hybrid and improved seed varieties for field and vegetable crops across India.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={scrollToProducts}
              className="rounded-lg bg-secondary px-8 py-3 font-semibold text-secondary-foreground transition-all hover:opacity-90 hero-shadow"
            >
              Explore Products
            </button>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-lg border border-primary-foreground/30 px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

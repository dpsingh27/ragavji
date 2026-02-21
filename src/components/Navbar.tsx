import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/#products" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("/#")) {
      const id = path.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <span className="font-heading text-lg font-bold text-foreground">
              Raghav Ji
            </span>
            <span className="block text-xs text-muted-foreground leading-tight">
              Agro Seeds Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.path.startsWith("/#") ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to="/#contact"
            onClick={() => handleNavClick("/#contact")}
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hero-shadow"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-foreground md:hidden hover:bg-muted transition-colors"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.path.startsWith("/#") ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

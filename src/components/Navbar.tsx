import { useState } from "react";
import { Menu, X, ChevronDown, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "AI Solutions", href: "/services/agentic-ai-engineering" },
  { label: "Company", href: "/about-us" },
  { label: "Contact", href: "/#talk-to-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo - +plus */}
        <a href="/#home" className="flex items-center gap-0.5 text-foreground hover:text-primary transition-colors">
          <Plus strokeWidth={4} className="h-6 w-6 text-primary" />
          <span className="font-heading font-black text-2xl tracking-tighter mt-1">plus</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#home"
            className="flex items-center gap-1 text-sm text-foreground border border-primary/60 rounded-full px-5 py-2 hover:bg-primary/10 transition-colors"
            onClick={() => setMobileServicesOpen(false)}
          >
            Home
          </a>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-foreground border border-primary/60 rounded-full px-5 py-2 hover:bg-primary/10 transition-colors"
            >
              Services
              <ChevronDown size={14} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
            </button>

            <div className="invisible absolute left-0 top-full min-w-[260px] rounded-2xl border border-primary/50 bg-background/95 backdrop-blur-xl p-2 opacity-0 shadow-card transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block rounded-xl px-4 py-3 text-sm text-foreground hover:bg-primary/15 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.filter((link) => link.label !== "Home").map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-sm text-foreground border border-primary/60 rounded-full px-5 py-2 hover:bg-primary/10 transition-colors"
                onClick={() => setMobileServicesOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-1 text-sm text-foreground border border-primary/60 rounded-full px-5 py-2 hover:bg-primary/10 transition-colors"
                onClick={() => setMobileServicesOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile right side: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/90 backdrop-blur-xl border-t border-border">
          <div className="container py-4 flex flex-col gap-3">
            <a
              href="/#home"
              className="flex items-center gap-1 text-foreground border border-primary/60 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
              onClick={() => {
                setOpen(false);
                setMobileServicesOpen(false);
              }}
            >
              Home
            </a>

            <button
              type="button"
              className="flex items-center justify-between text-foreground border border-primary/60 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
            >
              <span>Services</span>
              <ChevronDown size={14} className={mobileServicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>

            {mobileServicesOpen && (
              <div className="px-2 pb-1 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block rounded-xl px-4 py-2.5 border border-border/70 text-foreground hover:bg-primary/10 transition-colors"
                    onClick={() => {
                      setOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.filter((link) => link.label !== "Home").map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1 text-foreground border border-primary/60 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
                  onClick={() => {
                    setOpen(false);
                    setMobileServicesOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-1 text-foreground border border-primary/60 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
                  onClick={() => {
                    setOpen(false);
                    setMobileServicesOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

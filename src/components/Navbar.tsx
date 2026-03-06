import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "AI Solutions", href: "/services/agentic-ai-engineering" },
  { label: "Company", href: "/about-us" },
  { label: "Contact", href: "/#talk-to-us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo - dot grid */}
        <a href="/#home" className="flex items-center">
          <div className="grid grid-cols-2 gap-1.5">
            <span className="w-3 h-3 rounded-full bg-foreground" />
            <span className="w-3 h-3 rounded-full bg-foreground" />
            <span className="w-3 h-3 rounded-full bg-foreground" />
            <span className="w-3 h-3 rounded-full bg-foreground" />
            <span className="w-3 h-3 rounded-full bg-foreground" />
            <span className="w-3 h-3 rounded-full bg-foreground" />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#home"
            className="flex items-center gap-1 text-sm text-foreground border border-primary/60 rounded-full px-5 py-2 hover:bg-primary/10 transition-colors"
            onClick={() => setServicesOpen(false)}
          >
            Home
          </a>

          <div className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex items-center gap-1 text-sm text-foreground border border-primary/60 rounded-full px-5 py-2 hover:bg-primary/10 transition-colors"
            >
              Services
              <ChevronDown size={14} className={servicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-[calc(100%+10px)] min-w-[260px] rounded-2xl border border-primary/50 bg-background/95 backdrop-blur-xl p-2 shadow-card">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block rounded-xl px-4 py-3 text-sm text-foreground hover:bg-primary/15 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.filter((link) => link.label !== "Home").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-sm text-foreground border border-primary/60 rounded-full px-5 py-2 hover:bg-primary/10 transition-colors"
              onClick={() => setServicesOpen(false)}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
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
                setServicesOpen(false);
              }}
            >
              Home
            </a>

            <button
              type="button"
              className="flex items-center justify-between text-foreground border border-primary/60 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
              onClick={() => setServicesOpen((prev) => !prev)}
            >
              <span>Services</span>
              <ChevronDown size={14} className={servicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>

            {servicesOpen && (
              <div className="px-2 pb-1 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="block rounded-xl px-4 py-2.5 border border-border/70 text-foreground hover:bg-primary/10 transition-colors"
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.filter((link) => link.label !== "Home").map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-foreground border border-primary/60 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
                onClick={() => {
                  setOpen(false);
                  setServicesOpen(false);
                }}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

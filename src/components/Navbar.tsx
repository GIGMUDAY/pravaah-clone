import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services", hasDropdown: true },
  { label: "AI Solutions", href: "/#about", hasDropdown: true },
  { label: "Company", href: "/#projects", hasDropdown: true },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-sm text-foreground border border-primary/60 rounded-full px-5 py-2 hover:bg-primary/10 transition-colors"
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-foreground border border-primary/60 rounded-full px-5 py-2.5 hover:bg-primary/10 transition-colors"
                onClick={() => setOpen(false)}
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

import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { Plus } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-0.5 text-foreground hover:text-primary transition-colors mb-3">
              <Plus strokeWidth={4} className="h-6 w-6 text-primary" />
              <span className="font-heading font-black text-2xl tracking-tighter mt-1">plus</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with Agentic AI, digital transformation, and innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/services/agentic-ai-engineering" className="hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="/about-us" className="hover:text-primary transition-colors">Company</a></li>
              <li><a href="/#talk-to-us" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} plus Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

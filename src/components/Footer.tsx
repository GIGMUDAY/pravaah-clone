const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold text-gradient mb-3">Pravaah Consulting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with Agentic AI, digital transformation, and innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI & ML Services</li>
              <li>Digital Transformation</li>
              <li>Custom Software</li>
              <li>Low Code / No Code</li>
              <li>E-commerce Solutions</li>
              <li>Marketing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pravaah Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

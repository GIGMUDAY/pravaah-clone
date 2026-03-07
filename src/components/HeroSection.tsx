import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-4 text-foreground">
            Pravaah Consulting
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Empowering Your Business with Agentic AI
          </p>

          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base rounded-lg"
          >
            Book a Consultation
          </Button>
        </motion.div>
      </div>

      {/* Floating Contact Us button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 bg-gradient-primary text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-glow hover:scale-105 transition-transform"
      >
        <span className="grid grid-cols-2 gap-0.5">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className="w-2 h-2 rounded-full bg-black" />
        </span>
        Contact Us
      </a>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const words = ["Imagine", "Strategize", "Architect", "Design", "Build", "Execute", "Measure", "Reimagine"];

const stats = [
  { value: "10+", label: "Solutions" },
  { value: "50+", label: "Core Team" },
  { value: "100+", label: "Happy Clients" },
  { value: "250+", label: "Projects Delivered" },
];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-lg md:text-xl font-heading text-primary mb-4">
            Pravaah Consulting
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Empowering Your Business with{" "}
            <span className="text-gradient">Agentic AI</span>
          </h1>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-muted-foreground text-lg">We</span>
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-primary font-heading font-semibold text-xl md:text-2xl"
            >
              {words[wordIndex]}
            </motion.span>
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground font-semibold gap-2">
              Learn More <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

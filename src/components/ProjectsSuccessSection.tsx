import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import productEngImg from "@/assets/service-product-engineering.jpg";
import agenticAiImg from "@/assets/service-agentic-ai.jpg";
import ecommerceImg from "@/assets/service-ecommerce.jpg";

const projects = [
  {
    title: "The Love of people",
    image: productEngImg,
  },
  {
    title: "NeuroPulse AI",
    image: agenticAiImg,
  },
  {
    title: "CartWave Commerce",
    image: ecommerceImg,
  },
];

const ProjectsSuccessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextProject();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextProject]);

  const activeProject = projects[activeIndex];

  const handleManualNav = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    if (direction === "prev") prevProject();
    else nextProject();

    // Resume autoplay after a delay
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-heading font-bold mb-12 text-primary-foreground text-center lg:text-left"
        >
          Our Projects &amp; Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr_auto_auto] items-center gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h3 className="text-xl md:text-3xl font-heading font-semibold text-primary-foreground mb-6">
              Engineering the Future: Our Portfolio of High-Impact Solutions
            </h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Explore how Pravaah Consulting empowers global enterprises to ignite growth through
              transformative product engineering services. From Agentic AI and custom software
              development to high-level digital strategy, our work showcases the measurable business
              value we deliver. Join over 100 satisfied clients who have scaled with our future-ready,
              accelerated solutions.
            </p>
          </motion.div>

          <button
            type="button"
            onClick={() => handleManualNav("prev")}
            aria-label="Previous project"
            className="mx-auto lg:mx-0 h-14 w-14 rounded-full bg-primary-foreground text-primary hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg z-10"
          >
            <ArrowLeft size={24} />
          </button>

          <div className="w-full relative min-h-[300px] flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)", x: 50 }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)", x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="rounded-2xl overflow-hidden border-4 border-primary-foreground/20 bg-background p-2 shadow-2xl">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full aspect-[16/9] object-cover rounded-xl"
                  />
                </div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-3xl md:text-5xl font-heading font-bold mt-8 text-primary-foreground"
                >
                  {activeProject.title}
                </motion.h3>
              </motion.div>
            </AnimatePresence>

            {/* Pagination dots */}
            <div className="flex gap-2 mt-6">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/40"}`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleManualNav("next")}
            aria-label="Next project"
            className="mx-auto lg:mx-0 h-14 w-14 rounded-full bg-primary-foreground text-primary hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg z-10"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSuccessSection;

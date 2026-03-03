import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import productEngImg from "@/assets/service-product-engineering.jpg";
import agenticAiImg from "@/assets/service-agentic-ai.jpg";
import ecommerceImg from "@/assets/service-ecommerce.jpg";

const projects = [
  {
    title: "Polaris Healthcare",
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

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const activeProject = projects[activeIndex];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-heading font-bold mb-14"
        >
          Our Projects &amp; Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr_auto] items-center gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-foreground/95 text-lg leading-relaxed mb-8">
              Explore how Pravaah Consulting empowers businesses across industries and sizes to ignite growth through transformative solutions in Agentic AI, custom software development, and digital strategy. Our portfolio showcases real-world success stories and strategic partnerships that drive measurable business value.
            </p>
            <p className="text-foreground/95 text-lg leading-relaxed">
              Join over 100 satisfied clients who have experienced impactful outcomes and future-ready solutions delivered with acceleration and expertise.
            </p>
          </motion.div>

          <button
            type="button"
            onClick={prevProject}
            aria-label="Previous project"
            className="mx-auto lg:mx-0 h-14 w-14 rounded-full bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 flex items-center justify-center"
          >
            <ArrowLeft size={22} />
          </button>

          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="rounded-[28px] overflow-hidden border border-border/60 bg-card">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
            <h3 className="text-center text-3xl font-heading font-bold mt-7">
              {activeProject.title}
            </h3>
          </motion.div>

          <button
            type="button"
            onClick={nextProject}
            aria-label="Next project"
            className="mx-auto lg:mx-0 h-14 w-14 rounded-full bg-primary text-primary-foreground hover:brightness-110 transition-all duration-200 flex items-center justify-center"
          >
            <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSuccessSection;

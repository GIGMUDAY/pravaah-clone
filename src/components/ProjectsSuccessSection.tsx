import { useState } from "react";
import { motion } from "framer-motion";
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

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const activeProject = projects[activeIndex];

  return (
    <section
      className="py-24"
      style={{
        background:
          "linear-gradient(180deg, hsl(20 98% 35%) 0%, hsl(15 95% 22%) 58%, hsl(220 25% 7%) 100%)",
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-heading font-bold mb-12 text-white"
        >
          Our Projects &amp; Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr_auto_auto] items-center gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h3 className="text-xl md:text-3xl font-heading font-semibold text-white mb-6">
              Engineering the Future: Our Portfolio of High-Impact Solutions
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              Explore how Pravaah Consulting empowers global enterprises to ignite growth through
              transformative product engineering services. From Agentic AI and custom software
              development to high-level digital strategy, our work showcases the measurable business
              value we deliver. Join over 100 satisfied clients who have scaled with our future-ready,
              accelerated solutions.
            </p>
          </motion.div>

          <button
            type="button"
            onClick={prevProject}
            aria-label="Previous project"
            className="mx-auto lg:mx-0 h-12 w-12 rounded-full bg-white/90 text-[hsl(20_98%_35%)] hover:bg-white transition-all duration-200 flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>

          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="rounded-lg overflow-hidden bg-[#e9dfdb] p-4 md:p-6">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
            <h3 className="text-center text-3xl md:text-5xl font-heading font-bold mt-6 text-white">
              {activeProject.title}
            </h3>
          </motion.div>

          <button
            type="button"
            onClick={nextProject}
            aria-label="Next project"
            className="mx-auto lg:mx-0 h-12 w-12 rounded-full bg-white/90 text-[hsl(20_98%_35%)] hover:bg-white transition-all duration-200 flex items-center justify-center"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSuccessSection;

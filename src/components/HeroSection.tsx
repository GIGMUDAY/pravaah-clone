import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 44, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: "easeOut" } },
};

const btnVariants = {
  hidden: { opacity: 0, scale: 0.88, filter: "blur(6px)" },
  show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.65, ease: "easeOut" } },
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const contentBlur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
      </motion.div>

      <motion.div
        className="container relative z-10 flex flex-col items-center text-center pt-24 pb-16"
        style={{ y: contentY, opacity: contentOpacity, filter: contentBlur }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-4 text-foreground"
          >
            Pravaah Consulting
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Empowering Your Business with Agentic AI
          </motion.p>

          <motion.div variants={btnVariants}>
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base rounded-lg shadow-glow hover:scale-105 transition-transform"
            >
              Book a Consultation
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

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

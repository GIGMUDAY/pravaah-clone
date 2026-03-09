import { useRef } from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    num: "01",
    title: "Healthcare",
    hook: "Buried under documentation? Manual records? Workflow chaos?",
    desc: "We design AI systems that reduce burnout, eliminate paperwork overload, and improve patient outcomes. Our Healthcare AI Solutions include:",
    items: [
      "AI Medical Transcription & Automated Clinical Summaries",
      "Intelligent Patient Management Systems",
      "AI Treatment Recommendation Engines",
      "Diagnostic Workflow Management",
      "Medical Record Digitization (OCR-powered)",
    ],
    impact: "Impact: Less admin. Higher patient show rates. Secure, compliant, AI-powered care delivery.",
  },
  {
    num: "02",
    title: "Retail & eCommerce",
    hook: "High traffic but low conversions? Rising returns? Fragmented experiences?",
    desc: "We build AI-driven retail ecosystems that personalize, optimize, and convert. Our Retail AI Solutions include:",
    items: [
      "Virtual Try-On Experience Engines",
      "AI Shopping Assistants",
      "24/7 Intelligent Customer Engagement Chatbots",
      "AI Product Marketing Engines",
      "Omnichannel Engagement Systems",
    ],
    impact: "Impact: Higher AOV. Lower returns. Stronger customer loyalty.",
  },
  {
    num: "03",
    title: "Logistics & Transportation",
    hook: "Delays, downtime, and unpredictable supply chains?",
    desc: "We create intelligent command systems that don't just track assets, they optimize them. Our Logistics AI Solutions include:",
    items: [
      "AI Logistics Command Centers",
      "Predictive Fleet Maintenance & Tracking",
      "Smart Route Optimization Engines",
      "Autonomous Supply Chain Agents",
    ],
    impact: "Impact: Reduced downtime. Lower fuel costs. Increased delivery reliability.",
  },
  {
    num: "04",
    title: "Manufacturing",
    hook: "Quality issues? Equipment failures? Production inefficiencies?",
    desc: "We embed AI directly into factory floors and production lines. Our Manufacturing AI Solutions include:",
    items: [
      "Vision-Based Quality Control Systems",
      "AI-Driven Predictive Maintenance",
      "Intelligent Production Assistants",
      "Autonomous Material Handling & Shipping Systems",
    ],
    impact: "Impact: Lower defect rates. Reduced rework costs. Extended asset lifecycles.",
  },
];

const SolutionsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          {/* Left - Static */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:sticky lg:top-[40%] lg:-translate-y-1/2 lg:self-start text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Solutions</span>
            </h2>
            <p className="font-semibold text-foreground mb-4 max-w-2xl mx-auto lg:mx-0">
              Looking for AI that actually solves real industry problems?
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Most companies experiment with AI. We deploy it where it matters!
              Inside core workflows, revenue engines, and operational systems. At
              Pravaah, we build industry-ready intelligence systems designed to
              deliver measurable impact.
            </p>
            <p className="text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0">
              Here's how we transform industries:
            </p>
          </motion.div>

          {/* Right - Scrollable */}
          <div ref={scrollRef} className="space-y-16">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.num}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="border-t border-border/40 pt-8 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-muted-foreground font-heading text-lg font-bold mt-1 group-hover:text-primary transition-colors duration-300">
                    {sol.num}
                  </span>
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl md:text-3xl font-heading font-bold mb-3"
                    >
                      {sol.title}
                    </motion.h3>
                    <p className="text-muted-foreground italic mb-4">{sol.hook}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{sol.desc}</p>
                    <ul className="space-y-3 mb-6">
                      {sol.items.map((item, idx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (idx * 0.05) }}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-secondary/30 p-4 rounded-xl border border-primary/10"
                    >
                      <p className="text-muted-foreground text-sm font-medium">{sol.impact}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

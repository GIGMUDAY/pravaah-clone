import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Customized Solutions: Every business is unique. So are our solutions.",
  "Proven Track Record: 250+ projects delivered, 100+ satisfied clients.",
  "Advanced Technology: AI, ML, low-code/no-code, and more.",
  "End-to-End Partnership: From ideation to execution and beyond.",
  "Global Perspective: Serving clients across industries and geographies.",
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Why <span className="text-gradient">Pravaah Consulting?</span>
          </h2>
          <p className="text-muted-foreground">
            Smart AI Solutions | Winning Strategies | Record-Breaking Growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto space-y-4"
        >
          {reasons.map((reason, i) => (
            <div key={i} className="flex items-start gap-4 glass rounded-xl p-5">
              <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={20} />
              <p className="text-foreground text-sm md:text-base">{reason}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

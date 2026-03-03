import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import productEngImg from "@/assets/service-product-engineering.jpg";
import agenticAiImg from "@/assets/service-agentic-ai.jpg";
import ecommerceImg from "@/assets/service-ecommerce.jpg";
import marketingImg from "@/assets/service-marketing.jpg";

const services = [
  {
    title: "Product Engineering",
    image: productEngImg,
    desc: "Building robust, scalable solutions customized to your unique needs.",
    details: [
      "Full-stack custom software development",
      "Cloud-native architecture & microservices",
      "API design and integration",
      "DevOps & CI/CD pipeline setup",
      "Legacy system modernization",
      "Quality assurance & automated testing",
    ],
  },
  {
    title: "Agentic AI Engineering",
    image: agenticAiImg,
    desc: "Turning raw data into actionable intelligence for smarter decision-making.",
    details: [
      "Custom AI/ML model development",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "Predictive analytics & forecasting",
      "AI-powered automation workflows",
      "Large Language Model (LLM) integration",
    ],
  },
  {
    title: "eCommerce",
    image: ecommerceImg,
    desc: "Powering growth with multi-channel, seamless commerce experiences.",
    details: [
      "SAP Commerce & Adobe Commerce implementation",
      "Shopify & headless commerce platforms",
      "Payment gateway integration (Stripe, PayPal)",
      "Inventory & order management systems",
      "Personalized product recommendations",
      "Multi-channel retail strategy",
    ],
  },
  {
    title: "Marketing",
    image: marketingImg,
    desc: "Amplifying your brand with data-driven strategies that maximize ROI.",
    details: [
      "SEO & content strategy",
      "Paid advertising & PPC campaigns",
      "Social media marketing & management",
      "Marketing analytics & ROI tracking",
      "Email marketing automation",
      "Brand identity & creative design",
    ],
  },
];

const ServicesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            What We <span className="text-gradient">Do?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IMAGINE | STRATEGIZE | ARCHITECT | DESIGN | BUILD | EXECUTE | MEASURE
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-xl md:text-2xl font-heading font-bold">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl max-w-2xl w-full p-8 relative border border-primary/20"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col gap-6">
                <div className="rounded-xl overflow-hidden aspect-video">
                  <img
                    src={services[selected].image}
                    alt={services[selected].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                    {services[selected].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{services[selected].desc}</p>
                  <ul className="space-y-2">
                    {services[selected].details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">●</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;

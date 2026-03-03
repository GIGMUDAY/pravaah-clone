import { motion } from "framer-motion";
import { Brain, Monitor, Code, Blocks, ShoppingCart, Megaphone } from "lucide-react";

const services = [
  {
    icon: Brain,
    num: "01",
    title: "AI & ML Services",
    desc: "Turning raw data into actionable intelligence for smarter decision-making.",
  },
  {
    icon: Monitor,
    num: "02",
    title: "Digital Transformation",
    desc: "Crafting strategies and roadmaps that guide organizations to digital success.",
  },
  {
    icon: Code,
    num: "03",
    title: "Custom Software Development",
    desc: "Building robust, scalable solutions customized to your unique needs.",
  },
  {
    icon: Blocks,
    num: "04",
    title: "Low Code / No Code",
    desc: "Enabling rapid innovation and agility through modern development platforms.",
  },
  {
    icon: ShoppingCart,
    num: "05",
    title: "E-commerce Solutions",
    desc: "Powering growth with multi-channel, seamless commerce experiences.",
  },
  {
    icon: Megaphone,
    num: "06",
    title: "Marketing",
    desc: "Amplifying your brand with data-driven strategies that maximize ROI.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-hero">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <span className="text-3xl font-heading font-bold text-border">{service.num}</span>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

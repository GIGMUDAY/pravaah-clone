import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const ServicesSection = () => {
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
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card min-h-[300px] md:h-[320px] transition-colors duration-300 hover:border-primary/70"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/75 to-black/90" />

              <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">{service.title}</h3>
                <div className="flex-1" />

                <div className="pt-1 md:pt-2 flex justify-center">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center h-11 px-9 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

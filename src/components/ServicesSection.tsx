import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const productEngineeringCopy = [
  "Have a product idea or an existing system that needs to scale?",
  "We offer end-to-end product engineering, from discovery and architecture to UI/UX, development, testing, and optimization.",
  "Whether you're launching an MVP, modernizing legacy software, or building a fully custom enterprise platform, we engineer solutions that are secure, scalable, and future-ready.",
  "It's building products that align with your business goals and evolve with your growth.",
  "The result? Faster time-to-market and products users actually love.",
];

const agenticEngineeringCopy = {
  intro: [
    "Tired of repetitive tasks slowing your team down?",
    "We build AI-powered systems that automate workflows, process documents, generate insights, and eliminate inefficiencies. From predictive analytics and document automation to next-generation agentic AI that autonomously executes workflows, our solutions amplify human teams and reduce operational drag. Ditch the manual grind and level up your execution with our smart solutions.",
    "Whether you need:",
  ],
  bullets: [
    "Smart document processing that learns from feedback",
    "AI systems that generate insights from complex data",
    "Agentic AI that performs tasks with minimal supervision",
    "Intelligent automation that enhances productivity",
  ],
  outro: [
    "We turn AI from a trendy phrase into a real business advantage.",
    "The result? Faster decisions. Reduced costs. Systems that evolve with your business.",
  ],
};

const ecommerceCopy = {
  intro: [
    "Planning to scale your online business or build one from scratch?",
    "We design and develop powerful eCommerce platforms that are smooth, secure, and built for growth. From storefront experience and payment integration to backend optimization and analytics, we ensure every click moves you closer to conversion.",
    "Whether you're B2B, D2C, or marketplace-driven, we help you create shopping experiences customers trust and return to.",
    "Platforms: Shopify, Wix, BigCommerce, WooCommerce, Magento, Custom",
  ],
  outro: "The result? Higher conversions. Smoother operations. Scalable revenue.",
};

const marketingCopy = {
  intro: [
    "Getting attention, but not conversions?",
    "Modern marketing is about being relevant. At Pravaah, we combine strategy, data, content, and automation to create marketing systems that generate real business outcomes.",
    "Are you looking for performance campaigns, LinkedIn growth, brand positioning, or demand generation? We focus on all that drives revenue!",
  ],
  outro: "The result? Qualified leads. Stronger brand presence. Measurable ROI.",
};

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
              className={`group relative rounded-2xl overflow-hidden border border-border bg-card min-h-[440px] md:h-[280px] transition-[height,border-color] duration-500 hover:border-primary/70 ${
                service.slug === "agentic-ai-engineering"
                  ? "md:hover:h-[660px]"
                  : service.slug === "ecommerce"
                    ? "md:hover:h-[590px]"
                    : "md:hover:h-[520px]"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/75 to-black/90" />

              <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">{service.title}</h3>

                <div
                  className={`mt-1 flex-1 opacity-100 overflow-hidden md:opacity-0 md:max-h-0 transition-all duration-500 ${
                    service.slug === "agentic-ai-engineering"
                      ? "max-h-[460px] md:group-hover:max-h-[500px]"
                      : "max-h-[360px] md:group-hover:max-h-[360px]"
                  } md:group-hover:opacity-100`}
                >
                  {service.slug === "product-engineering" ? (
                    <div className="space-y-3 text-[15px] md:text-[16px] leading-snug text-white/95 text-left mb-5">
                      {productEngineeringCopy.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : service.slug === "agentic-ai-engineering" ? (
                    <div className="space-y-3 text-[15px] md:text-[16px] leading-snug text-white/95 text-left mb-5">
                      {agenticEngineeringCopy.intro.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      <ul className="space-y-1 pl-4 list-disc">
                        {agenticEngineeringCopy.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {agenticEngineeringCopy.outro.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : service.slug === "ecommerce" ? (
                    <div className="space-y-3 text-[15px] md:text-[16px] leading-snug text-white/95 text-left mb-5">
                      {ecommerceCopy.intro.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      <p>{ecommerceCopy.outro}</p>
                    </div>
                  ) : service.slug === "marketing" ? (
                    <div className="space-y-3 text-[15px] md:text-[16px] leading-snug text-white/95 text-left mb-5">
                      {marketingCopy.intro.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      <p>{marketingCopy.outro}</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-base md:text-lg text-white/95 mb-4">{service.desc}</p>
                      <ul className="space-y-2 text-sm md:text-base text-white/90 mb-6">
                        {service.details.slice(0, 4).map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

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

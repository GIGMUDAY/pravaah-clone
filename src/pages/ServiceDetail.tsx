import { motion } from "framer-motion";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { services } from "@/data/services";
import teamImg from "@/assets/team-collab.jpg";

const productEngineeringCapabilities = [
  {
    title: "Product Conceptualization and Prototyping",
    desc: "We kickstart your product journey by diving into your business needs, crafting ideal customer profiles, and developing specific concepts with clear roadmaps. Our rapid prototypes capture early feedback from stakeholders and users, enabling quick iterations to align features, timelines, and launches with market demands.",
  },
  {
    title: "Product and User Experience Design",
    desc: "Our design experts brainstorm innovative UIs through user research, wireframes, mockups, and high-fidelity prototypes, followed by thorough usability testing. The result is intuitive interfaces that boost engagement, drive sales, and meet your business goals.",
  },
  {
    title: "Custom Software Development",
    desc: "From native mobile apps and cross-platform web solutions to desktop software for Windows, macOS, and Linux, we build bespoke products using front-end technologies (React, Angular) and back-end technologies (Node.js, Python, .NET).",
  },
  {
    title: "Product Testing and Quality Assurance",
    desc: "Building on our robust testing services, we perform manual and automated checks for functional, non-functional, and UX issues, as well as edge cases. Load, stress, and performance testing guarantee reliability under high traffic and flawless releases.",
  },
  {
    title: "Product Maintenance and Support",
    desc: "Our proactive support keeps your products performing at high efficiency with regular updates, glitch fixes, and feature enhancements. We tackle adaptive, corrective, perfective, and preventive needs to reduce downtime and ensure long-term scalability.",
  },
  {
    title: "Cloud Services and DevOps",
    desc: "We migrate and manage your infrastructure across public, private, hybrid, and multi-cloud environments. This cloud-native synergy accelerates time-to-market, boosts scalability, and integrates smoothly with your tech stack.",
  },
  {
    title: "Security and Compliance",
    desc: "Security is baked in from day one. We assess risks, ensure GDPR/HIPAA compliance, apply threat modeling, encryption, and penetration testing across all stages to protect trust and data.",
  },
  {
    title: "Data Engineering, Analytics, and Visualization",
    desc: "Harness ETL/ELT pipelines, data lakes, and visualization tools built with Python to integrate large datasets and create interactive dashboards for actionable insights and better decisions.",
  },
  {
    title: "Data Science and AI/ML",
    desc: "Our AI/ML models uncover patterns in large datasets, predict trends, and power NLP-driven chatbots for automated support. Retention and segmentation analytics help personalize experiences and reduce risk.",
  },
  {
    title: "Generative AI Integration",
    desc: "Embrace GenAI with LLMs for automated document analysis, real-time summarization, 24/7 AI chatbots, and customized content generation while adapting to evolving market needs.",
  },
  {
    title: "Internet of Things (IoT) Solutions",
    desc: "We deliver end-to-end IoT from strategy and edge computing to custom platforms for healthcare wearables, industrial monitoring, and retail with real-time data collection.",
  },
  {
    title: "Blockchain Development",
    desc: "Through consulting and custom builds, we implement blockchain for secure transactions, smart contracts, tokenization, and trading platforms to improve traceability and efficiency.",
  },
];

const industries = [
  {
    title: "Healthcare",
    desc: "Pravaah optimizes healthcare with AI-driven diagnostics and telemedicine platforms for faster patient care and secure data handling. Our solutions reduce wait times and enhance service quality across providers.",
  },
  {
    title: "Logistics and Transportation",
    desc: "We build route optimization, fleet intelligence, and predictive maintenance products that reduce operational costs and improve delivery reliability.",
  },
  {
    title: "Manufacturing",
    desc: "Our product engineering teams create quality control systems, production intelligence dashboards, and predictive maintenance tools for smart factories.",
  },
  {
    title: "Retail",
    desc: "From omnichannel platforms to personalized recommendation engines, we help retailers drive conversion, retention, and customer lifetime value.",
  },
  {
    title: "SaaS",
    desc: "We architect cloud-native SaaS products with robust multi-tenant foundations, scalable APIs, and frictionless onboarding experiences.",
  },
  {
    title: "Enterprise",
    desc: "For large organizations, we modernize legacy systems and build secure digital platforms aligned with governance, compliance, and scale.",
  },
  {
    title: "Fintech",
    desc: "We design secure fintech applications, payment integrations, and analytics solutions with compliance-first engineering for high-trust transactions.",
  },
  {
    title: "E-commerce",
    desc: "We engineer high-performance storefronts, checkout systems, and customer data platforms to increase conversion and repeat purchase behavior.",
  },
  {
    title: "Supply Chain",
    desc: "Our supply-chain products provide real-time visibility, forecasting intelligence, and workflow automation to improve resilience and efficiency.",
  },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const [openIndustry, setOpenIndustry] = useState("Healthcare");

  if (!service) {
    return <Navigate to="/not-found" replace />;
  }

  const isProductEngineering = service.slug === "product-engineering";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-20">
        {isProductEngineering ? (
          <>
            <section className="relative min-h-[86vh] md:min-h-[92vh] flex items-end">
              <img
                src={teamImg}
                alt="Product Engineering Services"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="container relative z-10 pb-16 md:pb-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl"
                >
                  <h1 className="text-4xl md:text-7xl font-heading font-bold text-white mb-4">
                    Product Engineering Services
                  </h1>
                  <p className="text-white/90 text-xl md:text-4xl leading-relaxed max-w-3xl mb-8">
                    Maximize the potential of your product from beginning to end with our top engineering expertise.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#service-overview"
                      className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-primary text-primary-foreground text-2xl font-medium hover:brightness-110 transition-all"
                    >
                      Learn More
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-white text-foreground text-2xl font-medium hover:bg-white/90 transition-all"
                    >
                      Contact Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            <section className="container py-20 md:py-24">
              <h2 className="text-4xl md:text-7xl font-heading font-bold leading-tight max-w-6xl mb-8">
                Innovate Competitive Solutions With End-to-End product engineering
              </h2>
              <div className="relative mb-10">
                <div className="h-px bg-border/70" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground" />
              </div>

              <div className="grid lg:grid-cols-[1fr_1.25fr] gap-8 lg:gap-12 items-center">
                <p className="text-2xl leading-relaxed text-foreground/95">
                  Pravaah Consulting accelerates digital innovation and maximizes business impact through full-cycle product engineering (from concept to launch). The team transforms bold ideas into scalable, secure, market-ready products using agile methodologies, AI-accelerated engineering, rapid prototyping, and advanced tools like React JS, Python, and Node JS. This user-centric approach navigates technology complexities and reduces time-to-market and cost, ensuring future-readiness with cloud-native architectures across industries such as healthcare, finance, and ecommerce.
                </p>

                <div className="relative rounded-[28px] overflow-hidden border border-border/70">
                  <img
                    src={service.image}
                    alt="Product engineering collaboration"
                    className="w-full h-[360px] md:h-[420px] object-cover"
                  />
                  <a
                    href="#contact"
                    className="absolute right-4 bottom-4 inline-flex items-center gap-3 h-12 px-6 rounded-full bg-primary text-primary-foreground text-2xl font-medium hover:brightness-110 transition-all"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary">
                      <MessageCircle size={18} />
                    </span>
                    Contact Us
                  </a>
                </div>
              </div>
            </section>

            <section className="py-16 md:py-20 bg-[linear-gradient(180deg,#170602_0%,#7b2a04_52%,#b54109_100%)]">
              <div className="container">
                <h2 className="text-4xl md:text-7xl font-heading font-bold leading-tight max-w-6xl mb-8">
                  Product Engineering Services for Next-Gen Digital Solutions
                </h2>
                <div className="relative mb-10">
                  <div className="h-px bg-border/70" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {productEngineeringCapabilities.map((capability, index) => (
                    <article
                      key={capability.title}
                      className="rounded-3xl border border-primary/80 bg-black/10 p-6 md:p-7 min-h-[350px]"
                    >
                      <div className="inline-flex h-12 min-w-12 px-3 rounded-md items-center justify-center bg-white/95 text-primary text-lg font-medium mb-6">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-4xl font-heading font-bold leading-tight mb-4">
                        {capability.title}
                      </h3>
                      <p className="text-2xl leading-relaxed text-foreground/95">{capability.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16 md:py-20 bg-[linear-gradient(180deg,#b54109_0%,#7b2a04_100%)]">
              <div className="container">
                <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight max-w-6xl mb-6">
                  Product Engineering Across Industries
                </h2>
                <div className="relative mb-10">
                  <div className="h-px bg-border/70" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-6 lg:gap-8 lg:items-stretch">
                  <div className="rounded-3xl overflow-hidden border border-primary/80 h-[340px] lg:h-full">
                    <img
                      src={service.image}
                      alt="Product engineering industries"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    {industries.map((industry) => {
                      const isOpen = openIndustry === industry.title;
                      return (
                        <article
                          key={industry.title}
                          className="rounded-2xl overflow-hidden"
                          style={{ opacity: 1 }}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenIndustry(isOpen ? "" : industry.title)}
                            className="w-full bg-white text-black px-5 py-4 flex items-center justify-between text-left"
                            style={{ color: "#000000", opacity: 1 }}
                          >
                            <span className="text-2xl font-semibold text-black" style={{ color: "#000000" }}>
                              {industry.title}
                            </span>
                            {isOpen ? (
                              <ChevronUp size={20} className="text-black" style={{ color: "#000000" }} />
                            ) : (
                              <ChevronDown size={20} className="text-black" style={{ color: "#000000" }} />
                            )}
                          </button>
                          {isOpen ? (
                            <div className="bg-white px-5 pb-5">
                              <p
                                className="text-black text-lg leading-relaxed"
                                style={{ color: "#000000", opacity: 1 }}
                              >
                                {industry.desc}
                              </p>
                            </div>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : null}

        {!isProductEngineering ? (
          <section id="service-overview" className="container pt-28">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span>Back to Services</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start"
            >
              <div className="rounded-2xl overflow-hidden border border-border/70 shadow-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[260px] md:h-[380px] object-cover"
                />
              </div>

              <div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">{service.title}</h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-7">{service.desc}</p>
                <h2 className="text-xl font-heading font-semibold mb-4">What We Deliver</h2>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary mt-1">*</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </section>
        ) : null}
      </main>

      {isProductEngineering ? (
        <a
          href="#contact"
          className="fixed z-40 right-5 bottom-5 inline-flex items-center gap-3 h-14 px-7 rounded-full bg-primary text-primary-foreground text-2xl font-medium hover:brightness-110 transition-all shadow-card"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary">
            <MessageCircle size={18} />
          </span>
          Contact Us
        </a>
      ) : null}

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServiceDetail;

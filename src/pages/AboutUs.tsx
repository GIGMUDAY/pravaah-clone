import { motion } from "framer-motion";
import {
  BadgeCheck,
  BrainCircuit,
  Handshake,
  Lightbulb,
  Puzzle,
  Target,
  TrendingUp,
  Globe2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teamImg from "@/assets/team-collab.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <section className="pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="w-full px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.15fr] gap-8 xl:gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.06] mb-5">
                  Introducing Pravaah Consulting
                </h1>
                <p className="text-2xl md:text-4xl text-white/95 leading-relaxed mb-8">
                  Smart AI Solutions | Winning Strategies | Record-Breaking Growth
                </p>
                <a
                  href="#about-content"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground text-lg font-medium hover:brightness-110 transition-all"
                >
                  Learn More
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden border border-white/20"
              >
                <img
                  src={teamImg}
                  alt="Pravaah Consulting team collaborating"
                  className="w-full h-[360px] md:h-[520px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[linear-gradient(90deg,#210700_0%,#bf3d00_100%)]">
          <div className="container text-center">
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Transform Today Lead Tomorrow
            </h2>
            <p className="text-lg md:text-2xl text-white/95 max-w-5xl mx-auto leading-relaxed">
              Founded with a vision to accelerate businesses with AI solutions and digital transformation, we
              are a leading consulting partner for forward-thinking businesses worldwide. With over 250
              successful projects, a core team of 50+ experts, and a family of 100+ happy clients, Pravaah
              Consulting is committed to delivering solutions that not only solve today&apos;s challenges but also
              open tomorrow&apos;s opportunities.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.05fr] gap-8 xl:gap-12 items-center">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">Our Mission</h2>
                <p className="text-lg md:text-2xl text-white/95 leading-relaxed">
                  At Pravaah Consulting, we&apos;re on a mission to bring your digital dreams to life fast,
                  smart, and seamless. Using advanced AI and innovative tech, we create opportunities for
                  your business to grow and lead. Ready to transform, innovate, and accelerate? Together,
                  let&apos;s bring your vision to life and create lasting value that propels your organization
                  forward.
                </p>
              </div>

              <div className="rounded-lg overflow-hidden border border-white/15">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Team discussing strategy in a mission workshop"
                  className="w-full h-[300px] md:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[linear-gradient(180deg,#5f1700_0%,#bf3d00_100%)]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-5">What We Do?</h2>
              <p className="text-lg md:text-3xl text-white/95">
                IMAGINE | STRATEGIZE | ARCHITECT | DESIGN | BUILD | EXECUTE | MEASURE
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mb-14">
              {[
                {
                  id: "01",
                  title: "AI & ML Services",
                  desc: "Turning raw data into actionable intelligence for smarter decision-making.",
                },
                {
                  id: "02",
                  title: "Digital Transformation",
                  desc: "Crafting strategies and roadmaps that guide organizations to digital success.",
                },
                {
                  id: "03",
                  title: "Custom Software Development",
                  desc: "Building robust, scalable solutions customized to your unique needs.",
                },
                {
                  id: "04",
                  title: "Low Code / No Code",
                  desc: "Enabling rapid innovation and agility through modern development platforms.",
                },
                {
                  id: "05",
                  title: "E-commerce Solutions",
                  desc: "Powering growth with multi-channel, seamless commerce experiences.",
                },
                {
                  id: "06",
                  title: "Marketing",
                  desc: "Amplifying your brand with data-driven strategies that maximize ROI.",
                },
              ].map((item) => (
                <article
                  key={item.id}
                  className="rounded-md border border-primary/80 bg-[#7a2300] p-5 md:p-6 min-h-[180px]"
                >
                  <span className="inline-flex items-center justify-center h-10 min-w-10 px-2 rounded bg-primary text-white text-lg font-medium mb-5">
                    {item.id}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-lg md:text-2xl leading-relaxed text-white/95">{item.desc}</p>
                </article>
              ))}
            </div>

            <p className="text-center text-lg md:text-3xl leading-relaxed text-white/95 max-w-6xl mx-auto">
              We see a world where technology sparks growth and transforms businesses, big or small. Our
              vision? To be your trusted partner in unlocking the power of AI, automation, and smart
              solutions that drive real results. Together, let&apos;s create innovative, agile, and impactful
              digital experiences that shape the future and make your business shine.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-8 xl:gap-12 items-center">
              <div className="rounded-md overflow-hidden border border-white/20">
                <img
                  src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Books representing knowledge and philosophy"
                  className="w-full h-[300px] md:h-[430px] object-cover"
                />
              </div>

              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">Our Philosophy</h2>
                <p className="text-lg md:text-2xl text-white/95 leading-relaxed">
                  We believe that speed is key to digital transformation. By partnering with the world&apos;s
                  most innovative platforms and leveraging agentic AI frameworks, we deliver business
                  applications at a fraction of the time and cost of traditional solutions. Every project is
                  a partnership. We listen, collaborate, and co-create with our clients, ensuring every
                  solution is as unique as the business it serves.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[linear-gradient(90deg,#2a0b00_0%,#bf3d00_100%)]">
          <div className="container">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-center mb-10 md:mb-12">
              Our Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
              {[
                {
                  icon: BrainCircuit,
                  title: "Innovation",
                  desc: "We challenge the status quo and embrace new ideas.",
                },
                {
                  icon: Handshake,
                  title: "Integrity",
                  desc: "Transparency and honesty guide every interaction.",
                },
                {
                  icon: BadgeCheck,
                  title: "Excellence",
                  desc: "Quality is non-negotiable from concept to execution.",
                },
                {
                  icon: Target,
                  title: "Client-Centricity",
                  desc: "Your success is our mission.",
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Learning",
                  desc: "We foster a culture of growth and curiosity.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-md border border-primary/80 bg-[#6d1f00] p-6 md:p-7 min-h-[280px]"
                  >
                    <Icon size={42} className="text-white mb-8" />
                    <h3 className="text-4xl font-heading font-bold mb-3">{item.title}</h3>
                    <p className="text-xl leading-relaxed text-white/95">{item.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-8 xl:gap-12 items-center">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6">The Pravaah Journey</h2>
                <p className="text-lg md:text-2xl text-white/95 leading-relaxed">
                  Our inception as a trusted partner for global enterprises has consistently delivered
                  value through innovative technology solutions. Our portfolio spans healthcare, e-commerce,
                  marketing, and beyond, each project a testament to our commitment to excellence and
                  innovation. Our team&apos;s diverse skills and fresh ideas keep us ahead of the curve and
                  ready to tackle whatever comes next.
                </p>
              </div>

              <div className="rounded-md overflow-hidden border border-white/15">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Pravaah team journey and office collaboration"
                  className="w-full h-[300px] md:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[linear-gradient(90deg,#4a1200_0%,#9f2f00_100%)]">
          <div className="container">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-center leading-tight mb-8">
              Our Powerhouse Team: 50+ Experts, One Vision
            </h2>

            <div className="relative mb-10">
              <div className="h-px bg-white/80" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-8 xl:gap-12 items-center">
              <div className="rounded-md overflow-hidden border border-white/20">
                <img
                  src="https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Pravaah powerhouse team in a planning session"
                  className="w-full h-[310px] md:h-[430px] object-cover"
                />
              </div>

              <p className="text-lg md:text-2xl text-white/95 leading-relaxed max-w-4xl">
                Meet the heart of Pravaah Consulting our people! A vibrant mix of strategists, architects,
                engineers, designers, and marketers, all passionate about turning ideas into impact. From a
                small group of passionate innovators to a powerhouse team of 50+ experts, our journey at
                Pravaah Consulting has been nothing short of exciting. Together, we bring deep expertise in
                AI, ML, cloud, low-code platforms, and digital strategy. We invest in upskilling, stay ahead
                of emerging trends, and foster an environment where creativity thrives. This empowers us to
                deliver innovative, future-ready solutions that drive real business value for our clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-black">
          <div className="container">
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-center mb-12 md:mb-14">
              Why Pravaah Consulting?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-7 md:gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Customized Solutions",
                  desc: "Every business is unique. So are our solutions.",
                },
                {
                  icon: Target,
                  title: "Proven Track Record",
                  desc: "250+ projects delivered, 100+ satisfied clients.",
                },
                {
                  icon: Puzzle,
                  title: "Advanced Technology",
                  desc: "AI, ML, low-code/no-code, and more.",
                },
                {
                  icon: Handshake,
                  title: "End-to-End Partnership",
                  desc: "From ideation to execution and beyond.",
                },
                {
                  icon: Globe2,
                  title: "Global Perspective",
                  desc: "Serving clients across industries and geographies.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="text-center">
                    <Icon size={44} className="mx-auto mb-4 text-white" />
                    <h3 className="text-3xl font-heading font-bold leading-snug mb-2">{item.title}</h3>
                    <p className="text-lg md:text-xl leading-relaxed text-white/95">{item.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.05fr] gap-8 xl:gap-12 items-center">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-heading font-bold mb-5">Join Us on the Journey</h2>
                <p className="text-lg md:text-2xl text-white/95 leading-relaxed mb-7">
                  Ready to reimagine your business? Partner with Pravaah Consulting and experience the
                  power of innovation, intelligence, and impact. Your Vision. Our Expertise. Limitless
                  Possibilities.
                </p>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md bg-primary text-primary-foreground text-lg font-medium hover:brightness-110 transition-all"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="rounded-md overflow-hidden border border-white/15">
                <img
                  src="https://images.pexels.com/photos/4475524/pexels-photo-4475524.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Customer success journey with Pravaah Consulting"
                  className="w-full h-[300px] md:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

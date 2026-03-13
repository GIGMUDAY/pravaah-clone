import { motion } from "framer-motion";
import teamImg from "@/assets/team-collab.jpg";
import officeImg from "@/assets/office.jpg";

const values = [
  { title: "Innovation", desc: "We challenge the status quo and embrace new ideas." },
  { title: "Integrity", desc: "Transparency and honesty guide every interaction." },
  { title: "Excellence", desc: "Quality is non-negotiable—from concept to execution." },
  { title: "Client-Centricity", desc: "Your success is our mission." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        {/* About Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Transform Today{" "}
              <span className="text-gradient">Lead Tomorrow</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded with a vision to accelerate businesses with AI solutions and digital transformation, we are a leading consulting partner for forward-thinking businesses worldwide. With over 250 successful projects, a core team of 50+ experts, and a family of 100+ happy clients, plus Consulting is committed to delivering solutions that not only solve today's challenges but also open tomorrow's opportunities.
            </p>
            <h3 className="text-xl font-heading font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              At plus Consulting, we're on a mission to bring your digital dreams to life—fast, smart, and seamless. Using advanced AI and innovative tech, we create opportunities for your business to grow and lead.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card"
          >
            <img src={teamImg} alt="Team collaboration" className="w-full h-80 lg:h-96 object-cover" />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-card"
          >
            <img src={officeImg} alt="Office" className="w-full h-80 lg:h-96 object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We believe that speed is key to digital transformation. Every project is a partnership—we listen, collaborate, and co-create with our clients.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="glass rounded-xl p-5">
                  <h4 className="font-heading font-semibold text-primary mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

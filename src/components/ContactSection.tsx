import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const contactInfoVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const infoItemVariants = {
  hidden: { opacity: 0, x: -28, filter: "blur(5px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.55, ease: "easeOut" } },
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ amount: 0.2, margin: "-60px" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 id="talk-to-us" className="text-3xl md:text-5xl font-heading font-bold mb-4 scroll-mt-24">
            Talk to Us &amp; <span className="text-gradient">Get Started</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get a 30-min free digital transformation consultation from experts. Validate your idea for free and get a detailed quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2, margin: "-60px" }}
            className="space-y-6"
          >
            <motion.div variants={infoItemVariants} className="flex items-center gap-4 glass rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">info@pravaahconsulting.com</p>
              </div>
            </motion.div>
            <motion.div variants={infoItemVariants} className="flex items-center gap-4 glass rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+1 (555) 123-4567</p>
              </div>
            </motion.div>
            <motion.div variants={infoItemVariants} className="flex items-center gap-4 glass rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">California, USA</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ amount: 0.2, margin: "-60px" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="glass rounded-2xl p-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Name" className="bg-secondary/50 border-border" />
              <Input type="email" placeholder="Email" className="bg-secondary/50 border-border" />
            </div>
            <Input type="tel" placeholder="Phone" className="bg-secondary/50 border-border" />
            <Input placeholder="Our Services" className="bg-secondary/50 border-border" />
            <Textarea placeholder="Tell us about your project..." rows={4} className="bg-secondary/50 border-border resize-none" />
            <Button className="w-full bg-gradient-primary text-primary-foreground font-semibold gap-2">
              Submit <Send size={16} />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with Pravaah Consulting has transformed NextPitch. The team went above and beyond, providing technical expertise, creativity, and a genuine commitment to success. They helped us build an innovative platform that empowers students and entrepreneurs. Their guidance and dedication were invaluable.",
    author: "Tiffany Dixon, EdD, Founder | CEO, NextPitch",
  },
  {
    quote:
      "I was recommended to Pravaah Consulting through WIX for my new brand as a Naturopathic Physician in Bend, Oregon. I've seen results in my Google ranking, and they helped with bi-monthly emails, a website, brochures, and an ebook. They've understood my mission and helped shape my brand. Thank you.",
    author: "Dr. Drew Collins, Proactive Choice",
  },
  {
    quote:
      "Pravaah Consulting has been a vital partner. I first worked with them in 2022 on a large website project with Pritesh Sonu. Our collaboration grew into a genuine relationship. Together, we created Octopus Tech, a SaaS platform that exceeded expectations. Their team turned my idea into a thriving business. I'm proud to continue working with them.",
    author: "Sam Spaccamonti, Co-Founder, Octopus Tech Inc.",
  },
  {
    quote:
      "Thanks to Pritesh and the entire team at Pravaah Consulting for their incredible support as we grow Roomedys Spacing Tape together. Their professionalism, commitment, and expertise have been invaluable in helping us scale and achieve our goals. We appreciate their partnership and look forward to continued success working with them.",
    author: "Stephen P. Donegan, CEO Roomedys",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.93, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: "easeOut", delay: i * 0.1 },
  }),
};

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            What People Are Saying
          </h2>
          <p className="text-muted-foreground text-lg">
            A few words from our clients. See client stories for more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.author}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
              className="bg-primary text-primary-foreground rounded-[2.25rem] p-7 md:p-8 min-h-[430px] flex flex-col justify-between cursor-default"
            >
              <p className="text-[1.07rem] leading-relaxed">{item.quote}</p>
              <p className="text-2xl leading-snug font-medium text-right mt-8">
                {item.author}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

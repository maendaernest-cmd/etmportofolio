import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* Section header */}
          <div className="space-y-6">
            <span className="text-accent font-body text-sm font-medium tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold">
              Let's build something{" "}
              <span className="text-gradient">extraordinary</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
          </div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="mailto:maendaernest@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-body font-medium hover:bg-accent transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              maendaernest@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/ernest-t-maenda-2620323a1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-body font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 text-muted-foreground font-body text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Harare, Zimbabwe
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +263 786 682 894
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
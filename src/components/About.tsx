import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-12"
          >
            {/* Section label */}
            <div className="flex items-center gap-4">
              <span className="text-accent font-body text-sm font-medium tracking-widest uppercase">
                About
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-accent">PROFESSIONAL SUMMARY</h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                High-performing Full Stack Developer and Google Certified UX Designer with an intensive 12-month Software Engineering background from uncommon.org (Harare). Specialized in the MERN Stack (MongoDB, Express, React 19, Node.js), with a proven ability to engineer complex, resilient systems for civic accountability and household management. Expert in integrating Generative AI (Gemini API) and FinTech protocols to solve local infrastructure challenges.
              </p>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-accent">TECHNICAL SKILLS</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-foreground">Full Stack:</span>
                    <span className="text-muted-foreground ml-2">MERN Stack (MongoDB, Express, React 19, Node.js), TypeScript, Python.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">AI & Data:</span>
                    <span className="text-muted-foreground ml-2">Google Gemini API (Agentic Workflows), Recharts, Data Visualization.</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-foreground">Infrastructure:</span>
                    <span className="text-muted-foreground ml-2">Docker, Kubernetes, CI/CD, Microservices, Leaflet GIS.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Design:</span>
                    <span className="text-muted-foreground ml-2">Figma, UX Research, Interaction Design, Wireframing.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

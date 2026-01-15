import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    title: "Frontend & Design",
    skills: ["React 19", "Vite", "Tailwind CSS", "Figma", "Leaflet Mapping"],
  },
  {
    title: "Backend & Cloud",
    skills: ["Node.js", "Express", "Django", "Flask", "Docker", "Kubernetes", "Microservices"],
  },
  {
    title: "FinTech & AI",
    skills: ["Multi-currency Wallets", "Escrow Protocols", "Google Gemini API", "Generative AI"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="flex items-center gap-4">
            <span className="text-accent font-body text-sm font-medium tracking-widest uppercase">
              Expertise
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                className="space-y-6"
              >
                <h3 className="font-display text-2xl font-medium">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                      }}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full font-body text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Junior Instructor",
    company: "uncommon.org",
    period: "January 2025 – December 2025",
    description:
      "Mentored children in block-based programming (Scratch), improving project completion rates through simplified logic instruction.",
  },
  {
    role: "Software Engineering Intern",
    company: "Sehi Group",
    period: "June 2025 – September 2025",
    description:
      "Developed a MERN-stack marketplace, optimizing API integration to improve page load speeds by 20%.",
  },
];

const certifications = [
  {
    title: "IBM Full Stack Software Developer",
    issuer: "Coursera",
    date: "May 2025",
    detail: "15-course mastery in Cloud Native, Microservices, and DevOps.",
  },
  {
    title: "Google UX Design Professional",
    issuer: "Coursera",
    date: "March 2025",
    detail: "End-to-end design process: Empathy, Wireframing, and High-Fidelity Prototyping.",
  },
  {
    title: "Software Engineering Technology Bootcamp",
    issuer: "uncommon.org",
    date: "December 2025",
    detail: "12-month program specializing in Frontend, Databases, and Generative AI.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <span className="text-accent font-body text-sm font-medium tracking-widest uppercase">
                Experience
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full"
                >
                  <span className="text-muted-foreground font-body text-sm">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-2xl font-medium mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-body text-sm font-medium mt-1">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground font-body mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div className="flex items-center gap-4">
              <span className="text-accent font-body text-sm font-medium tracking-widest uppercase">
                Certifications
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-display text-lg font-medium">
                        {cert.title}
                      </h4>
                      <p className="text-accent font-body text-sm font-medium mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-muted-foreground font-body text-sm whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm mt-3">
                    {cert.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
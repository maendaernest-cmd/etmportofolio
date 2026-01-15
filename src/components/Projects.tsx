import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Mavu | Zimbabwe Civic Accountability Platform",
    description: {
      impact: "Developed a mobile-first React app that decodes government legislation for ordinary citizens.",
      innovation: "Built an AI \"Jargon Shredder\" using Gemini API to simplify legal text, improving accessibility by translating complex documents into plain language.",
      visualEngineering: "Implemented a ZACC Bribe Map with real-time latency meters to visualize corruption data geographically."
    },
    link: "https://mavu-thlm.vercel.app/"
  },
  {
    title: "Roomee | Zimbabwe's Household Operating System",
    description: {
      architecture: "Lead Developer for a multi-role ecosystem (Tenant/Landlord/Pro) built to solve trust gaps in the Zimbabwean housing market.",
      resilienceEngineering: "Built a \"Utility Pulse\" system to verify solar/borehole status, ensuring infrastructure claims are backed by real-time data.",
      finTech: "Integrated multi-currency wallet support (USD/ZiG) with escrow-protected transaction logic."
    },
    link: "https://roja2-7hf5.vercel.app"
  },
  {
    title: "Fakushen | Multi-Agent AI Ecosystem",
    description: {
      agenticLogic: "Engineered a \"Ghost Negotiator\" AI agent that automates procurement by acting as a proxy between vendors and hosts.",
      security: "Designed the \"Handshake QR\" protocol, a physical-to-digital escrow release mechanism for service verification."
    },
    link: null
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Technical Projects Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-accent">TECHNICAL PROJECTS</h2>
          </motion.div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="border-l-2 border-accent/20 pl-8 pb-8"
              >
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                  {project.title}
                </h3>

                <div className="grid md:grid-cols-1 gap-6 mb-6">
                  {Object.entries(project.description).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <span className="font-semibold text-foreground capitalize min-w-[120px] sm:min-w-[140px]">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-muted-foreground leading-relaxed flex-1">{value}</span>
                    </div>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-body font-medium hover:text-accent/80 transition-colors duration-300"
                  >
                    View Live Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

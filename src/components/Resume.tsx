import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Resume = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeSection, setActiveSection] = useState('experience');

  const handleDownload = () => {
    // Create a print-friendly version
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const resumeContent = document.querySelector('.resume-content');
    if (!resumeContent) return;

    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('');
        } catch (e) {
          return '';
        }
      })
      .join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Ernest Maenda - Resume</title>
          <style>
            ${styles}
            body { font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 20px; }
            .print-version { max-width: none; box-shadow: none; }
            .no-print { display: none !important; }
            @media print { body { padding: 0; } }
          </style>
        </head>
        <body>
          <div class="print-version">
            ${resumeContent.innerHTML}
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const experience = [
    {
      title: "Software Engineering Bootcamp Trainee",
      company: "uncommon.org",
      period: "January 2025 – December 2025",
      description: "Completed intensive software engineering bootcamp with hands-on project development and peer mentoring in programming fundamentals.",
      achievements: [
        "Mentored fellow trainees in block-based programming (Scratch)",
        "Improved project completion rates through simplified logic instruction",
        "Developed MERN-stack marketplace with 20% performance optimization",
        "Mastered full-stack development with React, Node.js, and MongoDB"
      ],
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Scratch", "REST APIs"]
    },
    {
      title: "Lead Frontend Engineer & UX Architect (Project Showcase)",
      company: "mavu - Zimbabwe Civic Accountability Platform",
      period: "2024 - Present",
      description: "Personal project developing a civic accountability platform integrating government budget tracking, legislative voting, and corruption monitoring.",
      achievements: [
        "AI Integration: Leveraged Google Gemini API for Jargon Shredder (translates legislative text) and Daily Briefing engine",
        "Complex Data Visualization: Built Reality vs. Report gauges using Recharts for infrastructure verification",
        "Architectural Design: Created modular, type-safe architecture using React 19 and TypeScript",
        "Advanced UX/UI: Implemented Rule of Seven navigation and Serial Position Effect layout optimization",
        "Accountability Features: Engineered ZACC Bribe Map with custom Latency Meters for corruption tracking"
      ],
      tech: ["React 19", "TypeScript", "Google Gemini API", "Recharts", "Framer Motion", "Tailwind CSS"]
    },
    {
      title: "Full-Stack Developer (Project Showcase)",
      company: "Roomee - Household Operating System",
      period: "2023 - Present",
      description: "Personal project architecting a property management platform with escrow-protected transactions and multi-role ecosystem management.",
      achievements: [
        "Built full-stack platform with 3-tier property verification system",
        "Implemented real-time utility monitoring with interactive geospatial mapping",
        "Developed wealth-building logic and escrow transaction management",
        "Created multi-role ecosystem supporting property owners, managers, and residents"
      ],
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini AI", "Leaflet"]
    },
    {
      title: "AI Systems Developer (Personal Project)",
      company: "Fakushen - Multi-Agent AI Ecosystem",
      period: "2023 - Present",
      description: "Personal project developing an AI-powered event sourcing system for automated asset procurement and secure transactions.",
      achievements: [
        "Built agentic asset sourcing system with visual reference extraction",
        "Implemented Ghost Negotiator for automated vendor procurement",
        "Created Vault Escrow system for secure transaction processing",
        "Achieved 15% budget recovery through After-Party Flip optimization"
      ],
      tech: ["AI Agents", "CRUD Management", "Escrow Protocols", "QR Authentication"]
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn/ui"],
    "Backend": ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    "AI/ML": ["Google Gemini API", "OpenAI", "TensorFlow", "Machine Learning", "NLP"],
    "Tools": ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"]
  };

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Zimbabwe",
      period: "2019 - 2023",
      description: "Focus on Software Engineering, Data Structures, and Artificial Intelligence"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-card rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden resume-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-8 border-b border-border">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="font-display text-4xl font-bold text-foreground">ERNEST TAFADZWA MAENDA</h1>
                  <p className="text-xl text-muted-foreground mt-2">Full Stack Software Engineer (MERN)</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                    <span>Harare, Zimbabwe</span>
                    <span>|</span>
                    <span>+263 786 682 894</span>
                    <span>|</span>
                    <span>maendaernest@gmail.com</span>
                    <span>|</span>
                    <span>linkedin.com/in/ernest-t-maenda-2620323a1</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleDownload}
                    className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                    title="Download Resume as PDF"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-accent/10 rounded-lg transition-colors no-print"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[70vh]">
              <div className="space-y-8">
                {/* Professional Summary */}
                <section>
                  <h2 className="font-display text-2xl font-bold mb-4 text-accent">PROFESSIONAL SUMMARY</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    High-performing Full Stack Developer and Google Certified UX Designer with an intensive 12-month Software Engineering background from uncommon.org (Harare). Specialized in the MERN Stack (MongoDB, Express, React 19, Node.js), with a proven ability to engineer complex, resilient systems for civic accountability and household management. Expert in integrating Generative AI (Gemini API) and FinTech protocols to solve local infrastructure challenges.
                  </p>
                </section>

                {/* Technical Skills */}
                <section>
                  <h2 className="font-display text-2xl font-bold mb-4 text-accent">TECHNICAL SKILLS</h2>
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Full Stack:</span>
                      <span className="text-muted-foreground ml-2">MERN Stack (MongoDB, Express, React 19, Node.js), TypeScript, Python.</span>
                    </div>
                    <div>
                      <span className="font-semibold">AI & Data:</span>
                      <span className="text-muted-foreground ml-2">Google Gemini API (Agentic Workflows), Recharts, Data Visualization.</span>
                    </div>
                    <div>
                      <span className="font-semibold">Infrastructure:</span>
                      <span className="text-muted-foreground ml-2">Docker, Kubernetes, CI/CD, Microservices, Leaflet GIS.</span>
                    </div>
                    <div>
                      <span className="font-semibold">Design:</span>
                      <span className="text-muted-foreground ml-2">Figma, UX Research, Interaction Design, Wireframing.</span>
                    </div>
                  </div>
                </section>

                {/* Technical Projects */}
                <section>
                  <h2 className="font-display text-2xl font-bold mb-6 text-accent">TECHNICAL PROJECTS</h2>

                  <div className="space-y-8">
                    {/* Mavu */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border-l-2 border-accent/20 pl-6"
                    >
                      <h3 className="font-display text-xl font-semibold mb-2">Mavu | Zimbabwe Civic Accountability Platform</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><span className="font-medium">Impact:</span> Developed a mobile-first React app that decodes government legislation for ordinary citizens.</p>
                        <p><span className="font-medium">Innovation:</span> Built an AI "Jargon Shredder" using Gemini API to simplify legal text, improving accessibility by translating complex documents into plain language.</p>
                        <p><span className="font-medium">Visual Engineering:</span> Implemented a ZACC Bribe Map with real-time latency meters to visualize corruption data geographically.</p>
                      </div>
                    </motion.div>

                    {/* Roomee */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="border-l-2 border-accent/20 pl-6"
                    >
                      <h3 className="font-display text-xl font-semibold mb-2">Roomee | Zimbabwe's Household Operating System</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><span className="font-medium">Architecture:</span> Lead Developer for a multi-role ecosystem (Tenant/Landlord/Pro) built to solve trust gaps in the Zimbabwean housing market.</p>
                        <p><span className="font-medium">Resilience Engineering:</span> Built a "Utility Pulse" system to verify solar/borehole status, ensuring infrastructure claims are backed by real-time data.</p>
                        <p><span className="font-medium">FinTech:</span> Integrated multi-currency wallet support (USD/ZiG) with escrow-protected transaction logic.</p>
                      </div>
                    </motion.div>

                    {/* Fakushen */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="border-l-2 border-accent/20 pl-6"
                    >
                      <h3 className="font-display text-xl font-semibold mb-2">Fakushen | Multi-Agent AI Ecosystem</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><span className="font-medium">Agentic Logic:</span> Engineered a "Ghost Negotiator" AI agent that automates procurement by acting as a proxy between vendors and hosts.</p>
                        <p><span className="font-medium">Security:</span> Designed the "Handshake QR" protocol, a physical-to-digital escrow release mechanism for service verification.</p>
                      </div>
                    </motion.div>
                  </div>
                </section>

                {/* Professional Experience */}
                <section>
                  <h2 className="font-display text-2xl font-bold mb-6 text-accent">PROFESSIONAL EXPERIENCE</h2>

                  <div className="space-y-6">
                    {/* Junior Instructor */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border-l-2 border-accent/20 pl-6"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-lg font-semibold">Junior Instructor | uncommon.org (Harare)</h3>
                        <span className="text-sm text-muted-foreground">Jan 2025 – Dec 2025</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          Mentored 50+ students in foundational logic and Scratch programming.
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          Selected as a Junior Instructor following a top-tier performance in the 12-month engineering bootcamp.
                        </li>
                      </ul>
                    </motion.div>

                    {/* Software Engineering Intern */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="border-l-2 border-accent/20 pl-6"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-lg font-semibold">Software Engineering Intern | Sehi Group</h3>
                        <span className="text-sm text-muted-foreground">June 2025 – Sept 2025</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          Optimized MERN-stack API endpoints, reducing data fetch latency by 20% for a marketplace platform.
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </section>

                {/* Certifications & Education */}
                <section>
                  <h2 className="font-display text-2xl font-bold mb-6 text-accent">CERTIFICATIONS & EDUCATION</h2>

                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border-l-2 border-accent/20 pl-6"
                    >
                      <h3 className="font-display text-lg font-semibold">Software Engineering Technology Bootcamp | uncommon.org (Harare)</h3>
                      <p className="text-sm text-muted-foreground">(2025)</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="border-l-2 border-accent/20 pl-6"
                    >
                      <h3 className="font-display text-lg font-semibold">IBM Full Stack Software Developer Professional Certificate</h3>
                      <p className="text-sm text-muted-foreground">(2025)</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="border-l-2 border-accent/20 pl-6"
                    >
                      <h3 className="font-display text-lg font-semibold">Google UX Design Professional Certificate</h3>
                      <p className="text-sm text-muted-foreground">(2025)</p>
                    </motion.div>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Resume;

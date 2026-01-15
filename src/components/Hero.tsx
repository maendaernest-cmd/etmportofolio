import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const Hero = ({ onResumeClick }: { onResumeClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-background/50" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent text-sm uppercase tracking-[0.3em] font-body font-medium"
          >
            Full Stack Software Engineer
          </motion.p>
          
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight"
          >
            <span className="text-foreground">ERNEST</span>
            <span className="block text-gradient">MAENDA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-body font-light leading-relaxed"
          >
            Full Stack Software Engineer (MERN) specializing in civic accountability platforms,
            AI integration, and resilient system architecture.
          </motion.p>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-body font-medium text-sm tracking-wide hover:bg-accent/90 transition-all duration-300 group shadow-lg shadow-accent/20"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <button
              onClick={onResumeClick}
              className="inline-flex items-center gap-3 px-8 py-4 border border-accent/20 text-accent rounded-full font-body font-medium text-sm tracking-wide hover:bg-accent/10 transition-all duration-300 group"
            >
              View Resume
              <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-accent/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

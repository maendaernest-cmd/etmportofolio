import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className="font-display text-xl font-semibold hover:text-accent transition-colors duration-300"
          >
            EM
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="mailto:maendaernest@gmail.com"
            className="px-4 py-2 bg-foreground text-background rounded-full font-body text-sm font-medium hover:bg-accent transition-colors duration-300"
          >
            Say Hello
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navigation;
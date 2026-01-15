import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";

const Index = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="dark">
      <Navigation />
      <Hero onResumeClick={() => setIsResumeOpen(true)} />
      <section id="about">
        <About />
      </section>
      <Skills />
      <Projects />
      <Experience />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </main>
  );
};

export default Index;

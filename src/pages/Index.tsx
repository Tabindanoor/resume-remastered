import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Education from "@/components/Portfolio/Education";
import Experience from "@/components/Portfolio/Experience";
import Research from "@/components/Portfolio/Research";
import Skills from "@/components/Portfolio/Skills";
import Contact from "@/components/Portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Research />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;

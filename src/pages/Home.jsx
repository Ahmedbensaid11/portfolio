import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
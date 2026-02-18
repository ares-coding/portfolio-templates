import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechExpertise from "./components/TechExpertise";
import TechStackGrid from "./components/TechStackGrid";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechExpertise />
        <TechStackGrid />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import ParticleBackground from "./background/ParticleBackground";
import Navigation from "./navbar/Navbar";
import AboutSection from "./about/About";
import ContactSection from "./contact/Contact";
import HeroSection from "./hero/Hero-section";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Testimonials from "./testmonial/Testimonials";

export default function Layout() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navigation />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <Testimonials />
        <Projects />
        <Skills />
        <ContactSection />
      </main>
    </div>
  );
}

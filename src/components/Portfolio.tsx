import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./Portfolio.css";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = async (main: Engine) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#050e1cff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              size: 6,
              opacity: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "#60a5fa", "#3b82f6"],
          },
          links: {
            enable: true,
            distance: 100,
            color: "#60a5fa",
            opacity: 0.2,
            width: 0.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 120,
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 0.5, max: 2.5 },
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.pageYOffset >= sectionTop - 200 &&
          window.pageYOffset < sectionTop + sectionHeight - 200
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Portfolio</span>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                // For demo purposes, scroll to bottom since we don't have a contact section
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">John Doe</span>
        </h1>
        <p className="hero-subtitle">Full-Stack Developer & UI/UX Enthusiast</p>
        <p className="hero-description">
          I create beautiful, functional web applications with modern
          technologies and a focus on user experience.
        </p>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather forecasting application with interactive maps",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "TypeScript", level: 80 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Figma", level: 80 },
        { name: "Jest", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-description">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>
          <a href="mailto:john.doe@example.com" className="contact-button">
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navigation />
      <main className="main-content">
        <HeroSection />
        <Projects />
        <Skills />
        <ContactSection />
      </main>
    </div>
  );
}

export default Portfolio;

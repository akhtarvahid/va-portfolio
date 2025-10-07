import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
  FaLinkedin,
  FaFileDownload,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";
import "./Portfolio.css";
import type { Engine } from "tsparticles-engine";
import JSLogo from "../assets/skills/javascript.svg";
import ReactLogo from "../assets/skills/react.svg";
import HTMLLogo from "../assets/skills/html.svg";
import CSSLogo from "../assets/skills/css.svg";
import TypeScriptLogo from "../assets/skills/typescript.svg";
import NestjsLogo from "../assets/skills/nestjs-svgrepo-com.svg";
import NodejsLogo from "../assets/skills/node.js.svg";
import PythonLogo from "../assets/skills/python.svg";
import PostgresLogo from "../assets/skills/postgresql.svg";
import MongoLogo from "../assets/skills/mongodb.svg";
import GitLogo from "../assets/skills/git.svg";
import DockerLogo from "../assets/skills/docker.svg";
import AWSLogo from "../assets/skills/aws.svg";
import FigmaLogo from "../assets/skills/figma.svg";
import JestLogo from "../assets/skills/jest.svg";
import MindtreeLogo2 from "../assets/mindtree2.png";
import SCLogo from "../assets/startupsclub.jpg";
import YaraLogo from "../assets/yara1.png";
import StyledComponentLogo from "../assets/skills/styled-components.svg";

const profileImage =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300";

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
            value: "#020e1eff",
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
              distance: 400,
              duration: 2,
              size: 25, // Increased bubble size on hover
              opacity: 0.5, // Full opacity
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#ffffff", "#e04250ff", "#e6f1ff", "#a8b2d1", "#21b4eeff"],
          },
          links: {
            enable: true,
            distance: 30,
            color: "#64ffda",
            opacity: 0.4,
            width: 0.3,
          },
          move: {
            enable: true,
            speed: 1,
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
              area: 950,
            },
            value: 250,
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
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
  const [menuOpen, setMenuOpen] = useState(false);

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
          <span>VA</span>
        </div>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    // In a real application, this would link to your actual resume
    window.open("/resume.pdf", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com", "_blank");
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello 👋, my name is</p>
          <h1 className="hero-title">John Doe</h1>
          <h2 className="hero-subtitle">I build things for the web.</h2>
          <p className="hero-description">
            I'm a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building accessible, human-centered products.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleContactClick}>
              <FaEnvelope className="btn-icon" />
              Get In Touch
            </button>
            <button className="btn btn-secondary" onClick={handleLinkedInClick}>
              <FaLinkedin className="btn-icon" />
              LinkedIn
            </button>
            <button className="btn btn-outline" onClick={handleResumeClick}>
              <FaFileDownload className="btn-icon" />
              Resume
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-image-container">
            <img src={profileImage} alt="John Doe" className="profile-image" />
            <div className="image-border"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll down</span>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const [activeExperience, setActiveExperience] = useState<null | string>("I");
  const experiences = [
    {
      id: "I",
      title: "Software Developer",
      company: "Yara International",
      duration: "Jul 2021 - Present",
      location: "Bengaluru, Karnataka, India",
      description:
        "Developing enterprise-level software solutions for agricultural technology.",
      achievements: [
        "Led migration of legacy systems to microservices architecture",
        "Improved application performance by 40% through optimization",
        "Mentored 3 junior developers in best practices",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      image: YaraLogo,
    },
    {
      id: "II",
      title: "Senior Software Engineer",
      company: "Mindtree · Full-time",
      duration: "Jun 2019 - Jun 2021",
      location: "Bengaluru, India",
      description:
        "Led frontend development for multiple client projects and implemented CI/CD pipelines.",
      achievements: [
        "Reduced deployment time by 60% with automated pipelines",
        "Architected scalable React applications for 50k+ users",
        "Implemented design system used across 10+ projects",
      ],
      technologies: ["React", "TypeScript", "Jenkins", "Redux", "MongoDB"],
      image: MindtreeLogo2,
    },
    {
      id: "III",
      title: "Frontend Developer",
      company: "Startups Club Services",
      duration: "Apr 2018 - May 2019",
      location: "Bengaluru, India",
      description:
        "Built responsive user interfaces for startup products using React.js.",
      achievements: [
        "Delivered 15+ production-ready applications",
        "Improved page load times by 35% on average",
        "Collaborated with cross-functional agile teams",
      ],
      technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Git"],
      image: SCLogo,
    },
  ];
  const statsData = [
    { id: 1, icon: "🚀", number: "50+", label: "Projects Completed" },
    { id: 2, icon: "💼", number: "5+", label: "Years Experience" },
    { id: 3, icon: "⭐", number: "100%", label: "Client Satisfaction" },
    { id: 4, icon: "🔧", number: "15+", label: "Technologies" },
    { id: 5, icon: "🏆", number: "10+", label: "Awards & Certifications" },
    { id: 6, icon: "🌍", number: "3+", label: "Countries Served" },
  ];
  const toggleExperience = (id: string) => {
    setActiveExperience(activeExperience === id ? null : id);
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">01.</span>
          Professional Journey
        </h2>

        <div className="about-content">
          {/* Experience Accordion */}
          <div className="experience-accordion">
            <div className="accordion-container">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className={`accordion-item ${
                    activeExperience === exp.id ? "active" : ""
                  }`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleExperience(exp.id)}
                  >
                    <div className="accordion-indicator">
                      <span className="accordion-number">{exp.id}</span>
                      <div className="accordion-arrow">›</div>
                    </div>

                    <div className="accordion-main-info">
                      <h4>{exp.title}</h4>
                      <p className="company">{exp.company}</p>
                      <div className="accordion-meta">
                        <span className="duration">{exp.duration}</span>
                        <span className="location">{exp.location}</span>
                      </div>
                    </div>

                    <div className="accordion-image">
                      <img src={exp.image} alt={exp.company} />
                    </div>
                  </div>

                  <div className="accordion-content">
                    <div className="accordion-grid">
                      <div className="accordion-description">
                        <div className="achievements">
                          <h5>Key Achievements</h5>
                          <ul>
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="technologies-used">
                        <h5>Technologies</h5>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="quick-stats">
            {statsData.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <h4>{stat.number}</h4>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
        <h2 className="section-title">
          <span className="section-number">02.</span>
          Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
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
                    <FaGithub />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                    Live Demo
                  </a>
                </div>
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
        { name: "React", level: 90, logoUrl: ReactLogo },
        { name: "JavaScript", level: 85, logoUrl: JSLogo },
        { name: "HTML/CSS", level: 95, logoUrl: HTMLLogo },
        { name: "TypeScript", level: 80, logoUrl: TypeScriptLogo },
        { name: "Styled-components", level: 75, logoUrl: StyledComponentLogo },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Nestjs", level: 85, logoUrl: NestjsLogo },
        { name: "Node.js", level: 85, logoUrl: NodejsLogo },
        { name: "Python", level: 80, logoUrl: PythonLogo },
        { name: "MongoDB", level: 75, logoUrl: MongoLogo },
        { name: "PostgreSQL", level: 70, logoUrl: PostgresLogo },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, logoUrl: GitLogo },
        { name: "Docker", level: 70, logoUrl: DockerLogo },
        { name: "AWS", level: 65, logoUrl: AWSLogo },
        { name: "Jest", level: 75, logoUrl: JestLogo },
        { name: "Figma", level: 80, logoUrl: FigmaLogo },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">03.</span>
          Skills
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div style={{ display: "flex", gap: 5 }}>
                      {skill.logoUrl && (
                        <>
                          <img
                            style={{
                              height: 18,
                            }}
                            src={skill.logoUrl}
                            alt="logo"
                            className={skill.name}
                          />
                          {skill.name === "HTML/CSS" && (
                            <img
                              style={{ height: 18 }}
                              src={CSSLogo}
                              alt="logo"
                            />
                          )}
                        </>
                      )}
                      <span className="skill-name">{skill.name}</span>
                    </div>
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
        <h2 className="section-title">
          <span className="section-number">04.</span>
          Contact
        </h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm currently looking for new opportunities and interesting
            projects. Whether you have a question, want to collaborate, or just
            want to say hello, I'll do my best to get back to you!
          </p>
          <a href="mailto:john.doe@example.com" className="contact-button">
            <FaEnvelope className="btn-icon" />
            Say Hello
          </a>
          <div className="social-links">
            <a href="#" className="social-link">
              <FaGithub />
            </a>
            <a href="#" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link">
              <FaTwitter />
            </a>
            <a
              href="https://stackoverflow.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stack Overflow"
            >
              <FaStackOverflow />
            </a>
          </div>
        </div>
        {/* Copyright Footer */}
        {/* Copyright Footer - Outside container for full width */}
        <div className="copyright-footer">
          <div className="container">
            <p>&copy; 2025 Vahid Akhtar. All rights reserved.</p>
          </div>
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
        <AboutSection />
        <Projects />
        <Skills />
        <ContactSection />
      </main>
    </div>
  );
}

export default Portfolio;

import { FaAws, FaGithub } from "react-icons/fa";
import { StackApps } from "../../assets";
import { useState, useRef, useEffect } from "react";
import './project.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Medium-ms",
      description: "A full-stack blogging app with React, Nest.js, and PostgreSQL",
      technologies: ["React", "Nestjs.js", "PostgreSQL", "TypeORM"],
      github: "https://github.com/akhtarvahid/medium-ms",
      demo: "https://demo.com",
    },
    {
      id: 2,
      title: "Topics note App",
      description: "A collaborative topics management application",
      technologies: ["React", "github-page", "React-bootstrap", "SWR"],
      github: "https://github.com/akhtarvahid/topics-note?tab=readme-ov-file",
      demo: "https://akhtarvahid.github.io/topics-note/",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with interactive maps",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      id: 33,
      title: "NW Weather Dashboard",
      description: "Real-time weather forecasting application with interactive maps",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container: any = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.querySelector('.project-card').offsetWidth + 32; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container: any = scrollContainerRef.current;
      const cardWidth = container.querySelector('.project-card').offsetWidth + 32;
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container: any = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02.</span>
          Projects
        </h2>
        
        {/* Scrollable Gallery Container */}
        <div className="projects-scroll-container">
          <div 
            className="projects-scroll-wrapper"
            ref={scrollContainerRef}
          >
            <div className="projects-scroll-content">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="proj-tech-tags">
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
                        <FaAws />
                        Live Demo
                      </a>
                      <a
                        href={project.demo}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img style={{ height: 20 }} src={StackApps} alt="stack" />
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="scroll-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator-dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
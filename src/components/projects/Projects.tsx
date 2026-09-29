import { FaAws, FaGithub } from "react-icons/fa";
import { StackApps } from "../../assets";
import "./project.css";
import { ALL_REPOS } from "../../common/constant";
import { projectsData } from "../../common/data";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02.</span>
          Projects
        </h2>
        <div
          className={`projects-container ${
            projectsData.length > 3 ? "scrollable" : ""
          }`}
        >
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                  </div>
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
                      <span className="link-text">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaAws />
                      <span className="link-text">Live Demo</span>
                    </a>
                    <a
                      href={ALL_REPOS}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img style={{ height: 20 }} src={StackApps} alt="stack" />
                      <span className="link-text">View More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { FaAws, FaGithub } from "react-icons/fa";
import { StackApps } from "../../assets";
import "./project.css";
import { ALL_REPOS } from "../../common/constant";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Medium-MS",
      description:
        "A full-stack blogging platform with real-time features, user authentication, and rich text editing capabilities. Built with modern web technologies for seamless content creation and sharing.",
      technologies: [
        "React",
        "Nest.js",
        "PostgreSQL",
        "TypeORM",
        "JWT",
        "Redis",
      ],
      github: "https://github.com/akhtarvahid/medium-ms",
      demo: "https://github.com/akhtarvahid/medium-ms",
      featured: true,
    },
    {
      id: 2,
      title: "Topics Note App",
      description:
        "A collaborative topic management application with real-time updates, categorization, and search functionality. Enables teams to organize and share knowledge efficiently.",
      technologies: [
        "React",
        "GitHub Pages",
        "React Bootstrap",
        "SWR",
        "Context API",
      ],
      github: "https://github.com/akhtarvahid/topics-note",
      demo: "https://akhtarvahid.github.io/topics-note/",
      featured: true,
    },
    {
      id: 3,
      title: "E-Commerce API",
      description:
        "A robust backend e-commerce solution with product management, user authentication, order processing, and payment integration. Built with scalable architecture in mind.",
      technologies: [
        "Nest.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Stripe API",
      ],
      github: "https://github.com/akhtarvahid/ecommerce",
      demo: "http://ec2-16-171-32-7.eu-north-1.compute.amazonaws.com/api",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive and modern portfolio website showcasing projects and skills with smooth animations and optimized performance across all devices.",
      technologies: ["React", "TypeScript", "CSS3", "Framer Motion", "Vite"],
      github: "https://github.com/akhtarvahid/portfolio",
      demo: "https://your-portfolio-link.com", // Add your actual portfolio link
      featured: true,
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02.</span>
          Projects
        </h2>
        <div
          className={`projects-container ${
            projects.length > 3 ? "scrollable" : ""
          }`}
        >
          <div className="projects-grid">
            {projects.map((project) => (
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

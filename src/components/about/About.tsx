import { useState } from "react";
import { MindtreeLogo2, SCLogo, YaraLogo } from "../../assets";
import "./about.css";
import { FaBriefcase } from "react-icons/fa";

const AboutSection = () => {
  const [activeExperience, setActiveExperience] = useState<null | string>("");
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
        "Led the migration of a web application, improving performance and enhancing the user experience.",
        "Built a farmer-facing web app that automated growth stage calendars, boosting crop yields by 20%.",
        "Created reusable Storybook UI components, streamlining the development process and maintaining design consistency.",
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
        "Built reusable UI components that are used across the project.",
        "Architected scalable React typescript applications for 100k+ users.",
        "Developed search module with autosuggestion and recent searches is being used across 45+ countries by 100k+ users.",
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
        "Engineered React migration from jQuery, boosting performance 50% and productivity 65%.",
        "Designed routing architecture for 50+ enterprise pages with conditional layouts and auth.",
        "Developed social platform with real-time interactions and nested comments for 10K+ users.",
      ],
      technologies: ["React", "JavaScript", "CSS3", "REST APIs", "Git"],
      image: SCLogo,
    },
  ];
  const statsData = [
    { id: 1, icon: "🚀", number: "10+", label: "Projects Completed" },
    { id: 2, icon: "💼", number: "7+", label: "Years Experience" },
    { id: 3, icon: "⭐", number: "100%", label: "Client Satisfaction" },
    { id: 4, icon: "🔧", number: "15+", label: "Technologies" },
    { id: 5, icon: "🏆", number: "10+", label: "Awards & Certifications" },
    { id: 6, icon: "🌍", number: "5+", label: "Countries Served" },
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
                      <span className="accordion-number">
                        <FaBriefcase className="job-icon briefcase-icon" />
                      </span>
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

export default AboutSection;

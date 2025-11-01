import { useState } from "react";
import { MindtreeLogo2, SCLogo, YaraLogo } from "../../assets";
import NitDurgapur from "../../assets/education/NIT_Durgapur_Logo.svg";
import Shiats from "../../assets/education/shiats.png";

import "./about.css";
import {
  FaBriefcase,
  FaChevronRight,
  FaGraduationCap,
  FaInfoCircle,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";

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
  const [hoveredEducation, setHoveredEducation] = useState<null | string>(null);
  const [activeEducation, setActiveEducation] = useState<null | string>(null);
  const [hoveredCard, setHoveredCard] = useState<null | string>(null);

  // Education data - add this new array
  const educationData = [
    {
      id: "edu1",
      degree: "Master of Computer Application",
      college: "NIT Durgapur",
      location: "Durgapur, West Bengal, India",
      duration: "2013 - 2016",
      description:
        "Completed Master's in Computer Application from National Institute of Technology Durgapur, one of India's premier technical institutions. The program provided advanced knowledge in software engineering, database management, algorithms, and web technologies. Gained hands-on experience through various projects including distributed systems, machine learning applications, and enterprise software development. The curriculum emphasized both theoretical foundations and practical implementation, preparing for real-world software development challenges.",
      gpa: "8.5/10 CGPA",
      degreeIcon: <FaGraduationCap className="degree-icon" />,
      collegeIcon: (
        <img src={NitDurgapur} alt="NIT Durgapur" className="college-icon" />
      ),
    },
    {
      id: "edu2",
      degree: "Bachelor in Computer Application",
      college: "SHIATS",
      location: "Allahabad, Uttar Pradesh, India",
      duration: "2010 - 2013",
      description:
        "Earned Bachelor's degree in Computer Application from Sam Higginbottom University of Agriculture, Technology and Sciences. The program built strong fundamentals in programming, data structures, computer networks, and software development methodologies. Developed foundational skills in various programming languages and database management systems. Participated in academic projects that involved building desktop applications and web-based systems, laying the groundwork for advanced studies and professional career in software development.",
      gpa: "85%",
      degreeIcon: <FaUniversity className="degree-icon" />,
      collegeIcon: <img src={Shiats} alt="SHIATS" className="college-icon" />,
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
  const toggleEducation = (id: string) => {
    setActiveEducation(activeEducation === id ? null : id);
  };

  const handleEducationHover = (id: string | null) => {
    setHoveredEducation(id);
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

          {/* Education Section - Where It Began */}
          <div className="education-section">
            <h3 className="education-title">
              <FaGraduationCap className="title-icon" />
              Where It Began
            </h3>

            <div className="education-accordion">
              <div className="accordion-container">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className={`accordion-item ${
                      activeEducation === edu.id ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion-header"
                      onClick={() => toggleEducation(edu.id)}
                    >
                      <div className="accordion-indicator">
                        <span className="accordion-number">
                          {edu.degreeIcon}
                        </span>
                        <div className="accordion-arrow">
                          <FaChevronRight />
                        </div>
                      </div>

                      <div className="accordion-main-info">
                        <h4>{edu.degree}</h4>
                        <p className="company">{edu.college}</p>
                        <div className="accordion-meta">
                          <span className="duration">{edu.duration}</span>
                          <span className="location">{edu.location}</span>
                          {/* {edu.gpa && <span className="gpa">{edu.gpa}</span>} */}
                        </div>
                      </div>

                      <div className="accordion-image">
                        <div className="college-logo-icon">
                          {edu.collegeIcon}
                        </div>
                      </div>
                    </div>

                    <div className="accordion-content">
                      <div className="accordion-grid">
                        <div className="accordion-description">
                          <div className="achievements">
                            <h5>About This Program</h5>
                            <p>{edu.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

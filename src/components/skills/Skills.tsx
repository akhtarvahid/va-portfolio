import {
  AWSLogo,
  CSSLogo,
  DockerLogo,
  FigmaLogo,
  GitLogo,
  HTMLLogo,
  JestLogo,
  JSLogo,
  MongoLogo,
  NestjsLogo,
  NodejsLogo,
  PostgresLogo,
  PythonLogo,
  ReactLogo,
  StyledComponentLogo,
  TypeScriptLogo,
} from "../../assets";
import './skills.css';


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

export default Skills;

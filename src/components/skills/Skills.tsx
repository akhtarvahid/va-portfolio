import { CSSLogo } from "../../assets";
import { skillCategories } from "../../common/data";
import "./skills.css";

const Skills = () => {
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

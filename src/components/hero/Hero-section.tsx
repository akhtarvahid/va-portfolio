import { FaEnvelope, FaFileDownload, FaLinkedin } from "react-icons/fa";
import "./hero.css";
const profileImage =
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300";

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
          <p className="hero-greeting">
            Hello <span className="waving-hand">👋</span>, my name is
          </p>
          <h1 className="hero-title">John Doe</h1>
          <h2 className="hero-subtitle">I build things for the web.</h2>
          <p className="hero-description">
            I'm a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I'm focused on building accessible, human-centered products.
          </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleContactClick} aria-label="Get In Touch">
            <FaEnvelope className="btn-icon" />
            <span className="btn-text">Get In Touch</span>
          </button>
          <button className="btn btn-secondary" onClick={handleLinkedInClick} aria-label="LinkedIn">
            <FaLinkedin className="btn-icon" />
            <span className="btn-text">LinkedIn</span>
          </button>
          <button className="btn btn-outline" onClick={handleResumeClick} aria-label="Resume">
            <FaFileDownload className="btn-icon" />
            <span className="btn-text">Resume</span>
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

export default HeroSection;

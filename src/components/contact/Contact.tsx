import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from "react-icons/fa";
import "./contact.css";
import { contactContent, copyRightsText } from "../../common/data";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">04.</span>
          Contact
        </h2>
        <div className="contact-content">
          <p className="contact-description">{contactContent}</p>
          <a href="mailto:vahidakhtar2@gmail.com" className="contact-button">
            <FaEnvelope className="btn-icon" />
            Say Hello
          </a>
          <div className="social-links">
            <a
              href="https://www.github.com/akhtarvahid/"
              target="_blank"
              className="social-link github-link"
            >
              <FaGithub className="btn-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhtarvahid/"
              target="_blank"
              className="social-link linkedin-link"
            >
              <FaLinkedin className="btn-icon" />
            </a>
            <a
              href="https://x.com/vahidakhtar4"
              target="_blank"
              className="social-link twitter-link"
            >
              <FaTwitter className="btn-icon" />
            </a>
            <a
              href="https://stackoverflow.com"
              className="social-link stackoverflow-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Stack Overflow"
            >
              <FaStackOverflow className="btn-icon" />
            </a>
          </div>
        </div>
        {/* Copyright Footer */}
        <div className="copyright-footer">
          <div className="container">
            <p>&copy;{copyRightsText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

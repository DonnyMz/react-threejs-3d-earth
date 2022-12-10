import Header from "../../components/header/Header";
import "./contact.css";
import { FaGithubAlt, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <Header />

      <section className="contact">
        <h1 className="contact-title">Contact</h1>

        <div className="contact-icons">
          <figure>
            <a
              href="https://github.com/DonnyMz/"
              className="icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubAlt color="black" />
            </a>
          </figure>
          <figure>
            <a
              href="https://linkedin.com/in/danny-munoz-reyes-074956231"
              className="icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="blue" />
            </a>
          </figure>
          <figure>
            <a
              href="https://twitter.com/DoniMunoz"
              className="icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare />
            </a>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Contact;

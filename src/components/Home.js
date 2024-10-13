import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import developerIllustration from "../assets/developer-illustration.svg.svg";

import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="profile">
        <img
          src={developerIllustration}
          alt="Developer Illustration"
          className="profile-image"
        />

        <h2>Krushikesh Shelar</h2>
        <p>Information Technology Student</p>
      </div>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> krushikeshshelar@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +91-7738954505
        </p>
        <p>
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a href="https://github.com/yourusername">GitHub</a>
        </p>
      </div>
      <div className="summary">
        <h3>Summary</h3>
        <p>
          Passionate Information Technology student with a strong foundation in
          programming and a keen interest in software development. Experienced
          in various programming languages and frameworks, with a track record
          of successful project completions.
        </p>
      </div>
    </section>
  );
}

export default Home;

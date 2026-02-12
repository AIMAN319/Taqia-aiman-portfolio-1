import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./App.css";
import profile from "./taqia-photo.jpg.jpeg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Taqia Aiman</div>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* Introduction */}
      <section className="home">
        <div className="home-container">

          <div className="home-image">
            <img
              src={profile}
              alt="Taqia Aiman"
              className="profile-pic"
            />
          </div>

          <div className="home-content">
            <h1>Taqia Aiman</h1>
            <h2>Robotics Engineering Student | Aspiring Web Developer</h2>
            <p>
              I am a 6th-semester Robotics Engineering student with foundational
              knowledge in HTML and CSS. I am actively learning web technologies
              and passionate about building clean, responsive user interfaces.
              I am highly adaptable and eager to grow in the field of development.
            </p>
            <div className="hero-buttons">
  <a href="#projects" className="primary-btn">
    View Projects
  </a>
  <a href="#contact" className="secondary-btn">
    Contact Me
  </a>
</div>

          </div>

        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I come from a Robotics Engineering background and have recently
          developed a strong interest in web development and cloud technologies.
        </p>
        <p>
          Although I am at the early stage of my technical journey, I am
          committed to continuous learning and skill improvement. I believe in
          learning by building and adapting quickly to new tools and technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Technical Skills</h3>
            <ul>
              <li>HTML (Structure & Semantic Tags)</li>
              <li>CSS (Basic Styling & Layouts)</li>
              <li>Responsive Design</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Currently Learning</h3>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Cloud Computing</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Soft Skills</h3>
            <ul>
              <li>Adaptability</li>
              <li>Fast Learner</li>
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects / Learning Work</h2>
        <h3>Learning Portfolio Website (Ongoing Project)</h3>
        <p>
          This portfolio itself is part of my learning journey where I am
          applying my HTML and CSS knowledge to create structured and
          responsive layouts.
        </p>
        <p>
          I am continuously improving this site as I learn new technologies.
        </p>
      </section>

      {/* Experience */}
      <section>
        <h2>Experience</h2>
        <p><strong>Fresher — Actively Building Skills</strong></p>
        <p>
          Currently focusing on strengthening my technical foundation through
          self-learning, online courses, and practical exercises.
        </p>
      </section>

      {/* Education */}
      <section>
        <h2>Education</h2>
        <p><strong>Bachelor of Engineering — Robotics Engineering</strong></p>
        <p>Currently in 6th Semester</p>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: aimantaqia7@gmail.com</p>
        <p>Phone: 8884484710</p>
      </section>

      <footer>
        <p>"Learning, improving, and building step by step."</p>
        <p>© 2024 Taqia Aiman</p>
      </footer>

    </div>
  );
}

export default App;

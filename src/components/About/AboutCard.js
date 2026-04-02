import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">John Pineda</span> from{" "}
            <span className="purple">Wanaque, New Jersey</span>.
            <br />
            <br />
            I’m an aspiring <span className="purple">Civil Engineer</span> and{" "}
            <span className="purple">Entrepreneur</span>, currently working as an{" "}
            <span className="purple">Analyst</span> in a startup environment at{" "}
            <span className="purple">Howie AI</span>. I contribute to{" "}
            <span className="purple">data-driven insights</span> while expanding my
            experience through <span className="purple">freelance engineering design</span> projects.
            <br />
            <br />
            I earned my B.S. in{" "}
            <span className="purple">Engineering Entrepreneurship</span> from{" "}
            <span className="purple">Henry M. Rowan College of Engineering</span>, with a minor in{" "}
            <span className="purple">Electrical & Computer Engineering</span>. I am currently pursuing my M.S. in{" "}
            <span className="purple">Civil Engineering</span> at{" "}
            <span className="purple">New Jersey Institute of Technology</span>, focusing on surveying, construction management, structural engineering, and finite element analysis.
            <br />
            <br />
            My background spans multiple technical disciplines including{" "}
            <span className="purple">circuit analysis</span>,{" "}
            <span className="purple">CAD design</span>,{" "}
            <span className="purple">embedded systems</span>,{" "}
            <span className="purple">FPGA development</span>, and{" "}
            <span className="purple">product development</span>.
            <br />
            <br />
            With over <span className="purple">4+ years of experience</span>, I thrive in fast-paced environments that require adaptability, structure, and execution. I enjoy leading teams, optimizing workflows, and solving real-world problems through hands-on work and strong coordination.
            <br />
            <br />
            While I have a foundation in software and electrical engineering, I’m especially passionate about{" "}
            <span className="purple">civil engineering</span>, particularly in{" "}
            <span className="purple">facilities management</span>,{" "}
            <span className="purple">BIM</span>,{" "}
            <span className="purple">infrastructure systems</span>, and{" "}
            <span className="purple">site-based work</span>. I enjoy combining fieldwork with technical modeling and leveraging{" "}
            <span className="purple">GIS data</span> to create practical, impactful solutions.
            <br />
            <br />
            Driven by curiosity since childhood, I’ve always been interested in how systems work and how to improve them. My long-term goal is to grow as an engineer and build my own{" "}
            <span className="purple">engineering consulting company</span>.
            <br />
            <br />
            Outside of work, I love staying creative and active:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building drones & exploring AI projects 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking, skiing, and hiking with my dog ares 🐶
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating, learning, and connecting with builders 🤝
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I didn't fail 1000 times. The light bulb was an invention with 1000 steps."
          </p>
          <footer className="blockquote-footer">Thomas A. Edison</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
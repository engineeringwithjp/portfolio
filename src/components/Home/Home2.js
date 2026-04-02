import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/circle_headshot.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Whether you’re a recruiter, fellow engineer, or a curious stranger,
              thank you for visiting! I hope my work inspires you to build and explore more projects.
              <br />
              <br />
              I’m <b className="purple">John Pineda</b>, an aspiring{" "}
              <b className="purple">Civil Engineer</b> focused on building
              practical, data-driven solutions.
              <br />
              <br />
              With <b className="purple">4+ years of experience</b> across{" "}
              <b className="purple">operations</b>,{" "}
              <b className="purple">engineering coordination</b>, and{" "}
              <b className="purple">project management</b>, I turn complex problems into efficient, real-world systems.
              <br />
              <br />
              Skilled in <b className="purple">Python</b>,{" "}
              <b className="purple">MATLAB</b>,{" "}
              <b className="purple">MS Office</b>,{" "}
              <b className="purple">Project Management</b>, and I enjoy utilizing{" "}
              <b className="purple">CAD</b> and{" "}
              <b className="purple">GIS</b> to develop analytical projects that support smarter planning and real-world decision-making.
              <br />
              <br />
              I’m currently seeking opportunities to contribute to{" "}
              <b className="purple">Civil Engineering</b> and{" "}
              <b className="purple">Infrastructure Projects</b> while continuing to grow as a builder, entrepreneur, and problem-solver.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
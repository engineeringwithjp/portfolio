import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// ── Kept projects ──────────────────────────────────────────────────────────
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

// ── Facilities Management ──────────────────────────────────────────────────
// Team photo taken at the West Orange Armory site visit
import teamPhoto from "../../Assets/Projects/site_visit.JPG";
// CCQ newsletter PDF (primary highlight)
import ccqPdf from "../../Assets/Projects/Sustainable-Facilities-Project.pdf";
// Background memo PDF
import memoPdf from "../../Assets/Projects/Pineda_Background-Memo.docx"; // docx – opens in browser/OS handler

// ── OnShape CAD Projects ───────────────────────────────────────────────────
import cadSketch from "../../Assets/Projects/excercise20.jpg";
import flangedElbowPdf from "../../Assets/Projects/flanged_elbow.pdf";

// ── Face Recognition ───────────────────────────────────────────────────────
import faceReportPdf from "../../Assets/Projects/Pineda_Xu_FaceRecognition_Report.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* ── Skiing Weather Dashboard ─────────────────────────────── */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Skiing Weather Dashboard"
              tags={["HTML", "JavaScript", "TailwindCSS", "API"]}
              description="A zero-dependency web app displaying real-time ski conditions for Stratton Mountain. Integrates the Open-Meteo API for live snowfall, temperature, wind, and freezing-level data with interactive Chart.js visualizations. Includes a built-in ChatGPT trip-planning assistant and one-click social preview image export. Deploys instantly on any static host."
              ghLink="https://github.com/engineeringwithjp/stratton-weather-dashboard.git"
              demoLink="https://engineeringwithjp.github.io/stratton-weather-dashboard/"
            />
          </Col>

          {/* ── Face Recognition & Emotion Detection ─────────────────── */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition & Emotion Detection"
              tags={["Python", "TensorFlow", "OpenCV", "CNN"]}
              description="Trained a CNN classifier on the FER-2013 dataset using Keras and TensorFlow, achieving 60.1% accuracy across multiple emotion categories. OpenCV is used for real-time face detection; the detected face is passed to the classifier for live emotion prediction. Feature extraction was performed via 2-D DCT zigzag scanning and a kNN classifier evaluated on the AT&T face database."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              pdfLink={faceReportPdf}
              pdfLabel="Lab Report"
            />
          </Col>

          {/* ── Facilities Management Internship ─────────────────────── */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamPhoto}
              isBlog={false}
              title="Facilities Management Internship"
              tags={["CMMS", "FacilityDude", "PMP", "NJDMAVA"]}
              description="Collaborated with Rowan University's Sustainable Facilities Center (SFC) and the NJ Department of Military & Veterans Affairs (NJDMAVA) to develop Level II Planned Maintenance Plans for armory facilities across New Jersey. Conducted on-site inspections of HVAC, electrical, fire, and plumbing systems; entered data into the FacilityDude CMMS; and co-authored an article featured in the NJARNG Clean Cut Quarterly sustainability newsletter."
              extraDetail="The Sustainable Facilities clinic pairs Rowan engineering juniors and seniors with credentialed engineers to solve real maintenance challenges. Work is guided by BUILDER SMS asset data and culminates in actionable maintenance schedules that reduce reactive repairs and support NJDMAVA's push toward planned, preventative maintenance across 150+ buildings."
              pdfLink={ccqPdf}
              pdfLabel="Clean Cut Quarterly"
              pdfLink2={memoPdf}
              pdfLabel2="Background Memo"
            />
          </Col>

          {/* ── OnShape CAD Projects ──────────────────────────────────── */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cadSketch}
              isBlog={false}
              title="OnShape CAD Projects"
              tags={["CAD", "OnShape", "Mechanical Design", "3D Modeling"]}
              description="A collection of 3-D mechanical design projects modeled in OnShape, including multi-view orthographic drawings, part sketches, and assembly-level work. Featured designs include a flanged 90° elbow fitting with full dimensioned section views, and various exercise sketches demonstrating geometric constraints and parametric modeling."
              galleryImages={[cadSketch]}
              videoLink="https://youtu.be/REo8Yp04Cvc?si=YEIbVRU38q1c9XSn"
              pdfLink={flangedElbowPdf}
              pdfLabel="Flanged Elbow Drawing"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
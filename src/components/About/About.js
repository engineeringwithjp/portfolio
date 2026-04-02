import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

// ── Gallery Imports ───────────────────────────────────────────────────────────────
import Ares from "../../Assets/Gallery/ares.JPG";
import Engine from "../../Assets/Gallery/engine.JPG";
import Grad from "../../Assets/Gallery/grad.JPG";
import IronmMan from "../../Assets/Gallery/ironman.JPG";
import Profile from "../../Assets/Gallery/profile.JPEG";
import Rainer from "../../Assets/Gallery/rainer.JPG";
import Think from "../../Assets/Gallery/think.JPEG";
import Tri from "../../Assets/Gallery/tri.JPG";
import Jarvis from "../../Assets/Gallery/jarvis_birthday.JPG";

const galleryImages = [
  { src: Jarvis,   label: "My Cane Corso, Ares, and Labrador, Jarvis"   },
  { src: IronmMan, label: "Completing Ironman Mont Tremblant 70.3"  },
  { src: Profile,  label: "Profile"   },
  { src: Rainer,   label: ""    },
  { src: Think,    label: ""     },
  { src: Ares,     label: "Cool dog Ares"      },
  { src: Engine,   label: "Boeing 777"    },
  { src: Tri,      label: "Race to the finish line!"       },
];

function ImageGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);

  const navigate = useCallback((dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "next"
          ? (prev + 1) % galleryImages.length
          : (prev - 1 + galleryImages.length) % galleryImages.length
      );
      setAnimating(false);
    }, 300);
  }, [animating]);

  const { src, label } = galleryImages[current];

  return (
    <div style={styles.wrapper}>
      {/* Dot indicators */}
      <div style={styles.dots}>
        {galleryImages.map((_, i) => (
          <span
            key={i}
            onClick={() => { if (!animating) { setDirection(i > current ? "next" : "prev"); setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 300); } }}
            style={{
              ...styles.dot,
              ...(i === current ? styles.dotActive : {}),
            }}
          />
        ))}
      </div>

      {/* Image frame */}
      <div style={styles.frame}>
        <img
          src={src}
          alt={label}
          style={{
            ...styles.image,
            opacity: animating ? 0 : 1,
            transform: animating
              ? `translateX(${direction === "next" ? "-30px" : "30px"})`
              : "translateX(0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        />

        {/* Prev button */}
        <button
          onClick={() => navigate("prev")}
          style={{ ...styles.btn, left: "-18px" }}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Next button */}
        <button
          onClick={() => navigate("next")}
          style={{ ...styles.btn, right: "-18px" }}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Label + counter */}
      <div style={styles.footer}>
        <span style={styles.label}>{label}</span>
        <span style={styles.counter}>
          {current + 1} / {galleryImages.length}
        </span>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    paddingTop: "30px",
  },
  dots: {
    display: "flex",
    gap: "7px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.25)",
    cursor: "pointer",
    transition: "background 0.25s, transform 0.25s",
  },
  dotActive: {
    background: "#c770f0",
    transform: "scale(1.35)",
  },
  frame: {
    position: "relative",
    width: "100%",
    maxWidth: "380px",
    borderRadius: "16px",
    overflow: "visible",
    boxShadow: "0 8px 40px rgba(199,112,240,0.25)",
  },
  image: {
    width: "100%",
    borderRadius: "16px",
    objectFit: "cover",
    aspectRatio: "4 / 3",
    display: "block",
    border: "2px solid rgba(199,112,240,0.35)",
  },
  btn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(20,20,30,0.85)",
    border: "1.5px solid rgba(199,112,240,0.5)",
    color: "#c770f0",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    fontSize: "22px",
    lineHeight: "1",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    backdropFilter: "blur(6px)",
    transition: "background 0.2s, transform 0.2s",
    padding: 0,
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "380px",
    paddingInline: "4px",
  },
  label: {
    color: "#c770f0",
    fontWeight: 600,
    fontSize: "0.9rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  counter: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.85rem",
  },
};

function About() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                ABOUT <strong className="purple">ME</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <ImageGallery />
            </Col>
          </Row>

          <h1 className="project-heading">
            Tools <strong className="purple">I use </strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">My</strong> Services
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsFilePdfFill, BsYoutube, BsImages, BsFileEarmarkText, BsChevronDown, BsChevronUp } from "react-icons/bs";

function ProjectCards(props) {
  const [showGallery, setShowGallery] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  // Gallery images: combine main image + any extras
  const galleryImages = props.galleryImages
    ? [props.imgPath, ...props.galleryImages].filter(Boolean)
    : null;

  return (
    <Card className="project-card-view" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Main Image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={galleryImages ? galleryImages[activeImg] : props.imgPath}
          alt="card-img"
          style={{ height: "200px", objectFit: "cover", transition: "opacity 0.3s ease" }}
        />
        {/* Tags */}
        {props.tags && props.tags.length > 0 && (
          <div style={{ position: "absolute", top: "8px", left: "8px", display: "flex", flexWrap: "wrap", gap: "4px" }}>
            {props.tags.map((tag, i) => (
              <Badge
                key={i}
                bg="dark"
                style={{
                  fontSize: "0.65rem",
                  opacity: 0.88,
                  letterSpacing: "0.03em",
                  backdropFilter: "blur(4px)",
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Gallery thumbnails */}
      {galleryImages && galleryImages.length > 1 && (
        <div style={{ display: "flex", gap: "4px", padding: "6px 8px", background: "#1a1a2e", overflowX: "auto" }}>
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              onClick={() => setActiveImg(i)}
              style={{
                width: "48px",
                height: "36px",
                objectFit: "cover",
                borderRadius: "4px",
                cursor: "pointer",
                border: activeImg === i ? "2px solid #c770f0" : "2px solid transparent",
                opacity: activeImg === i ? 1 : 0.6,
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      )}

      <Card.Body style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify", fontSize: "0.88rem", flex: 1 }}>
          {props.description}
        </Card.Text>

        {/* Collapsible extra content (e.g. memo text) */}
        {props.extraDetail && (
          <div style={{ marginBottom: "10px" }}>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setShowGallery(!showGallery)}
              style={{ fontSize: "0.75rem", marginBottom: "6px" }}
            >
              {showGallery ? <BsChevronUp /> : <BsChevronDown />}&nbsp;
              {showGallery ? "Hide Details" : "Show Details"}
            </Button>
            {showGallery && (
              <p style={{ fontSize: "0.8rem", color: "#c3c3c3", textAlign: "justify", marginTop: "6px" }}>
                {props.extraDetail}
              </p>
            )}
          </div>
        )}

        {/* Button row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
          {/* GitHub / Blog button */}
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" size="sm">
              <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {/* Live Demo button */}
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" size="sm">
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}

          {/* YouTube button */}
          {props.videoLink && (
            <Button
              variant="danger"
              href={props.videoLink}
              target="_blank"
              size="sm"
            >
              <BsYoutube /> &nbsp;Watch
            </Button>
          )}

          {/* Primary PDF button */}
          {props.pdfLink && (
            <Button
              variant="warning"
              href={props.pdfLink}
              target="_blank"
              size="sm"
              style={{ color: "#1a1a2e", fontWeight: 600 }}
            >
              <BsFilePdfFill /> &nbsp;{props.pdfLabel || "View PDF"}
            </Button>
          )}

          {/* Secondary PDF button */}
          {props.pdfLink2 && (
            <Button
              variant="outline-warning"
              href={props.pdfLink2}
              target="_blank"
              size="sm"
            >
              <BsFileEarmarkText /> &nbsp;{props.pdfLabel2 || "Report"}
            </Button>
          )}

          {/* Extra arbitrary buttons */}
          {props.extraLinks &&
            props.extraLinks.map((link, i) => (
              <Button
                key={i}
                variant={link.variant || "outline-light"}
                href={link.url}
                target="_blank"
                size="sm"
              >
                {link.icon && <>{link.icon}&nbsp;</>}
                {link.label}
              </Button>
            ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const navStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap');

  .navbar, .sticky {
    transition: all 0.35s ease;
  }

  .sticky {
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    background: rgba(13, 13, 20, 0.82) !important;
    box-shadow: 0 2px 32px rgba(0,0,0,0.35);
  }

  .logo {
    height: 72px !important;
    width: auto !important;
    object-fit: contain;
    filter: drop-shadow(0 0 10px rgba(198, 128, 227, 0.25));
    transition: filter 0.25s ease, transform 0.25s ease;
  }

  .logo:hover {
    filter: drop-shadow(0 0 18px rgba(198, 128, 227, 0.55));
    transform: scale(1.04);
  }

  .nav-link-item {
    font-family: 'DM Mono', monospace !important;
    font-size: 0.82rem !important;
    font-weight: 500 !important;
    letter-spacing: 0.06em !important;
    color: rgba(255,255,255,0.72) !important;
    padding: 6px 14px !important;
    border-radius: 4px;
    transition: color 0.2s ease, background 0.2s ease !important;
    display: flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
  }

  .nav-link-item:hover,
  .nav-link-item.active {
    color: #fff !important;
    background: rgba(198, 128, 227, 0.1) !important;
  }

  .fork-btn-inner {
    display: flex !important;
    align-items: center !important;
    gap: 5px !important;
    padding: 6px 14px !important;
    border-radius: 4px !important;
    border: 1px solid rgba(198, 128, 227, 0.4) !important;
    background: transparent !important;
    color: rgba(198, 128, 227, 0.85) !important;
    font-size: 1rem !important;
    transition: all 0.2s ease !important;
  }

  .fork-btn-inner:hover {
    background: rgba(198, 128, 227, 0.15) !important;
    border-color: rgba(198, 128, 227, 0.8) !important;
    color: #fff !important;
    transform: translateY(-1px);
  }

  .navbar-toggler {
    border: 1px solid rgba(198, 128, 227, 0.35) !important;
    padding: 6px 10px !important;
    border-radius: 4px !important;
  }

  .navbar-toggler span {
    display: block;
    width: 22px;
    height: 2px;
    background: rgba(198, 128, 227, 0.85);
    margin: 4px 0;
    border-radius: 2px;
    transition: all 0.25s ease;
  }
`;

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <style>{navStyles}</style>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  className="nav-link-item"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineHome /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className="nav-link-item"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  className="nav-link-item"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen /> Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  className="nav-link-item"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="https://www.linkedin.com/in/pinedajohnchristopher/" //Put your blog URL here
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link-item"
                >
                  <ImBlog /> Blogs
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className="nav-link-item"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineMail /> Contact
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn ms-2">
                <Button
                  href="https://github.com/engineeringwithjp/portfolio"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
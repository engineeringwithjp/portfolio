import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai";
import { FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import Particle from "../Particle";

/* ─────────────────────────────────────────────
   Scoped styles — injected once via <style>
───────────────────────────────────────────── */
const contactStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Syne:wght@700;800&display=swap');

  /* ── Section wrapper ── */
  .contact-section {
    position: relative;
    padding-top: 130px;
    padding-bottom: 70px;
    overflow: hidden;
    background: transparent;
  }

  /* ── Ambient blobs ── */
  .contact-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.15;
    pointer-events: none;
    z-index: 0;
  }
  .contact-blob-1 { width: 480px; height: 480px; background: #c770f0; top: -120px; right: -100px; }
  .contact-blob-2 { width: 360px; height: 360px; background: #7c3aed; bottom: -80px; left: -80px; }

  /* ── Inner container ── */
  .contact-container {
    position: relative;
    z-index: 1;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* ── Header ── */
  .contact-header {
    text-align: center;
    margin-bottom: 48px;
  }
  .contact-label {
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #c770f0;
    margin-bottom: 12px;
  }
  .contact-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 2.8rem);
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 14px;
    line-height: 1.1;
  }
  .contact-title .purple { color: #c770f0; }
  .contact-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: #94a3b8;
    max-width: 420px;
    margin: 0 auto;
    line-height: 1.7;
  }

  /* ── Two-column body ── */
  .contact-body {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 20px;
    align-items: start;
  }
  @media (max-width: 720px) {
    .contact-body { grid-template-columns: 1fr; }
  }

  /* ── Info card ── */
  .contact-info-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(199, 112, 240, 0.2);
    border-radius: 18px;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    animation: fadeUp 0.55s ease both;
  }

  .info-heading {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin: 0;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .info-icon-box {
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background: rgba(199, 112, 240, 0.12);
    border: 1px solid rgba(199, 112, 240, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
    color: #c770f0;
  }

  .info-label {
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #475569;
    margin: 0 0 4px;
  }
  .info-value {
    font-size: 12.5px;
    color: #c770f0;
    margin: 0;
    word-break: break-all;
    font-family: 'DM Sans', sans-serif;
  }
  .info-value-plain {
    font-size: 13px;
    color: #e2e8f0;
    margin: 0;
    font-family: 'DM Sans', sans-serif;
  }

  .contact-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.07);
  }

  .contact-socials {
    display: flex;
    gap: 10px;
  }
  .contact-social-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e2e8f0;
    font-size: 17px;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s, transform 0.2s, color 0.2s;
  }
  .contact-social-icon:hover {
    background: rgba(199, 112, 240, 0.18);
    border-color: rgba(199, 112, 240, 0.5);
    color: #c770f0;
    transform: translateY(-2px);
  }

  /* ── Form card ── */
  .contact-form-card {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(199, 112, 240, 0.2);
    border-radius: 18px;
    padding: 28px 26px;
    animation: fadeUp 0.55s 0.1s ease both;
  }

  /* ── Form fields ── */
  .form-group-custom {
    margin-bottom: 18px;
  }
  .form-label-custom {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 8px;
    font-family: 'DM Sans', sans-serif;
  }
  .field-icon {
    font-size: 14px;
    color: #c770f0;
  }

  .form-input-custom {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: #e2e8f0;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    padding: 11px 14px;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    box-sizing: border-box;
  }
  .form-input-custom::placeholder { color: #475569; }
  .form-input-custom:focus {
    border-color: rgba(199, 112, 240, 0.6);
    background: rgba(199, 112, 240, 0.06);
  }
  .form-textarea-custom {
    resize: vertical;
    min-height: 120px;
  }

  /* ── Status banners ── */
  .form-status {
    border-radius: 10px;
    padding: 11px 16px;
    font-size: 13px;
    margin-bottom: 16px;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.5;
  }
  .form-status.success-msg {
    background: rgba(34, 197, 94, 0.08);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #86efac;
  }
  .form-status.error-msg {
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #fca5a5;
  }

  /* ── Submit button ── */
  .submit-btn {
    width: 100%;
    padding: 13px 20px;
    border-radius: 11px;
    background: linear-gradient(135deg, #a855f7 0%, #7c3aed 100%);
    border: none;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.03em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    transition: opacity 0.2s, transform 0.18s;
    margin-top: 4px;
  }
  .submit-btn:hover:not(:disabled) {
    opacity: 0.88;
    transform: translateY(-1px);
  }
  .submit-btn:active:not(:disabled) { transform: scale(0.99); }
  .submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

  /* ── Spinner ── */
  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    display: inline-block;
    animation: spin 0.7s linear infinite;
    flex-shrink: 0;
  }

  /* ── Animations ── */
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
`;

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ sending: false, success: false, error: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: false, error: false });

    emailjs
      .sendForm(
        "service_9gv3a62",
        "template_d4rcd9h",
        form.current,
        "odkUA-5NqVWobo4Gs"
      )
      .then(
        () => {
          setStatus({ sending: false, success: true, error: false });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus({ sending: false, success: false, error: true });
        }
      );
  };

  return (
    <>
      <style>{contactStyles}</style>

      <section className="contact-section" id="contact">
        <Particle />

        {/* Ambient blobs */}
        <div className="contact-blob contact-blob-1" />
        <div className="contact-blob contact-blob-2" />

        <Container className="contact-container">

          {/* ── Header ── */}
          <div className="contact-header">
            <span className="contact-label">— Say Hello —</span>
            <h1 className="contact-title">
              Get In <span className="purple">Touch</span>
            </h1>
            <p className="contact-subtitle">
              Have a project in mind, want to collaborate, or just want to say hi?
              My inbox is always open.
            </p>
          </div>

          {/* ── Body grid ── */}
          <div className="contact-body">

            {/* Left — Info card */}
            <div className="contact-info-card">
              <h3 className="info-heading">Contact Info</h3>

              <div className="info-item">
                <span className="info-icon-box"><AiOutlineMail /></span>
                <div>
                  <p className="info-label">Email</p>
                  <a href="mailto:pinedajohnchristopher@gmail.com" className="info-value">
                    pinedajohnchristopher@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon-box"><AiOutlineUser /></span>
                <div>
                  <p className="info-label">Name</p>
                  <p className="info-value-plain">John Christopher Pineda</p>
                </div>
              </div>

              <div className="contact-divider" />

              <div>
                <p className="info-heading" style={{ marginBottom: "12px" }}>Find Me On</p>
                <div className="contact-socials">
                  <a
                    href="https://github.com/engineeringwithjp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pinedajohnchristopher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/jpjohnpineda?igsh=anNwaHV2MzQxNDN5&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-icon"
                    aria-label="Instagram"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form card */}
            <div className="contact-form-card">
              <form ref={form} onSubmit={handleSubmit} noValidate>

                {/* Name */}
                <div className="form-group-custom">
                  <label className="form-label-custom">
                    <AiOutlineUser className="field-icon" /> Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="form-input-custom"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group-custom">
                  <label className="form-label-custom">
                    <AiOutlineMail className="field-icon" /> Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="form-input-custom"
                    required
                  />
                </div>

                {/* Message */}
                <div className="form-group-custom">
                  <label className="form-label-custom">
                    <AiOutlineMessage className="field-icon" /> Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="form-input-custom form-textarea-custom"
                    rows={5}
                    required
                  />
                </div>

                {/* Status */}
                {status.success && (
                  <div className="form-status success-msg">
                    ✅ Message sent! I'll get back to you soon.
                  </div>
                )}
                {status.error && (
                  <div className="form-status error-msg">
                    ❌ Something went wrong. Please try again or email me directly.
                  </div>
                )}

                {/* Submit */}
                <button type="submit" className="submit-btn" disabled={status.sending}>
                  {status.sending ? (
                    <><span className="spinner" /> Sending…</>
                  ) : (
                    <><FaPaperPlane /> Send Message</>
                  )}
                </button>

              </form>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;
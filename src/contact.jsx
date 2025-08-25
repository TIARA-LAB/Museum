import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";


export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_wdz7y9i";
    const TEMPLATE_ID = "template_e6nxzfh";
    const PUBLIC_KEY = "yUuwXY-UNb7_cA338";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        () => {
          setStatus("✅ Your message has been sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-wrapper">
      
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      
      <div className="hands-bg">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,80 Q40,40 60,80 T100,80" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
          <path d="M100,80 Q120,40 140,80 T180,80" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="contact-card">
        
        <div className="contact-info">
          <h2>👋 Get in Touch</h2>
          <p>
            We will love to hear from you!  
            Whether you have questions, feedback, or just want to say hi.  
          </p>
          <div className="info-item">📧 mustafafatimah61@gmail.com</div>
          <div className="info-item">📞 +2348129316522</div>
          <div className="info-item">📍 Lagos, Nigeria</div>
     
        <div className="whatsapp-link">
  <a
    href="https://wa.me/+2348129316522" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaWhatsapp className="whatsapp-icon" />
    Chat with us
  </a>
</div>
</div>


        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn-send">
              ✨ Send Message
            </button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </div>
  );
}

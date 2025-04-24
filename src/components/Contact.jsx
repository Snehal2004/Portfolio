import React from "react";
import "./Contact.css";
import Lottie from "lottie-react";
import contactAnimation from "../assets/lottie/tech1.json";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Side - Animation */}
        <div className="contact-animation">
          <Lottie animationData={contactAnimation} loop={true} />
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
  <h2>Contact Me</h2>

  <div className="contact-icons">
  <a href="https://www.linkedin.com/in/snehal-bahalkar/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={40} />
  </a>
  <a href="mailto:snehalbahalkar2004@gmail.com"
  style={{ color: "#D44638" }} > 
  
    <FaEnvelope size={40} />
  </a>
</div>



  <form action="https://formspree.io/f/yourformid" method="POST">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</div>
      </div>
    </section>
  );
};

export default Contact;

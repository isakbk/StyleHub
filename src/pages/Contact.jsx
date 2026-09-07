// src/pages/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="section contact-page">
      <div className="container">
        <div className="page-header">
          <div><span className="eyebrow">GET IN TOUCH</span><h1>We’d love to hear from you.</h1><p>Have a question? Our team is here to help.</p></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div><span>◉</span><h3>Visit Us</h3><p>123 Fashion Avenue<br />New Delhi, India</p></div>
            <div><span>◌</span><h3>Call Us</h3><p>+91 98765 43210<br />Mon–Sat, 10 AM – 7 PM</p></div>
            <div><span>✉</span><h3>Email Us</h3><p>support@stylehub.com</p></div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a message</h2>
            {sent && <div className="success-message">Thank you! Your message has been sent.</div>}
            <input required type="text" placeholder="Your Name" />
            <input required type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea required placeholder="Your Message" rows="6"></textarea>
            <button className="btn btn-primary" type="submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
// src/pages/About.jsx
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="section about-page">
      <div className="container">
        <div className="about-hero">
          <span className="eyebrow">OUR STORY</span>
          <h1>Fashion with a<br /><span>purpose.</span></h1>
          <p>We believe great style should be accessible, expressive, and made to last.</p>
        </div>

        <div className="about-content">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>More than a fashion store.</h2>
          </div>
          <div>
            <p>StyleHub was created to bring together timeless design and modern trends in one thoughtful collection.</p>
            <p>From everyday essentials to statement pieces, we curate fashion that helps you express who you are.</p>
            <Link to="/products" className="btn btn-primary">Explore Our Collection →</Link>
          </div>
        </div>

        <div className="values-grid">
          <div><span>01</span><h3>Thoughtful Design</h3><p>Every piece is selected for style, comfort, and versatility.</p></div>
          <div><span>02</span><h3>Quality First</h3><p>We believe in creating wardrobes that stand the test of time.</p></div>
          <div><span>03</span><h3>Conscious Choices</h3><p>We support responsible fashion and mindful consumption.</p></div>
        </div>
      </div>
    </section>
  );
}
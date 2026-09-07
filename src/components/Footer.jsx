// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>✦ StyleHub</h3>
          <p>
            Discover your style. Express your confidence. Fashion made for
            every moment.
          </p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link to="/products?category=men">Men</Link>
          <Link to="/products?category=women">Women</Link>
          <Link to="/products?category=kids">Kids</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/account">My Account</Link>
        </div>
        <div>
          <h4>Customer Care</h4>
          <p>Mon–Sat: 10 AM – 7 PM</p>
          <p>support@stylehub.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 StyleHub. All rights reserved.
      </div>
    </footer>
  );
}
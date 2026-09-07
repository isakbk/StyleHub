// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="eyebrow">NEW SEASON · 2026</span>
            <h1>Style that<br /><span>speaks</span> for you.</h1>
            <p>Curated fashion for every version of you.</p>
            <Link to="/products" className="btn btn-primary">Shop Collection →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE</span>
              <h2>Shop by Category</h2>
            </div>
            <Link to="/products" className="text-link">View All →</Link>
          </div>

          <div className="category-grid">
            <Link to="/products?category=women" className="category-card women">
              <div><span>01</span><h3>Women</h3><p>Discover your elegance →</p></div>
            </Link>
            <Link to="/products?category=men" className="category-card men">
              <div><span>02</span><h3>Men</h3><p>Define your everyday →</p></div>
            </Link>
            <Link to="/products?category=kids" className="category-card kids">
              <div><span>03</span><h3>Kids</h3><p>Little styles, big smiles →</p></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CURATED FOR YOU</span>
              <h2>Featured Collections</h2>
            </div>
            <Link to="/products" className="text-link">Shop All →</Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="offer-banner">
        <div className="container offer-content">
          <div>
            <span className="eyebrow">LIMITED TIME</span>
            <h2>Elevate your everyday.</h2>
            <p>Enjoy 20% off on your first order.</p>
          </div>
          <Link to="/products" className="btn btn-outline">Shop Now →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container benefits">
          <div><span>◈</span><h3>Free Shipping</h3><p>On orders over $100</p></div>
          <div><span>↺</span><h3>Easy Returns</h3><p>30-day return policy</p></div>
          <div><span>✦</span><h3>Premium Quality</h3><p>Made to last</p></div>
          <div><span>♡</span><h3>Customer Care</h3><p>We’re here for you</p></div>
        </div>
      </section>
    </>
  );
}
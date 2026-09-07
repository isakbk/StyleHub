// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { cartCount, wishlist, user } = useShop();

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">
          <span>✦</span> StyleHub
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products?category=men">Men</NavLink>
          <NavLink to="/products?category=women">Women</NavLink>
          <NavLink to="/products?category=kids">Kids</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/account" className="nav-icon">
            ♡ <span className="badge">{wishlist.length}</span>
          </Link>
          <Link to="/cart" className="nav-icon">
            🛍 <span className="badge">{cartCount}</span>
          </Link>
          <Link to={user ? "/account" : "/login"} className="nav-icon">
            ♙
          </Link>
        </div>
      </div>
    </header>
  );
}
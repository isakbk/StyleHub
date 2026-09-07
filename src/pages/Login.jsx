// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Login() {
  const { login } = useShop();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    login(email);
    navigate("/account");
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Sign in to StyleHub</h1>
        <p>Access your account and discover your style.</p>

        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input required type="password" placeholder="Password" />
          <button className="btn btn-primary" type="submit">Sign In →</button>
        </form>

        <p className="auth-footer">Don't have an account? <Link to="/register">Create one</Link></p>
      </div>
    </section>
  );
}
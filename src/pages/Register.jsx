// src/pages/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Register() {
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
        <span className="eyebrow">JOIN THE HUB</span>
        <h1>Create your account</h1>
        <p>Start your StyleHub journey today.</p>

        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Full Name" />
          <input required type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input required type="password" placeholder="Password" />
          <button className="btn btn-primary" type="submit">Create Account →</button>
        </form>

        <p className="auth-footer">Already have an account? <Link to="/login">Sign in</Link></p>
      </div>
    </section>
  );
}
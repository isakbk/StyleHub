// src/pages/Checkout.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import OrderSummary from "../components/OrderSummary";

export default function Checkout() {
  const { cart, cartTotal } = useShop();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="section">
        <div className="container empty-state">
          <div className="success-icon">✓</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for shopping with StyleHub.</p>
          <p>Your order total is ${cartTotal.toFixed(2)}.</p>
          <Link to="/products" className="btn btn-primary">Continue Shopping →</Link>
        </div>
      </section>
    );
  }

  if (!cart.length) {
    return <div className="empty-state"><h2>Your cart is empty</h2><Link to="/products" className="btn btn-primary">Shop Now</Link></div>;
  }

  return (
    <section className="section checkout-page">
      <div className="container">
        <div className="page-header">
          <div><span className="eyebrow">SECURE CHECKOUT</span><h1>Complete Your Order</h1></div>
        </div>

        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Contact Information</h2>
              <div className="form-grid">
                <input required type="text" placeholder="Full Name" />
                <input required type="email" placeholder="Email Address" />
                <input required type="tel" placeholder="Phone Number" />
              </div>
            </div>

            <div className="form-section">
              <h2>Shipping Address</h2>
              <div className="form-grid">
                <input required type="text" placeholder="Address" />
                <input required type="text" placeholder="City" />
                <input required type="text" placeholder="State" />
                <input required type="text" placeholder="Postal Code" />
              </div>
            </div>

            <div className="form-section">
              <h2>Payment Method</h2>
              <label className="payment-option"><input type="radio" name="payment" defaultChecked /> Credit / Debit Card</label>
              <label className="payment-option"><input type="radio" name="payment" /> UPI</label>
              <label className="payment-option"><input type="radio" name="payment" /> Cash on Delivery</label>
            </div>

            <button className="btn btn-primary" type="submit">Place Order →</button>
          </form>

          <OrderSummary />
        </div>
      </div>
    </section>
  );
}
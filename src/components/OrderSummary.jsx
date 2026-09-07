// src/components/OrderSummary.jsx
import { useShop } from "../context/ShopContext";

export default function OrderSummary() {
  const { cart, cartTotal } = useShop();

  return (
    <div className="summary-card">
      <h2>Order Summary</h2>

      <div className="summary-lines">
        <div>
          <span>Subtotal</span>
          <strong>${cartTotal.toFixed(2)}</strong>
        </div>
        <div>
          <span>Shipping</span>
          <strong>{cartTotal >= 100 ? "Free" : "$5.00"}</strong>
        </div>
        <div>
          <span>Discount</span>
          <strong>$0.00</strong>
        </div>
      </div>

      <div className="summary-total">
        <span>Total</span>
        <strong>${(cartTotal + (cartTotal >= 100 ? 0 : 5)).toFixed(2)}</strong>
      </div>

      <p className="summary-note">
        {cart.length} item{cart.length !== 1 ? "s" : ""} in your order
      </p>
    </div>
  );
}
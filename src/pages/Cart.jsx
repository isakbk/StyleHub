// src/pages/Cart.jsx
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import OrderSummary from "../components/OrderSummary";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useShop();

  return (
    <section className="section cart-page">
      <div className="container">
        <div className="page-header">
          <div><span className="eyebrow">YOUR SELECTION</span><h1>Shopping Cart</h1></div>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🛍</div>
            <h2>Your cart is empty</h2>
            <p>Discover something beautiful for your wardrobe.</p>
            <Link to="/products" className="btn btn-primary">Continue Shopping →</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={`${item.id}-${item.size}-${item.color}`}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <span className="product-category">{item.subcategory}</span>
                    <h3>{item.name}</h3>
                    <p>Size: {item.size} · Color: {item.color}</p>
                    <strong>${item.price.toFixed(2)}</strong>
                    <div className="cart-actions">
                      <div className="quantity-control">
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id, item.size, item.color)}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <OrderSummary />
              <Link to="/checkout" className="btn btn-primary checkout-btn">Proceed to Checkout →</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
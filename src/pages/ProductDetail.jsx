// src/pages/ProductDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useShop } from "../context/ShopContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const product = products.find((p) => p.id === Number(id));

  const [size, setSize] = useState(product?.sizes[0] || "");
  const [color, setColor] = useState(product?.colors[0] || "");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="empty-state"><h2>Product not found</h2></div>;
  }

  function handleAdd() {
    for (let i = 0; i < quantity; i++) addToCart(product, size, color);
    navigate("/cart");
  }

  return (
    <section className="section detail-page">
      <div className="container">
        <div className="breadcrumbs"><Link to="/">Home</Link> / <Link to="/products">Shop</Link> / {product.name}</div>

        <div className="detail-grid">
          <div className="detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="detail-info">
            <span className="eyebrow">{product.subcategory}</span>
            <h1>{product.name}</h1>
            <div className="product-rating">★★★★★ <span>{product.rating} ({product.reviews} reviews)</span></div>
            <div className="detail-price">${product.price.toFixed(2)}</div>
            <p className="detail-description">{product.description}</p>

            <div className="option-group">
              <label>Size <span>Size Guide</span></label>
              <div className="options">
                {product.sizes.map((item) => (
                  <button key={item} className={size === item ? "selected" : ""} onClick={() => setSize(item)}>{item}</button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Color <span>{color}</span></label>
              <div className="color-options">
                {product.colors.map((item) => (
                  <button key={item} className={`color-dot ${item.toLowerCase()} ${color === item ? "selected" : ""}`} onClick={() => setColor(item)} title={item} />
                ))}
              </div>
            </div>

            <div className="quantity-row">
              <label>Quantity</label>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn btn-primary" onClick={handleAdd}>Add to Cart →</button>
              <button className="btn btn-wishlist" onClick={() => toggleWishlist(product)}>
                {wishlist.some((item) => item.id === product.id) ? "♥ Saved" : "♡ Wishlist"}
              </button>
            </div>

            <div className="detail-features">
              <div>✓ Free shipping on orders over $100</div>
              <div>✓ Easy 30-day returns</div>
              <div>✓ Secure checkout</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
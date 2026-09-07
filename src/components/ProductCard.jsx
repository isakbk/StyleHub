// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useShop();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.subcategory}</span>
        <h3>{product.name}</h3>
        <div className="product-rating">★★★★★ <span>({product.reviews})</span></div>
        <div className="product-bottom">
          <strong>${product.price.toFixed(2)}</strong>
          <Link to={`/product/${product.id}`} className="view-btn">
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
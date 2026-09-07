// src/pages/Account.jsx
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Account() {
  const { user, logout, wishlist } = useShop();

  if (!user) {
    return (
      <section className="section">
        <div className="container empty-state">
          <div className="empty-icon">♙</div>
          <h2>Welcome to StyleHub</h2>
          <p>Sign in to manage your account and wishlist.</p>
          <Link to="/login" className="btn btn-primary">Sign In →</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section account-page">
      <div className="container">
        <div className="page-header">
          <div><span className="eyebrow">MY STYLEHUB</span><h1>My Account</h1></div>
          <button className="btn btn-outline" onClick={logout}>Sign Out</button>
        </div>

        <div className="account-layout">
          <aside className="account-sidebar">
            <div className="account-avatar">{user.name[0].toUpperCase()}</div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <nav>
              <a href="#profile">Profile</a>
              <a href="#orders">Order History</a>
              <a href="#wishlist">Wishlist ({wishlist.length})</a>
              <a href="#addresses">Saved Addresses</a>
            </nav>
          </aside>

          <div className="account-content">
            <div className="account-card" id="profile">
              <h2>Profile Information</h2>
              <div className="profile-grid">
                <div><span>Full Name</span><strong>{user.name}</strong></div>
                <div><span>Email Address</span><strong>{user.email}</strong></div>
              </div>
            </div>

            <div className="account-card" id="orders">
              <h2>Order History</h2>
              <div className="empty-mini"><p>No orders yet.</p><Link to="/products">Start Shopping →</Link></div>
            </div>

            <div className="account-card" id="wishlist">
              <h2>Wishlist</h2>
              <div className="empty-mini"><p>{wishlist.length} saved item{wishlist.length !== 1 ? "s" : ""}.</p><Link to="/products">Explore More →</Link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
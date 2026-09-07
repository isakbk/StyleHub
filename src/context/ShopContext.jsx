// src/context/ShopContext.jsx
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  function addToCart(product, size, color) {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, size, color, quantity: 1 }];
    });
  }

  function updateQuantity(id, size, color, quantity) {
    if (quantity < 1) {
      removeFromCart(id, size, color);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    );
  }

  function removeFromCart(id, size, color) {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      )
    );
  }

  function toggleWishlist(product) {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  }

  function login(email) {
    setUser({ email, name: email.split("@")[0] });
  }

  function logout() {
    setUser(null);
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        user,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        toggleWishlist,
        login,
        logout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {

        return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity } : item
        );
      } else {

        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const getProductQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + (item.quantity || 0), 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getProductQuantity, getTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

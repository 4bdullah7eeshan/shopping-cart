import Header from "./components/Header/Header";
import HomeMain from "./components/HomeMain/HomeMain";
import Footer from "./components/Footer/Footer";
import ProductsMain from "./components/ProductsMain/ProductsMain";
import CartMain from "./components/CartMain/CartMain";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/products" element={<ProductsMain addToCart={addToCart} />} />
        <Route path="/cart" element={<CartMain cart={cart} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

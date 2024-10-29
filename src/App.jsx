import { useState } from "react";
import Header from "./components/Header/Header";
import HomeMain from "./components/HomeMain/HomeMain";
import Footer from "./components/Footer/Footer";
import ProductsMain from "./components/ProductsMain/ProductsMain";
import CartMain from "./components/CartMain/CartMain";
import { Routes, Route } from "react-router-dom";

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

  return (
    <>
      <Header cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
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

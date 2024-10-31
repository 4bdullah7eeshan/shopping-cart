// ProductsMain.jsx
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsMain.module.css";

function ProductsMain() {
  const { products, categories, error, loading, addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <main>
      <header>
        <h1>Products</h1>
      </header>
      <div className={styles.view}>
        <aside>
          <h3>Categories</h3>
          <ul>
            <li onClick={() => setSelectedCategory("all")}>All</li>
            {categories.map((category, index) => (
              <li key={index} onClick={() => setSelectedCategory(category)}>
                {category}
              </li>
            ))}
          </ul>
        </aside>
        <section className={styles.products}>
          {filteredProducts && filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default ProductsMain;

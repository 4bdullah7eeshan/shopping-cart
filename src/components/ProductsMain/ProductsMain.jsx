// ProductsMain.jsx
import { useCart } from "../../context/CartContext";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsMain.module.css";

function ProductsMain() {
  const { products, error, loading, addToCart } = useCart();

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
        </aside>
        <section className={styles.products}>
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </section>
      </div>
    </main>
  );
}

export default ProductsMain;

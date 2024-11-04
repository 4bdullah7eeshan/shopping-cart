import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ProductCard from "../ProductCard/ProductCard";
import styles from "./TopProducts.module.css";

function TopProducts () {
    const { products, addToCart } = useCart();

    const topProducts = products ? products.filter((product) => product.rating.rate >= 4.5) : [];
    return (
        <section className={styles.topProducts}>
            <header className={styles.header}>
                <h2>Top Products</h2>
            </header>
            <div className={styles.grid}>
                {topProducts.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
            <div>
                <Link to="/products" className={styles.btn}>VIEW ALL PRODUCTS</Link>
            </div>
        </section>
    )
}

export default TopProducts;
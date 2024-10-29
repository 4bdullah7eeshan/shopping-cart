import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
    const { cart, updateCartItem } = useCart();
    const [quantity, setQuantity] = useState(cart[product.id] || 0);

    useEffect(() => {
        // Sync local quantity with cart context on load
        setQuantity(cart[product.id] || 0);
    }, [cart, product.id]);

    const handleIncrement = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateCartItem(product.id, newQuantity);
    };

    const handleDecrement = () => {
        const newQuantity = Math.max(quantity - 1, 0);
        setQuantity(newQuantity);
        updateCartItem(product.id, newQuantity);
    };

    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div>
                <button onClick={handleDecrement}>-</button>
                <input type="number" value={quantity} min={0} readOnly />
                <button onClick={handleIncrement}>+</button>
            </div>
            {quantity > 0 && (
                <AddToCartButton product={product} quantity={quantity} />
            )}
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
};

export default ProductCard;

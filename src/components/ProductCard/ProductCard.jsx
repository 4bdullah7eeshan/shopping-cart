import PropTypes from "prop-types";
import { useState } from "react";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
    const handleDecrement = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));

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
                <AddToCartButton product={product} quantity={quantity} addToCart={addToCart} />
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
    addToCart: PropTypes.func.isRequired,
};

export default ProductCard;

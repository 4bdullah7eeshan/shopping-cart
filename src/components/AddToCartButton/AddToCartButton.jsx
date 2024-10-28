import { useCart } from "react";
import PropTypes from "prop-types";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ product, quantity }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    return (
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
            Add to Cart
        </button>
    );
};

AddToCartButton.propTypes = {
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default AddToCartButton;

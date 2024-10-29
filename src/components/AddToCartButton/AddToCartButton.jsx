import PropTypes from "prop-types";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = () => {

    const handleAddToCart = () => {
        
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

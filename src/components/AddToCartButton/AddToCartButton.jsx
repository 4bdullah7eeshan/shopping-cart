import PropTypes from "prop-types";
import styles from "./AddToCartButton.module.css";

const AddToCartButton = ({ product, quantity, addToCart }) => {
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
  addToCart: PropTypes.func.isRequired,
};

export default AddToCartButton;

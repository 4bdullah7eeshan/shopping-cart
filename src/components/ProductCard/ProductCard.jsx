import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div>
        <button>-</button>
        <input type="number" defaultValue={1} min={1} /> {/* improve this */}
        <button>+</button>
      </div>
      <button>Add to Cart</button> {/* create a diff component */}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductCard;


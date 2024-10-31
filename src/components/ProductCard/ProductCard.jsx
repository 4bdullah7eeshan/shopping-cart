import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {

  return (
    <Link to={`/products/${product.id}`}>
      <div className={styles.productCard}>
        <img src={product.image} alt={product.title} className={styles.productImage} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
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

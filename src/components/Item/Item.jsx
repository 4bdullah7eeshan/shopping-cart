// Item.jsx
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import styles from "./Item.module.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const Item = () => {
  const { productId } = useParams();
  const { products, addToCart, getProductQuantity } = useCart();
  const product = products ? products.find((item) => item.id === parseInt(productId)) : null;

  const [quantity, setQuantity] = useState(1);
  const quantityInCart = getProductQuantity(product?.id);

  if (!product) return <p>Product not found</p>;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  return (
    <div className={styles.productPage}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Currently in Cart: {quantityInCart}</p>

      <div className={styles.quantityControls}>
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={quantity} readOnly />
        <button onClick={handleIncrement}>+</button>
      </div>

      {quantity > 0 && (
        <AddToCartButton
          product={product}
          quantity={quantity}
          addToCart={() => addToCart(product, quantity)}
        />
      )}
    </div>
  );
};

export default Item;

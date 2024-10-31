// Item.jsx
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import styles from "./Item.module.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import ProductCard from "../ProductCard/ProductCard";

const Item = () => {
  const { productId } = useParams();
  const { products, addToCart, getProductQuantity, removeFromCart } = useCart();
  const product = products ? products.find((item) => item.id === parseInt(productId)) : null;

  const quantityInCart = getProductQuantity(product?.id);
  const [quantity, setQuantity] = useState(quantityInCart);


  if (!product) return <p>Product not found</p>;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const similarProducts = products
  ? products.filter((item) => item.category === product.category && item.id !== product.id)
  : [];

  return (
    <main className={styles.productPage}>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.title} className={styles.productImage} />
        </div>
        <div className={styles.productDetails}>
          <h1>{product.title}</h1>
          <h2>Description</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Currently in Cart: {quantityInCart}</p>

          <div className={styles.quantityControls}>
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>

          <div>
            {quantity > 0 && (
              <AddToCartButton
                product={product}
                quantity={quantity}
                addToCart={() => addToCart(product, quantity)}
              />
            )}

            {quantityInCart > 0 && (
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
            )}
          </div>
        </div>
        </div>
        <div className={styles.similarProducts}>
        <h2>Similar Products</h2>
        <div className={styles.similarProductsGrid}>
          {similarProducts.map((similarProduct) => (
            <ProductCard
              key={similarProduct.id}
              product={similarProduct}
              addToCart={addToCart}
            />
          ))}
        </div>
        </div>
    </main>
  );
};

export default Item;

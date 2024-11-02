import { useCart } from "../../context/CartContext";
import styles from "./CartMain.module.css";

function CartMain() {
  const { cart, emptyCart, addToCart, removeFromCart } = useCart();

  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <main>
      <header className={styles.header}>
        <h1>Shopping Cart</h1>
      </header>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartActions}>
            <button onClick={emptyCart} className={styles.emptyCartButton}>
              Empty Cart
            </button>
          </div>
          <ul className={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <div className={styles.imageContainer}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.itemDetails}>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

                  <div className={styles.quantityControls}>
                    <button onClick={() => addToCart(item, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className={styles.totalAmount}>Total Amount: ${totalAmount.toFixed(2)}</h2>

        </>

      )}
        <div className={styles.end}>
          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
          <div>
            <button
              className={styles.checkoutButton}
              onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
            >
              CHECK OUT
            </button>
          </div>
        </div>

    </main>
  );
}

export default CartMain;

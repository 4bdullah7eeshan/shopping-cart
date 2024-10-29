import { useCart } from "../../context/CartContext";
import styles from "./CartMain.module.css";

function CartMain() {
  const { cart } = useCart();

  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <main>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>

      )}
                        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>

    </main>
  );
}

export default CartMain;

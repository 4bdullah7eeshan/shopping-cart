import { useCart } from "../../context/CartContext";
import styles from "./CartMain.module.css";

function CartMain() {
    const { cartItems } = useCart();
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    return (
        <main>
            <h2>Shopping Cart</h2>
            <ul className={styles.cartList}>
                {cartItems.map((item) => (
                <li key={item.id} className={styles.cartItem}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price.toFixed(2)}</p>
                </li>
                ))}
            </ul>
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button className={styles.checkoutButton}>Proceed to Checkout</button>
        </main>
    )
}

export default CartMain;
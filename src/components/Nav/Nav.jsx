import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import styles from "./Nav.module.css";

function Nav() {
    const { cartItems } = useCart();
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart ({itemCount})</Link> {/* Here, the count of items in cart must be shown too! */}
        </nav>
    );
}

export default Nav;
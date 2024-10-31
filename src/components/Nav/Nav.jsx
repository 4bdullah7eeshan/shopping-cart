import { Link } from 'react-router-dom';
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import { useCart } from "../../context/CartContext";

function Nav() {
    const { getTotalQuantity } = useCart();

    return (
        <nav className={styles.nav}>
            <Link to="/products">Products</Link>
            <Link to="/"><Logo /></Link>
            <Link to="/cart">Cart ({getTotalQuantity()})</Link> {/* Here, the count of items in cart must be shown too! */}
        </nav>
    );
}


export default Nav;
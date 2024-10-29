import { Link } from 'react-router-dom';
import styles from "./Nav.module.css";

function Nav({ cartItemCount }) {
    return (
        <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart ({cartItemCount})</Link> {/* Here, the count of items in cart must be shown too! */}
        </nav>
    );
}

export default Nav;
import { Link } from 'react-router-dom';
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import { useCart } from "../../context/CartContext";
import { ShoppingCart } from 'lucide-react';
import SignUpButton from '../SignUpButton/SignUpButton';

function Nav() {
    const { getTotalQuantity } = useCart();

    return (
        <nav className={styles.nav}>
            <div>
                <Link to="/"><Logo /></Link>
            </div>
            <div className={styles.links}>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <SignUpButton />
                <Link to="/cart"><ShoppingCart /> ({getTotalQuantity()})</Link>
            </div>    
        </nav>
    );
}


export default Nav;
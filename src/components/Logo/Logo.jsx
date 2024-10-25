import { Store } from 'lucide-react';
import styles from "./Logo.module.css";

function Logo() {
    return (
        <h1 className={styles.logo}>
            <Store />
            Shopping Cart
        </h1>
    );
}

export default Logo;
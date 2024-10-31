import { Store } from 'lucide-react';
import styles from "./Logo.module.css";

function Logo() {
    return (
        <h1 className={styles.logo}>
            S
            <Store />
            C
        </h1>
    );
}

export default Logo;
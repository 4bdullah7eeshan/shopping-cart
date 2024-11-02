
import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import styles from "./PreFooter.module.css";
import Newsletter from "../Newsletter/Newsletter";

function PreFooter() {
    return (
        <div className={styles.preFooter}>
            <div className={styles.left}>
                <Logo />
                <Newsletter />    
            </div>
            <Links />

        </div>
    )

}

export default PreFooter;
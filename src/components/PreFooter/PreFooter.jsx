
import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import styles from "./PreFooter.module.css";

function PreFooter() {
    return (
        <div className={styles.preFooter}>
            <Logo />
            <Links />

        </div>
    )

}

export default PreFooter;
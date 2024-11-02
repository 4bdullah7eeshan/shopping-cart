import Socials from "../Socials/Socials";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import styles from "./PreFooter.module.css";

function PreFooter() {
    return (
        <>
            <div className={styles.preFooter}>
                <Logo />
                <Links />

            </div>
            <div className={styles.socials}>
                <Socials />
            </div>
        </>
    )

}

export default PreFooter;
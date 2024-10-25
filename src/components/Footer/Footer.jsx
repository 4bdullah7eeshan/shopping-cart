import { Github } from 'lucide-react';
import styles from "./Footer.module.css";

function Footer() {
    return (
        // Add more stuff just like a typical shopping app would have
        <footer className={styles.footer}>
            <div>
                <p>Copyright &copy; Abdullah Zeeshan 2024</p>
            </div>
            <div>
                <a href="https://github.com/4bdullah7eeshan" target="_blank" rel="noopener noreferrer">
                    <Github />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
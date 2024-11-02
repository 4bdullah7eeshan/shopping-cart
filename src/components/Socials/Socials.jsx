import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import styles from "./Socials.module.css";

function Socials () {
    return (
        <div className={styles.socials}>
            <Instagram />
            <Youtube />
            <Linkedin />
            <Facebook />
        </div>
    )
}

export default Socials;
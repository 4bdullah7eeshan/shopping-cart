import { useState } from 'react';
import styles from './Newsletter.module.css';

function Newsletter() {
    const [email, setEmail] = useState('');

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubscribe = (event) => {
        event.preventDefault();
    };

    return (
        <section className={styles.newsletter}>
            <header className={styles.header}>
                <h2>Newsletter</h2>
            </header>
            <div>
                <p>Stay updated with the latest deals and new products!</p>
            
                <form onSubmit={handleSubscribe} className={styles.form}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleInputChange}
                        required
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;

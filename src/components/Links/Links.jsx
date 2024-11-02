import styles from './Links.module.css';

function Links() {
    const linkSections = [
        {
            title: "Customer Service",
            links: ["Help Center", "Returns", "Shipping", "Track Order"]
        },
        {
            title: "About Us",
            links: ["Our Story", "Careers", "Sustainability"]
        },
        {
            title: "Contact",
            links: ["Email Us", "Live Chat", "FAQs"]
        },
        {
            title: "Legal",
            links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
        }
    ];

    return (
        <div className={styles.links}>
            {linkSections.map((section, index) => (
                <div key={index} className={styles.linkSection}>
                    <h3>{section.title}</h3>
                    <ul>
                        {section.links.map((link, idx) => (
                            <li key={idx}>
                                <a href="#">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Links;

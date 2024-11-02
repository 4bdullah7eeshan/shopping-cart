import styles from "./AboutMain.module.css";

function AboutMain () {
    return (
        <main className={styles.about}>
            <header className={styles.header}>
                <h2>About</h2>
            </header>
            <section className={styles.aboutSection}>
                <img src="https://cdn.pixabay.com/photo/2018/07/28/09/23/woman-3567600_1280.jpg" alt="about" />
                <div className={styles.aboutP}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, iure inventore voluptatum quasi totam dignissimos numquam eum voluptate deleniti magnam illo non sunt minima dolor expedita, veritatis accusantium, nihil in!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quis voluptates pariatur error dolore tempora minus natus, sed quam fugiat esse omnis, a iure officiis adipisci hic consectetur voluptatum totam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repellat vel libero? Magni quo sequi, minima velit itaque tenetur! Deserunt qui corrupti tenetur saepe ullam. Eligendi iste veritatis esse quae!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis mollitia sapiente esse, temporibus quos fuga commodi. Porro incidunt iusto id fugiat, perspiciatis beatae vitae quo deleniti doloribus iste, provident laboriosam!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nesciunt voluptatem aliquid, quaerat minus voluptates dignissimos at tenetur atque, deleniti voluptatum consequuntur excepturi obcaecati vitae commodi molestiae earum placeat magni!</p>
                </div>
            </section>
        </main>
    )
}

export default AboutMain;
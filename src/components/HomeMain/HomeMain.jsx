import Carousel from "../Carousel/Carousel";
import TopProducts from "../TopProducts/TopProducts";
import styles from "./HomeMain.module.css";

function HomeMain() {
    return (
        <main className={styles.main}>
            <Carousel />
            <TopProducts />
        </main>
    );
}

export default HomeMain;
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeMain.module.css";
import { useCart } from '../../context/CartContext';
import ProductCard from "../ProductCard/ProductCard";


function HomeMain() {
    const { products, addToCart } = useCart();

    const topProducts = products ? products.filter((product) => product.rating.rate >= 4.5) : [];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    const images = [
        "https://cdn.pixabay.com/photo/2017/08/06/17/58/people-2594683_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/02/12/21/37/woman-7009979_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg"
    ];

    return (
        <main className={styles.main}>
            <Slider {...settings}>
            {images.map((img, index) => (
                <div key={index}>
                    <img src={img} alt={`Slide ${index}`} style={{ width: "100%", height: "auto" }} />
                </div>
            ))}
            </Slider>
            <section className={styles.topProducts}>
                <header className={styles.header}>
                    <h2>Top Products</h2>
                </header>
                <div className={styles.grid}>
                    {topProducts.map((product) => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default HomeMain;
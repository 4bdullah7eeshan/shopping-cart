import Header from "../components/Header/Header"
import ProductsMain from "../components/ProductsMain/ProductsMain";
import Footer from "../components/Footer/Footer"
import { CartProvider } from "../context/CartContext";

function Products() {
    return (
        <>
            <Header />
            <ProductsMain />
            <Footer />
        </>
    );
}

export default Products;
import Header from "../components/Header/Header"
import CartMain from "../components/CartMain/CartMain";
import Footer from "../components/Footer/Footer"
import { CartProvider } from "../context/CartContext";

function Cart() {
    return (
        <CartProvider>
            <Header />
            <CartMain />
            <Footer />
        </CartProvider>
    );
}

export default Cart;
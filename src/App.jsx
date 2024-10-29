import Header from "./components/Header/Header"
import HomeMain from "./components/HomeMain/HomeMain"
import Footer from "./components/Footer/Footer"
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
        <Header />
        <HomeMain />
        <Footer />
    </>
  );
}

export default App

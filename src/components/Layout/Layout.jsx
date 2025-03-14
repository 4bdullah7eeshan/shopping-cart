import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useCart } from "../../context/CartContext";
import PreFooter from "../PreFooter/PreFooter";
import Newsletter from "../Newsletter/Newsletter";

const Layout = () => {
  const { getTotalQuantity } = useCart();
  const cartItemCount = getTotalQuantity();

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <Outlet />
      <Newsletter />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Layout;

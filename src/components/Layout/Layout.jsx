import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useCart } from "../../context/CartContext";
import Newsletter from "../Newsletter/Newsletter";
import PreFooter from "../PreFooter/PreFooter";

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

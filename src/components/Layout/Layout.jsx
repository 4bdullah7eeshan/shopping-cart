import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useCart } from "../../context/CartContext";

const Layout = () => {
  const { getTotalQuantity } = useCart();
  const cartItemCount = getTotalQuantity();

  return (
    <>
      <Header cartItemCount={cartItemCount} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

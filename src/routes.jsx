import App from "./App";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "cart",
    element: <Cart />,
  },

];

export default routes;

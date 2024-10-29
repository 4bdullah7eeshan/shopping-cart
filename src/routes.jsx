import App from "./App";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />, // Use the layout here
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // This will match the root path
        element: <App />, // Render App here if needed
      },
      {
        path: "products",
        element: <Products />, // Render Products page here
      },
      {
        path: "cart",
        element: <Cart />, // Render Cart page here
      },
    ],
  },
];

export default routes;

import PropTypes from "prop-types";
import styles from "./CartMain.module.css";

function CartMain({ cart }) {
  return (
    <main>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

CartMain.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartMain;

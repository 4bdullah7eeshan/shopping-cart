import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const updateCartItem = (productId, quantity) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart, [productId]: quantity };
            if (quantity === 0) delete updatedCart[productId];
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, updateCartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

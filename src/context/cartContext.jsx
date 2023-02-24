import React, { useState, createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

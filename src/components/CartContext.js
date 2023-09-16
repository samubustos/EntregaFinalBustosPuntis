import { createContext, useContext, useState } from "react";

export const CartContext = createContext()


export const useCartContext = () => {
    return useContext(CartContext)
}


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
          const updatedCart = cart.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + quantity }
              : product
            );
          setCart(updatedCart);
        } else {
          const newItem = { ...item, quantity };
          setCart((prevCart) => [...prevCart, newItem]);
        }
      
        calTotal(); 
    };
      

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
        calTotal(); 
    };

    const clearCart = () => {
        setCart([]);
        setTotal(0); 
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId); 
    };

    const calTotal = () => {
        const newTotal = cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        setTotal(newTotal);
    };

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total}}>
            {children}
        </CartContext.Provider>
    );
}

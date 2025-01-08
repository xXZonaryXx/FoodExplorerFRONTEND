import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext({});

function CartProvider({ children }) {

  const [ cartItems, setCartItems ] = useState(0);
  const [ cartDishes, setCartDishes ] = useState([]);

  console.log('cart: ', cartItems, cartDishes);

  function addDish(dish, qty) {
    const newAddDish = { ...dish, quantity: qty };

    setCartDishes(prevState => [ ...prevState, newAddDish ]);
    setCartItems(prevState => (prevState += qty));
    toast(`Adicionado: ${qty} x ${dish.name}`, {
      icon: '😋'
    });
  }

  return (
    <CartContext.Provider value={{
      cartItems, addDish
    }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };
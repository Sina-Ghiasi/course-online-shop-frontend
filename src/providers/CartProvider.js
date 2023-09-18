import { useContext, useReducer, createContext, useEffect } from "react";
import cartReducer from "../reducers/cartReducer";
const CartContext = createContext();
const CartContextDispatcher = createContext();
const LOCAL_STORAGE_CART_KEY = "cartState";

const initialState = JSON.parse(
  localStorage.getItem(LOCAL_STORAGE_CART_KEY)
) || {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const data = JSON.stringify(cart);
    localStorage.setItem(LOCAL_STORAGE_CART_KEY, data);
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={cartDispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);

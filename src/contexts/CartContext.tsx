import { FC, ReactNode, createContext, useState } from "react";
import { IProduct } from "../interfaces";

type CartContextType = {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
};

const initialCartContext: CartContextType = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext<CartContextType>(initialCartContext);

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((product) => product?.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

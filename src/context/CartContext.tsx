import { createContext, ReactNode, useContext } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

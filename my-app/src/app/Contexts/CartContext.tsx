"use client"
import {createContext, useContext, useState} from 'react'

interface CartContextType {

  cart: cartItem[];

  setCart: React.Dispatch<React.SetStateAction<cartItem[]>>;

  addToCart: (item: cartItem) => void;

  removeFromCart: (itemId: string) => void;

  clearCart: () => void;

  under2500: boolean;
  
  setunder2500: React.Dispatch<React.SetStateAction<boolean>>;
  under7500: boolean;
  setunder7500: React.Dispatch<React.SetStateAction<boolean>>;
  men: boolean;
  setMen: React.Dispatch<React.SetStateAction<boolean>>;
  women: boolean;
  setWomen: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: number;
  setIsActive: React.Dispatch<React.SetStateAction<number>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export interface cartItem {
  quantity: number;
  productId: string;
  productName: string;
  description: string;
  category: string;
  price: number;
  totalprice: number;
  image: string;
  color: string;
  size: string;
}

export function CartWrapper ({children}:{
  children: React.ReactNode;
}){
  const [cart, setCart] = useState<cartItem[]>([])
  
  const [under2500, setunder2500] = useState<boolean>(false)
  const [under7500, setunder7500] = useState<boolean>(false)
  const [men, setMen] = useState<boolean>(false)
  const [women, setWomen] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<number>(0)


  const addToCart = (item: cartItem) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find((cartItem) => cartItem.productId === item.productId);
    if (existingItem) {
      // Update the quantity and total price
      return prevCart.map((cartItem) =>
        cartItem.productId === item.productId
          ? {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
              totalprice: cartItem.totalprice + item.totalprice,
            }
          : cartItem
      );
    }
    // Add new item to the cart
    return [...prevCart, item];
  });
};

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.productId !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return(
    <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart, under2500, setunder2500, under7500, setunder7500, men, setMen, women, setWomen, isActive, setIsActive}}>
      {children}
    </CartContext.Provider>
  )
}


export function useCartContext(){
  return useContext(CartContext)
}
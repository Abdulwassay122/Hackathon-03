"use client"
import {createContext, useContext, useEffect, useState} from 'react'

interface CartContextType {

  cart: cartItem[];

  setCart: React.Dispatch<React.SetStateAction<cartItem[]>>;

  addToCart: (item: cartItem) => void;

  removeFromCart: (itemId: string, itemSize:string, itemColor: string) => void;

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
  authToken: string;
  setAuthToken: React.Dispatch<React.SetStateAction<string>>;
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
  const [authToken, setAuthToken] = useState<string>('')

  const addToCart = (item: cartItem) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.size === item.size &&
        cartItem.color === item.color
          ? {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
              totalprice: cartItem.totalprice + item.totalprice,
            }
          : cartItem
      );
  
      // Check if item was updated, if not, add it as a new item
      const itemExists = prevCart.some(
        (cartItem) =>
          cartItem.productId === item.productId &&
          cartItem.size === item.size &&
          cartItem.color === item.color
      );
  
      const newCart = itemExists ? updatedCart : [...prevCart, item];
  
      // Store in localStorage
      localStorage.setItem("cart", JSON.stringify(newCart));
  
      return newCart;
    });
  };
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  

  const removeFromCart = (itemId: string, itemSize: string, itemColor: string) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter(
        (item) =>
          !(
            item.productId === itemId &&
            item.size === itemSize &&
            item.color === itemColor
          )
      );
  
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(newCart));
  
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return(
    <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart, clearCart, under2500, setunder2500, under7500, setunder7500, men, setMen, women, setWomen, isActive, setIsActive, authToken, setAuthToken}}>
      {children}
    </CartContext.Provider>
  )
}


export function useCartContext(){
  return useContext(CartContext)
}
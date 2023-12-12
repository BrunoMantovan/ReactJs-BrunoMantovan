import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();


const CartContextComponent = ({children}) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const newTotal = cart.reduce((acumulador, e) => acumulador + e.cantidad, 0);
    setTotal(newTotal);
    console.log(cart)
  }, [cart])


  function addItem(cartItem){
    const existingItem = cart.find(item => item.id === cartItem.id);

  if (existingItem) {
    const updatedCart = cart.map(item =>
      item.id === cartItem.id ? { ...item, cantidad: item.cantidad + cartItem.cantidad, price: item.price + (cartItem.price * cartItem.cantidad) } : item);
    setCart(updatedCart);

  } else {
    setCart(prevCart => [...prevCart, cartItem]);
    
  }
  }


  return (
    <CartContext.Provider value={{cart, total, addItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextComponent
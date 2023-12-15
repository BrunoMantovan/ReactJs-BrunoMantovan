import { doc, getDoc, writeBatch } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { db } from '../firebase/client';
export const CartContext = createContext();


const CartContextComponent = ({children}) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const newTotal = cart.reduce((acumulador, e) => acumulador + e.cantidad, 0);
    const newPrice = cart.reduce((acumulador, e) => acumulador + e.price, 0);
    setTotal(newTotal);
    setPrice(newPrice);
  }, [cart])


  function addItem(cartItem, stock){
    const existingItem = cart.find(item => item.id === cartItem.id);
  if (existingItem) {
    const updatedCart = cart.map(item =>
      item.id === cartItem.id ? { ...item, cantidad: item.cantidad + cartItem.cantidad, price: item.price + (cartItem.price * cartItem.cantidad) } : item);
    setCart(updatedCart);

  } else {
    setCart(prevCart => [...prevCart, cartItem]);
  }
    updateStock(cartItem.id, -cartItem.cantidad)
  }

  const updateStock = async (id, quantity) => {
    const batch = writeBatch(db)
    const productRef = doc(db, "productos", id);
    const itemRef = doc(db, "productos", id);
    let item = {}
    await getDoc(itemRef).then((doc)=> item={id:doc.id, ...doc.data()})
    const newStock = (item.stock + quantity)
    batch.update(productRef, {"stock": newStock })
    await batch.commit();
  };




  function RemoveItem(id, quantity){
    const itemIndex = cart.findIndex(e => e.id == id);
    const newCart = [...cart.slice(0, itemIndex), ...cart.slice(itemIndex + 1)];
    updateStock(id, quantity)
    setCart(newCart);

  }

  return (
    <CartContext.Provider value={{cart, total, addItem, price, RemoveItem, setCart, isLoading, setIsLoading}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextComponent
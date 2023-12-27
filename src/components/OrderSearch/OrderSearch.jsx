import React, { useState } from 'react'
import estilos from "./OrderSearch.module.css"
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/client';
import CartItem from '../CartItem/CartItem';
import Swal from 'sweetalert2';


export default function OrderSearch() {
    
  const [id, setId] = useState({
    orderId: "",
  })
  const [orderItem, setOrderItem] = useState({})
  const [isOrder, setIsOrder] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setId((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const refOrder = doc(db, 'orders', id.orderId);
        
    try {
      const docSnapshot = await getDoc(refOrder);
      if (docSnapshot.exists()) {
        const item = { id: docSnapshot.id, ...docSnapshot.data() };
        setOrderItem(item);
        setIsOrder(true);
      } else {
        throw new Error('Order not found');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'The order was not found, try again.',
      });
    }
  };


  return isOrder == false ? (
    <div className={estilos.order_search}>
        <h1 className={estilos.titulo}>Search for your order</h1>
        <section className={estilos.search_txt}>
            <p className={estilos.text}> Please introduce your order number ID</p>
            <form className={estilos.form} onSubmit={(e)=> handleSubmit(e)}>
                <div className={estilos.input_group}>
                  <input className={estilos.input} required type="text" id='orderId' name='orderId' value={id.orderId} onChange={handleInputChange}/>
                  <label className={estilos.label} htmlFor="orderId">OrderId</label>
                </div>
                <button type="submit" className={estilos.search_btn} ><i className={`${"fa-solid fa-magnifying-glass"}`}></i></button>
            </form>
        </section>
    </div>
  ) : (
    <div className={estilos.order}>
        <section>
            <h1 className={estilos.titulo}>Hi {orderItem.buyer.firstname} {orderItem.buyer.lastname}</h1>
            <h2 className={estilos.text}>Your order: {id.orderId}</h2>
            <div className={estilos.items}>          
              {orderItem.cart.map((p)=>(<CartItem key={p.id} name={p.name} price={p.price} img={p.img} quantity={p.cantidad} id={p.id}/>))}
            </div>
            <h2 className={estilos.total}>Your total is: <span>$</span> {orderItem.price}</h2>
        </section>
    </div>
  )
}

import React, { useContext, useState } from 'react'
import Subtotal from '../Subtotal/Subtotal'
import estilos from "./Checkout.module.css"
import { CartContext } from '../Context/CartContext';
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../firebase/client';
import Swal from 'sweetalert2';
import {useNavigate } from 'react-router-dom';


export default function Checkout() {

  const {cart, price, setCart, RemoveItem} = useContext(CartContext);
  const navigate = useNavigate();
  let isLoading = false;

  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    adress: "",
    zipcode: "",
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBuyer((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cart.length >=1){
      const order = {
        buyer,
        cart,
        price
      }
      isLoading = true;
      addOrder(order);
    }else{
      Swal.fire({
        icon: "error",
        title: "Your cart is empty, add something."
      }).then((result) => {
        if(result.isConfirmed){
          navigate("/")
        }
      })
    }
  }

  async function addOrder(order){
    const refOrder = collection(db, "orders")
    
    addDoc(refOrder, order).then((e) => {
      Swal.fire({
        icon: "success",
        title: "Your purchase has been processed!",
        text: ("your order ID is: " + `${e.id}`)
      }
      )
    }).finally(() => isLoading = false);

    cart.forEach(e => {
      RemoveItem(e.id, e.cantidad)
  });
    setCart([])
  }

  const handleKeyDown = (event) => {
   
    if (event.key === 'e') {
      event.preventDefault();
    }
  };

  return isLoading != true ? (
    <div className={estilos.checkout}>      
      <form className={estilos.form} onSubmit={(e)=> handleSubmit(e)}>
        <div className={estilos.input_group}>
          <input className={estilos.input} required type="text" id='firstname' value={buyer.firstname} onChange={handleInputChange}/>
          <label className={estilos.label} htmlFor="firstname">Name</label>
        </div>
        <div className={estilos.input_group}>
          <input className={estilos.input} required type="text" id='lastname' value={buyer.lastname} onChange={handleInputChange}/>
          <label className={estilos.label} htmlFor="lastname">Lastname</label>
        </div>
        <div className={estilos.input_group}>
          <input className={estilos.input} required type='email' id="email" value={buyer.email} onChange={handleInputChange}/>
          <label className={estilos.label} htmlFor="email">Email</label>
        </div>
        <div className={estilos.input_group}>
          <input className={estilos.input} required type="number" onKeyDown={handleKeyDown} id='phone' value={buyer.phone} onChange={handleInputChange}/>
          <label className={estilos.label} htmlFor="phone">Phone Number</label>
        </div>
        <div className={estilos.input_group}>
          <input className={estilos.input} required type="text" id='adress' value={buyer.adress} onChange={handleInputChange}/>
          <label className={estilos.label} htmlFor="adress">Adress</label>
        </div>
        <div className={estilos.input_group}>
          <input className={estilos.input} required type="number" onKeyDown={handleKeyDown} id='zipcode' value={buyer.zipcode} onChange={handleInputChange}/>
          <label className={estilos.label} htmlFor="zipcode">Zip Code</label>
        </div>
        {/* <div className={estilos.input_group}>
          <input className={estilos.input} required type="number" onKeyDown={handleKeyDown} id='card' value={buyer.card} onChange={handleInputChange}/>
          <label className={estilos.label} htmlFor="card">Credit/Debit Card</label>
        </div> */}
        <button className={estilos.submit} type="submit">Finish Purchase</button>
      </form>
      <Subtotal/>
    </div>
  ) : (
    <section className={estilos.loader_container}>
      <div className={estilos.loader}>
      </div>      
      <p className={estilos.loading_text}>Loading...</p>
    </section>
  )
}

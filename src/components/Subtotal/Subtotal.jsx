import React, { useContext } from 'react'
import estilos from "./Subtotal.module.css"
import { CartContext } from '../Context/CartContext';
import { NavLink } from 'react-router-dom';

export default function Subtotal() { 
    const {total, price} = useContext(CartContext);
    let shipping = total*2000;
    let finalPrice = shipping + price;

  return (
    <section className={window.location.pathname === '/cart' ? estilos.subtotal : `${estilos.subtotal} ${estilos.subtotal2}`}>
        <div className={estilos.costs}><p>Products({total})</p> <p><span>$</span>{price}</p></div>
        <div className={estilos.costs}><p>Shipping</p> <p><span>$</span>{shipping}</p></div>
        <hr />
        <div className={estilos.total}><p>Total</p> <p><span>$</span>{finalPrice}</p></div>

        <NavLink to={`/checkout`} className={window.location.pathname === '/cart' ? estilos.checkout_link : estilos.none}>
            <button className={window.location.pathname === '/cart' ? estilos.checkout_button : estilos.none} >Checkout</button>
        </NavLink>
    </section>
  )
}
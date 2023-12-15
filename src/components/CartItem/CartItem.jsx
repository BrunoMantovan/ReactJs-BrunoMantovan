import React, { useContext } from 'react'
import estilos from "./CartItem.module.css"
import { CartContext } from '../Context/CartContext';

export default function (props) {

  const {RemoveItem} = useContext(CartContext);
  const currentPath = window.location.pathname;
  console.log(currentPath);
  return (
    <div className={estilos.tarjeta}>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <p>x{props.quantity}</p>
        <h2><span>$ </span>{props.price}</h2>
        <button className={currentPath != "/cart" ? estilos.not_show : estilos.remove} onClick={() => RemoveItem(props.id, props.quantity)} >X</button>
    </div>
  )
}

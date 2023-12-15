import React, { useContext } from 'react'
import estilos from "./CartItem.module.css"
import { CartContext } from '../Context/CartContext';

export default function (props) {

  const {RemoveItem} = useContext(CartContext);

  return (
    <div className={estilos.tarjeta}>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <p>x{props.quantity}</p>
        <h2><span>$ </span>{props.price}</h2>
        <button className={estilos.remove} onClick={() => RemoveItem(props.id, props.quantity)} >X</button>
    </div>
  )
}

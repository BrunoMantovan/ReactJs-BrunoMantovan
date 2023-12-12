import React from 'react'
import estilos from "./CartItem.module.css"

export default function (props) {
  return (
    <div className={estilos.tarjeta}>
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <p>x{props.quantity}</p>
        <h2><span>$ </span>{props.price}</h2>
        <button className={estilos.button}>X</button>
    </div>
  )
}

import React from 'react'
import estilos from "./Itemcontainer.module.css"
import img from "./img/samsung24.jpg"
export default function Itemcontainer({titulo, precio}) {

  return (
    <div className={estilos.tarjeta}>
        <img src= {img} alt="" />
        <div>
        <h5>{titulo}</h5>
        <h3><span>$</span>{precio}</h3>
        <button>Comprar</button>
        </div>
        
    </div>
  )
}

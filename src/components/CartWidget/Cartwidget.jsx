import React, { useContext } from 'react'
import img from "./Img/cart-white.png"
import estilos from "./CartWidget.module.css"
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'


export default function Cartwidget() {
const {total} = useContext(CartContext);

  return (
    <div className={estilos.contenedor}>
      <NavLink to={"/cart"}><img className={estilos.link} src={img} alt="cart" /></NavLink>
      <span className={estilos.numero}>{total}</span>
    </div>
  )
}

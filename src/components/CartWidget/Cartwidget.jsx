import React, { useContext } from 'react'
import img from "./Img/cart-white.png"
import estilos from "./CartWidget.module.css"
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'


export default function Cartwidget() {
const {total} = useContext(CartContext);

  return (
    <div className={estilos.contenedor}>
      <NavLink className={estilos.link} to={"/cart"}><img className={estilos.img} src={img} alt="cart" /></NavLink>
      <div className={total >=1 ? estilos.contenedor_numero : estilos.vacio }><span className={estilos.numero}>{total}</span></div>
    </div>
  )
}

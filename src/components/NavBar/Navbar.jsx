import React from 'react'
import estilos from "./Navbar.module.css"
import Cartwidget from '../CartWidget/Cartwidget'
export default function Navbar() {
  return (
    <nav className={estilos.navbar}>
        <h1>Ecommerce</h1>
        <ul className={estilos.list}>
            <li><a href="">Inicio</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Cuenta</a></li>
            <li><a href="">Soporte</a></li>
        </ul>
        <Cartwidget/>
    </nav>
  )
}

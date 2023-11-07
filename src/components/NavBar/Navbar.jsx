import React from 'react'
import estilos from "./Navbar.module.css"
import Cartwidget from '../CartWidget/Cartwidget'

export default function Navbar() {
  return (
    <nav className={estilos.navbar}>
        <h1>Ecommerce</h1>
        <ul className={estilos.list}>
            <li><a href="">Celulares</a></li>
            <li><a href="">Televisores</a></li>
            <li><a href="">Consolas</a></li>
            <li><a href="">Gaming</a></li>
        </ul>
        <Cartwidget/>
    </nav>
  )
}

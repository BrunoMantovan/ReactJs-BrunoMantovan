import React, { useState } from 'react'
import estilos from "./Navbar.module.css"
import Cartwidget from '../CartWidget/Cartwidget'

export default function Navbar() {

const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <nav className={estilos.navbar}>
      <a href=""><h1>Ecommerce</h1></a>

      
      <ul className={click ? `${estilos.active} ${estilos["nav-menu"]}` : estilos["nav-menu"]}>
        <li onClick={closeMenu}><a href="">Celulares</a></li>
        <li onClick={closeMenu}><a href="">Televisores</a></li>
        <li onClick={closeMenu}><a href="">Consolas</a></li>
        <li onClick={closeMenu}><a href="">Gaming</a></li>
      </ul>
      <div className={estilos.menu}>
        <Cartwidget/>
        <div className={estilos['menu-icon']} onClick={handleClick}>
          <i className={`${click ? "fas fa-times" : "fas fa-bars"} ${click ? estilos['fa-times'] : estilos['fa-bars']}`} ></i>
      </div>
      </div>
     
    </nav>
  )
}

import React, { useState } from 'react'
import estilos from "./Navbar.module.css"
import Cartwidget from '../CartWidget/Cartwidget'
import {NavLink } from 'react-router-dom'

export default function Navbar(home, vehicles, starships) {

const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    
    <nav className={estilos.navbar}>
      <NavLink to={"/"}><h1>Galactic Shipyard</h1></NavLink>
      
      <ul className={click ? `${estilos.active} ${estilos["nav-menu"]}` : estilos["nav-menu"]}>
        <li onClick={closeMenu}> <NavLink to={"/"}>Home</NavLink></li>
        <li onClick={closeMenu}> <NavLink to={"/category/vehicles"}>Vehicles</NavLink></li>
        <li onClick={closeMenu}> <NavLink to={"/category/spaceships"}>Spaceships</NavLink></li>
        <Cartwidget/>
      </ul>
      <div className={estilos.menu}>
        <div className={estilos['menu-icon']} onClick={handleClick}>
        <i className={`${click ? "fas fa-times" : "fas fa-bars"} ${click ? estilos['fa-times'] : estilos['fa-bars']}`} ></i>
      </div>
      </div>
    </nav>
  )
}

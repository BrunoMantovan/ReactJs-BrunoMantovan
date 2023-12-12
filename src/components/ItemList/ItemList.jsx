import React from 'react'
import estilos from "./ItemList.module.css"
import { NavLink } from 'react-router-dom'

export default function ItemList(props) {
  return (
    <>
        <div className={estilos.tarjetaPadre}>
            <NavLink to={`/item/${props.id}`}>
                <div className={estilos.tarjeta}>
                    <picture>
                        <img src={props.img} alt={props.name} />
                    </picture>
                    <div>
                    <h2>{props.name}</h2>
                    </div>
                    <section>
                        <p><span>$ </span>{props.price}</p>
                    </section>
                    <footer>
                        <p>stock: {props.stock}</p>
                    </footer>
                </div>
            </NavLink>
        </div>
    </>
  )
}

import React from 'react'
import estilos from "./ItemList.module.css"
import { NavLink } from 'react-router-dom'

export default function ItemList({name, img, price, stock, id}) {
  return (
    <>
        <div className={estilos.tarjetaPadre}>
            <NavLink to={`/item/${id}`}>
                <div className={estilos.tarjeta}>
                    <picture>
                        <img src={img} alt={name} />
                    </picture>
                    <div>
                    <h2>{name}</h2>
                    </div>
                    <section>
                        <p><span>$ </span>{price}</p>
                    </section>
                    <footer>
                        <p>stock: {stock}</p>
                    </footer>
                </div>
            </NavLink>
        </div>
    </>
  )
}

import React from 'react'
import estilos from "./ItemList.modules.css"
export default function ItemList({name, img, price, stock}) {
  return (
<>
    <div className="tarjeta">
        <picture>
            <img src={img} alt={name} />
        </picture>
        <h2>{name}</h2>
        <section>
            <p><span>$ </span>{price}</p>
        </section>
        <footer>
            <p>stock: {stock}</p>
            <button>Buy</button>
        </footer>

    </div>
    </>
  )
}

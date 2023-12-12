import React from 'react'
import estilos from "./ItemDetail.module.css"
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({img, name, model, crew , passengers, length, manufacturer, price, stock, id}) {
  return (
    <>
        <div className={estilos.tarjeta}>
            <picture>
            <img src={img} alt={name} />
            </picture>
            <section className={estilos.descripcion}>
                <div className={estilos.titulo}>
                    <h2>{name}</h2>
                    <h1><span>$ </span>{price}</h1>
                </div>
                <div className={estilos.datos}>
                    <h4>{model}</h4>
                    <p>Crew: {crew}</p>
                    <p>Passengers: {passengers}</p>
                    <p>Length: {length}</p>
                    <p>Manufactured by: {manufacturer}</p>
                </div>
                    
                <div className={estilos.buy}>
                    <div>
                    <ItemCount stock={stock} id={id} name={name} price={price} img={img}/>
                    <p>Stock: {stock}</p>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

import React, { useState } from 'react'
import estilos from "./ItemCount.module.css"

export default function ItemCount({stock}) {
    const [numero, setNumero] = useState(0)

    const sumar = () => {
        numero < stock && setNumero(numero + 1)
    }
    const restar = () => {
        numero >= 1 && setNumero(numero - 1)
    }

    return (
        <>
            <div className={estilos.contador}>
                <div>
                    <button onClick={restar}>-</button>
                    <h3>{numero}</h3>
                    <button onClick={sumar}>+</button>
                </div>
                <button className={estilos.buy}>Add to cart</button>
            </div>
        </>
    )
}

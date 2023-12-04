import React, { useState } from 'react'
import estilos from "./ItemCount.module.css"
export default function ItemCount({stock}) {
    const [numero, setNumero] = useState(1)

    const sumar = () => {
        numero < stock && setNumero(numero + 1)
    }
    const restar = () => {
        numero >= 2 && setNumero(numero - 1)
    }

    return (
        <>
            <div className={estilos.contador}>
                <div>
                    <button className={numero <=1 ? estilos.contador_button_off : estilos.contador_button} onClick={restar}>-</button>
                    <h3>{numero}</h3>
                    <button className={numero >=stock ? estilos.contador_button_off : estilos.contador_button} onClick={sumar}>+</button>
                </div>
                <button className={estilos.buy}>Add to cart</button>
            </div>
        </>
    )
}

import React, { useContext, useState } from 'react'
import estilos from "./ItemCount.module.css"
import { CartContext } from '../Context/CartContext'
export default function ItemCount(props) {

    const {cart, addItem} = useContext(CartContext)
    const {id, name, price, img} = props;
    const [numero, setNumero] = useState(1)

    const sumar = () => {
        numero < props.stock && setNumero(numero + 1)
    }
    const restar = () => {
        numero >= 2 && setNumero(numero - 1)
    }
    function addToCart(){
        const cartItem = {
            id,
            name,
            price,
            img,
            cantidad: numero
        }
        const stock = props.stock;
        addItem(cartItem);
    }

    return (
        <>
            <div className={estilos.contador}>
                <div>
                    <button className={numero <=1 ? estilos.contador_button_off : estilos.contador_button} onClick={restar}>-</button>
                    <h3>{numero}</h3>
                    <button className={numero >=props.stock ? estilos.contador_button_off : estilos.contador_button} onClick={sumar}>+</button>
                </div>
                <button className={estilos.buy} onClick={addToCart}>Add to cart</button>
            </div>
        </>
    )
}

import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import estilos from "./Cart.module.css"

import CartItem from '../CartItem/CartItem';
export default function Cart() {

    const {cart} = useContext(CartContext);

    
    return (
        <div className={estilos.cart}>
            <section>
                <div>          
                    {cart.map((p)=>(<CartItem key={p.id} name={p.name} price={p.price} img={p.img} quantity={p.cantidad}/>))}
                </div>
            </section>

        </div>
    )
}

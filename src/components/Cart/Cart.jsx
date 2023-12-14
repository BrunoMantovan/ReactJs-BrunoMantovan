import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import estilos from "./Cart.module.css"

import CartItem from '../CartItem/CartItem';
import Subtotal from '../Subtotal/Subtotal';
export default function Cart() {

    const {cart, total, price, setCart} = useContext(CartContext);

    
    return total != 0 ?(
        
        <div className={estilos.cart}>
            
            <section className={estilos.items}>
                <div>          
                    {cart.map((p)=>(<CartItem key={p.id} name={p.name} price={p.price} img={p.img} quantity={p.cantidad} id={p.id}/>))}
                </div>
                <button className={estilos.emptyBtn} onClick={() => setCart([])}>Empty cart</button>
            </section>
            <Subtotal/>
        </div>
    ) : (
        <p className={estilos.emptyTxt}>The cart is empty</p>
    );
}

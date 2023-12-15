import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import estilos from "./Cart.module.css"

import CartItem from '../CartItem/CartItem';
import Subtotal from '../Subtotal/Subtotal';
import { NavLink } from 'react-router-dom';
export default function Cart() {

    const {cart, total, RemoveItem, setCart} = useContext(CartContext);

    function removeAll(){
        cart.forEach(e => {
            RemoveItem(e.id, e.cantidad)
        });
        setCart([])
    }
    
    return total != 0 ?(
        
        <div className={estilos.cart}>
            
            <section className={estilos.items}>
                <div>          
                    {cart.map((p)=>(<CartItem key={p.id} name={p.name} price={p.price} img={p.img} quantity={p.cantidad} id={p.id}/>))}
                </div>
                <button className={estilos.emptyBtn} onClick={() => removeAll()}>Empty cart</button>
            </section>
            <Subtotal/>
        </div>
    ) : (
        <div className={estilos.no_cart}>
            <p className={estilos.emptyTxt}>The cart is empty</p>
            <NavLink to={`/`} className={estilos.homeLink}>
                <button className={estilos.homeBtn}>Continue shopping</button>
            </NavLink>
        </div>
    );
}

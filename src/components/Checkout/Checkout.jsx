import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import estilos from "./Checkout.module.css"
export default function Checkout() {
  return (
    <div className={estilos.checkout}>
            
            <section className={estilos.form}>
                
            </section>
            <Subtotal/>
        </div>
  )
}

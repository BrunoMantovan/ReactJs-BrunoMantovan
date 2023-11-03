import React from 'react'
import estilos from "./ItemListContainer.module.css"
export default function ItemListContainer({titulo}) {
  return (
    <div className={estilos.div}>
        <h1>{titulo}</h1>
    </div>
  )
}

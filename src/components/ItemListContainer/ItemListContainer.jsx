import React, { useEffect, useState } from 'react'
import estilos from "./ItemListContainer.module.css"
import axios from "axios"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, doc} from 'firebase/firestore'
import { db } from '../firebase/client';
export default function ItemListContainer() {
  
  const [productArray, setProductArray] = useState([]);
  const {categoryId} = useParams();

  
  useEffect(()=>{
    const productsRef = query(collection(db, "productos"))

    getDocs(productsRef)    
    .then(snapshot =>setProductArray(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))))

  }, [categoryId])


  return (
    <div className={estilos.container_body}>
      <h1 className={estilos.titulo}> {categoryId ? categoryId : "rebel? imperial? Doesnt matter. if you have got the credit we sell it" }</h1>
        <div className={estilos.div}>
          
          {productArray.filter(c => categoryId ? c.category == categoryId : true).map((p)=>(
            <ItemList key={p.model} img={p.img} name={p.name} price={p.cost_in_credits} stock={p.stock} id={p.id}/>
          ))}
        </div>
    </div>
  )
}

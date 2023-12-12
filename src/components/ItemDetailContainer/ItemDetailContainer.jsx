import React, { useContext } from 'react'
import estilos from "./ItemDetailContainer.module.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {collection, getDocs, query, doc} from 'firebase/firestore'
import { db } from '../firebase/client';

export default function ItemDetailContainer() {

const [ProductArray, setProductArray] = useState([]);
const {itemId} = useParams();
  
useEffect(()=>{

  const productsRef = query(collection(db, "productos"))

  getDocs(productsRef)  
  .then(snapshot =>{console.log(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})))
  setProductArray(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})))})
    
}, [itemId])

  return (
    <>

        <div className={estilos.div}>
          {ProductArray.filter(c =>itemId ? c.id == itemId : true).map((p)=>(
            <ItemDetail key={p.id} img={p.img} name={p.name} price={p.cost_in_credits} stock={"10"} model={p.model} crew={p.crew} passengers={p.passengers} length={p.length} manufacturer={p.manufacturer} id={p.id}/>
          ))}
        </div>
    </>
  )
}

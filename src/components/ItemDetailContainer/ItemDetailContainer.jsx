import React from 'react'
import estilos from "./ItemDetailContainer.module.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer() {

const [array, setData] = useState([]);
const {itemId} = useParams();

  
  useEffect(()=>{
    const url = ("/public/Json/vehicles.json")
    

    axios.get(url)
    .then((response)=> setData(response.data.results))
    
  }, [itemId])


  return (
    <>

        <div className={estilos.div}>
          {array.filter(c =>itemId ? c.id == itemId : true).map((p)=>(
            <ItemDetail key={p.model} img={p.img} name={p.name} price={p.cost_in_credits} stock={"10"} model={p.model} crew={p.crew} passengers={p.passengers} length={p.length} manufacturer={p.manufacturer}/>
          ))}
        </div>
    </>
  )
}

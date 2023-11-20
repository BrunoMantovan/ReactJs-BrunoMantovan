import React, { useEffect, useState } from 'react'
import estilos from "./ItemListContainer.module.css"
import axios from "axios"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {
  
  const [array, setData] = useState([]);
  const {categoryId} = useParams();

  
  useEffect(()=>{
    const url = ("/public/Json/vehicles.json")
    

    axios.get(url)
    .then((response)=> setData(response.data.results))
  }, [categoryId])


  return (
    <>
      <h1 className={estilos.titulo}> {categoryId ? categoryId : "Rebel? Imperial? Doesnt matter. If you have got the credit we sell it" }</h1>
        <div className={estilos.div}>
          
          {array.filter(c => categoryId ? c.category == categoryId : true).map((p)=>(
            <ItemList key={p.model} img={p.img} name={p.name} price={p.cost_in_credits} stock={"1"} id={p.id}/>
          ))}
        </div>
    </>
  )
}

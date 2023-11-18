import React, { useEffect, useState } from 'react'
import estilos from "./ItemListContainer.module.css"
import axios from "axios"
import ItemList from '../ItemList/ItemList';


export default function ItemListContainer({titulo}) {
  const url = "https://swapi.dev/api/starships/?page="
  const [array, setData] = useState([]);
  useEffect(()=>{
    axios.get("/public/Json/Swapi.json")
    .then((response)=> setData(response.data.results))
  }, [])


  return (
    <>
    <h1>{titulo}</h1>
      <div className={estilos.div}>
        
        {array.map((p)=>(
          <ItemList key={p.model} img={p.img} name={p.name} price={p.cost_in_credits} stock={"1"}/>
        ))}
      </div>
    </>
  )
}

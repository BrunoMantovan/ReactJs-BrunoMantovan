import React, { useEffect, useState } from 'react'
import estilos from "./ItemListContainer.module.css"
import axios from "axios"



export default function ItemListContainer({titulo}) {
  const url = "https://swapi.dev/api/starships/?page="
  const [Data, SetData] = useState([]);
  useEffect(()=>{
    axios.get(url + "1")
    .then(({data})=> console.log(data.results))
  }, [])

  return (
    <div className={estilos.div}>
      <h1>{titulo}</h1>
    </div>
  )
}

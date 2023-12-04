import React from 'react'
import loader from "./loader.css"

export default function Loder({isLoading = true}) {


  return (
    <>
        <div style={{
            width: "100px",
            height: "100px",
            
        }}>
            {isLoading ? "loading..." : "not loading"}
        </div>
    </>
  )
}

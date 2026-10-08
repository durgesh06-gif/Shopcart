import { useEffect, useReducer, useState } from "react"

export default function Product(){
   const [Product,setProduct]= useState()
   const fetchPro= async()=>{
try {
    const response=await fetch("https://dummyjson.com/products")
    const data=await response.json()
    setProduct(data.products)
} catch (error) {
    alert('somthing went wrong')
}
   }
   useEffect(()=>{
    fetchPro()
},[])
con
useReducer(cahnge,)
    return(
        <>
     {Product ?<>
     <div class="row row-cols-1 row-cols-md-4 g-4">{Product.map((p)=> <div class="col">
    <div class="card">
      <img src={p.images} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{p.title}</h5>
        <p class="card-text">{p.description}</p>
      </div>
    </div>
  </div>)}
</div>
     </>:<p>.....loading</p>}
        </>
    )
}
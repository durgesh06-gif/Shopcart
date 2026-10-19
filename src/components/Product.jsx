import { useEffect, useReducer, useState } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"

export default function Product(){
const [Product,setProduct]= useState()
  const [param,setpram]=useSearchParams()
  console.log(param.get('category'));
    
   const fetchPro= async()=>{
try {
    const response=await fetch("https://fakestoreapi.com/products")
    const data=await response.json()
    setProduct(data)
} catch (error) {
    alert('somthing went wrong') 
}
   }
   useEffect(()=>{
    fetchPro()
},[])

    return(
        <>
        <button className='btn-primary' onClick={()=>setpram({category:'electronics'})}>electronics</button>
        <button className='btn-primary' onClick={()=>setpram({category:'jewelery'})}>jewelery</button>
     {Product ?<>
     <div class="row row-cols-1 row-cols-md-4 g-4">{Product.filter(p=>param.get('category')?param.get('category')==p.category:true).map((p)=> <div class="col">
    <div class="card">
      <img src={p.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{p.id}{p.title}</h5>
        <p class="card-text">{p.description}</p>
        <p class="card-text">{p.category}</p>
        <Link class='blue' to={`/pro/de/${p.id}`}>view detail</Link>
      </div>
    </div>
  </div>)}
</div>
     </>:<p>.....loading</p>}
        </>
    )
}
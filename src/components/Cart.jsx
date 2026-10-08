
import React, { useEffect, useState } from "react";

 function Cart() {
  const[cart,setCart]=useState()
  const fetchcart=async()=>{
  try {
    const respon=await fetch('https://dummyjson.com/carts')
    const data=await respon.json()
    setCart(data.carts)
  } catch (error) {
    alert('somthing went wrong')
  }
  }
  useEffect(()=>{
    fetchcart()
  },[])
  return (
     <>
     {cart ?<>
     <div class="row row-cols-1 row-cols-md-4 g-4">{cart.map((c,i)=> <div class="col">
       <div className="col" key={`${c.id}-${i}`}/> 
    <div class="card">
      <img src={c.thumbnail} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{c.title}{i}</h5>
        <p class="card-text">{c.price}{i}</p>
      </div>
    </div>
  </div>)}
</div>
     </>:<p>.....loading</p>}
        </>
  );
}
export default Cart
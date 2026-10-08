import React, { useEffect, useState } from 'react'

export default function Recipes() {
    const [recipes, setRecipes] =useState([]);
    const  fetchrep=async()=>{
        try{
const response = await fetch('https://dummyjson.com/recipes');
console.log(response);
const data=await response.json()
console.log(data);
setRecipes(data.recipes)

    }catch(err){
        console.log(err);
        alert('something went wrong');
    }
}

useEffect(()=>{
    fetchrep()
},[])
  return (
    <div> 
        {recipes?<>
         {recipes.map((r)=><><p>{r.name}</p>
        {r.ingredients.map(i=><li>{i}</li>)}
        <img src={r.image} width={"20%"}></img>
        </>)}
         
        
         </>:<p>loading...</p>}
    </div>
  )
}

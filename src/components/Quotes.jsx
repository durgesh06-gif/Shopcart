import React, { useEffect, useState } from 'react'

function Quotes() {
    const[quote,setQuote]=useState()
    const fetchQuote=async()=>{
        try {
            const response=await fetch('https://dummyjson.com/quotes')
            const data=response.json()
            setQuote(data.quotes)
        } catch (error) {
          alert('something went wrong')  
        }
    }
    useEffect(()=>{
        fetchQuote()
    },[])
  return (
   <>
     {quote ?<>
     <div class="row row-cols-1 row-cols-md-4 g-4">{quote.map((q,)=> <div class="col">
    <div class="card">
      <div class="card-body">
        {/* <h5 class="card-title">{q.id}</h5> */}
        <p class="card-text">{q.quote}</p>
        <p class="card-text">{q.author}</p>
      </div>
    </div>
  </div>)}
</div>
     </>:<p>.....loading</p>}
           </>



  )
}
export default Quotes;
import React, { useReducer } from 'react'

 function Reducer() {
    const red=(old,a)=>{
        switch (a.typeof){
            case 'inc':
                return old+a.payload
            case 'dec':
                return old-a.payload
            case 'mul':
                return old*a.payload
            case 'div':
                return old/a.pay
        }
        
    }
    const[count,dis]=useReducer(red,0)
  
  return (
    <div>Reducer
        <h1>{count}</h1>
        <button onClick={()=>dis({typeof:'inc', payload:1})}>increment</button>
        <button onClick={()=>dis({typeof:'dec', payload:1})}>decrrement</button>
        <button onClick={()=>dis({typeof:'mul', payload:3})}>multiple</button>
          <button onClick={()=>dis({typeof:'div', pay:3})}>divider</button>
    </div>
  )
}
export default Reducer

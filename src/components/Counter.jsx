import React, { useEffect, useState } from "react";

function Counter() {
    // let count=0;
    //     const increment=()=>{
    //         count++;
    //         console.log(count);
//   }

const [count,setCount]=useState(0)
const [count1,setCount1]=useState(0)

if(count==1)
{
  throw new Error('count not found')
}
useEffect(()=>{
  console.log('useeffect hook');
  
},[count])

setTimeout(()=>{
  console.log(count);
},4000)

// return() =>{
// clearTimeout(time)
// };[count])


const increment=()=>{
    setCount(count+1)
}
const increments=()=>{
    setCount1(count1+1)
}


  return (
    <>
    <div>Counter</div>
    <h1>{count}</h1>
    <button onClick={increment}>increment</button>

    <div>Counter</div>
    <h1>{count1}</h1>
    <button onClick={increments}>increment</button>
    </>
  )
}

export default Counter 
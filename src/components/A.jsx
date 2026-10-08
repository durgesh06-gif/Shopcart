import React, { useState } from 'react'

function A() {
    const[msg,setMgs]=useState('Good Night')
  return (
    <div>A
        <h1>{msg}</h1>
      
    </div>
  )
}

export default A
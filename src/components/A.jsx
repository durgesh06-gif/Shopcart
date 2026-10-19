import React, { createContext, useState } from 'react'
import B from './B'

export const first=createContext()

function A() {

    const[msg,setMgs]=useState('hello word')
  return (
    <div>A
        <h1>{msg}</h1>
        <first.Provider value={{msg}}>
          <B/>
        </first.Provider>
           
    </div>
  )
}

export default A
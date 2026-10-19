import React, { useContext } from 'react'
import { first } from './A'

function D() {
  const {msg}=useContext(first)
  return (
    <div>D
         <h1>{msg}</h1>
    </div>
  )
}

export default D
import React, { useState } from 'react'

export default function State() {
    const [name,setName]=useState('')
    const change=()=>{
        setName('anisha')
    }

    const [sub,setSub]=useState(['html','css'])
    const [user,setUser]=useState({id:100,name:"anisha"})
  return (<>
    <div>State</div>
    {name&& <h1>student name is {name}</h1>}
    <h1>{name || "name not provi"}</h1>
    {name ? <p>well {name}</p>:<p>name not prov</p>}
    <h1>{name}</h1>
    <button onClick={change}>change</button>
    
    {
sub.map((s,i,)=><p key={i}>{s} {i} </p>)
    }
    {/* <h1>{sub}</h1> */}
    <button onClick={()=>{setSub([...sub,'java'])}}>add</button>
    {/* {
    user.map((s)=><p >{s}</p>)
    } */}
    <h1>{user.age} {user.id} {user.name}</h1>
    <button onClick={()=>{setUser({...user,age:12})}}>add age</button>
    </>
  )
}

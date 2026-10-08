import React, { useState } from 'react'
import Catger from './Catger'
import User from './User'

 function Propex() {
 const [user,setUser]=useState([
    {email:"user1@gmail,com",fname:"Nishant",lname:"Kumar"},
    {email:"user2@gmail,com",fname:"Rohit",lname:"Kumar"},
    {email:"user3@gmail,com",fname:"Ramesh",lname:"Kumar"},
    {email:"user4@gmail,com",fname:"Suresh",lname:"Kumar"},
    {email:"user5@gmail,com",fname:"Mahesh",lname:"Kumar"},
  ])
  return (
    <div>Propex
<Catger id={101} name={'pride'} cart={'cm'}/>
<Catger  id={102} name={'olmo'}  cart={'rcm'}/>
<Catger  id={103} name={'cubarce'}  cart={'cb'}/>

{
    user.map((u)=>(<User fname={u.fname} lname={u.lanme} email={u.email}/>))
}

    </div>
  )
}
export default Propex

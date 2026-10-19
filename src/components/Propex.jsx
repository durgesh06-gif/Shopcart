import React, { useState } from 'react';
import Catger from './Catger';
import User from './User';

function Propex() {
  const [user, setUser] = useState([
    { email: "user1@gmail.com", fname: "Nishant", lname: "Kumar" },
    { email: "user2@gmail.com", fname: "Rohit", lname: "Kumar" },
    { email: "user3@gmail.com", fname: "Ramesh", lname: "Kumar" },
    { email: "user4@gmail.com", fname: "Suresh", lname: "Kumar" },
    { email: "user5@gmail.com", fname: "Mahesh", lname: "Kumar" },
  ]);

  return (
    <div>
      <h3>Propex</h3>
      
     
      <Catger id={101} name={'pride'} cart={'cm'} />
      <Catger id={102} name={'olmo'} cart={'rcm'} />
      <Catger id={103} name={'cubarce'} cart={'cb'} />

      <hr />

  
      {user.map((u, index) => (
        <User 
          key={index} 
          fname={u.fname} 
          lname={u.lname} 
          email={u.email} 
        />
      ))}
    </div>
  );
}

export default Propex;

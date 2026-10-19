import React from 'react'

function User({ fname, lname, email }) {
  return (
    <div>
        <h4>User Profile</h4>
        <p>my name is: {fname}</p>
        <p>lastname: {lname}</p>
        <p>email: {email}</p>
    </div>
  )
}

export default User

import React, { useContext, useEffect } from "react"; 
import { LoginContext } from "../Logincontext"; 
import { useNavigate } from 'react-router-dom';

function Cart() { 
  const { auth } = useContext(LoginContext); 
  const nav = useNavigate(); 

  useEffect(() => { 
    if (!auth) {
      nav('/login'); 
    }
  }, [auth, nav]); // Added dependencies here

  // Prevent rendering the cart content if not authenticated
  if (!auth) {
    return null; 
  }

  return (
    <div>
      <h1>Your Cart</h1>
    </div>
  );
} 

export default Cart;

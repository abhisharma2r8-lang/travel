import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>


    <div className="nav">
  <h2>Travelista</h2>

  <ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/destination">Destination</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  
  </ul>
  
  <button>Login</button>
</div>
    
    
    </>
  )
}

export default Navbar
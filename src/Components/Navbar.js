import React from 'react'
import "./Navbar.css"
import Register from '../pages/Register'
import { NavLink } from 'react-router-dom'
export default function Navbar() {

  const userName=JSON.parse(localStorage.getItem("user"));

  return (
    <div className="navbar">
        <nav className="container" style={{marginTop:"40px"}}>
          <span   className="logo">Bookit.com</span>
        
          <div className="navItem">
            
              <NavLink to="/register" className="register">Register</NavLink>

             <NavLink to="/login" className="register">Login</NavLink>
          <div className="man">
           <img src="maan.png" className="manimg"/>
          <p>{userName.name}</p>
          </div>

          </div>
        
        </nav>
        

    </div>
  )
}

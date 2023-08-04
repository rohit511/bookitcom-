import React from 'react'
import { NavLink } from 'react-router-dom';
import './Login.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
  
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInput((prev => ({ ...prev, [event.target.name]: event.target.value })));

  }
  const Login=(event) => {
    event.preventDefault();
    const LoggedUser=JSON.parse(localStorage.getItem("user"));
    if(input.email===LoggedUser.email && input.password===LoggedUser.password){
    
      localStorage.setItem("Loggedin",true);

      navigate("/home")
    }
    else{
      Swal.fire({
        title: "fail",
        text: "Please Enter The Valid Credential",
        icon: "error",
        confirmButtonText: "Go Back",
      })
    }
  }
  return (
    <div className="Register">
      <img src="https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" />

      <form onSubmit={Login}>
        <h1 style={{color:"#003580"}}>SignIn To Account</h1>
        
        <div className="ctn">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={input.email}
            onChange={handleInputChange} />
        </div>
        <div className="ctn">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={input.password}
            onChange={handleInputChange} />
        </div >
        <NavLink to="/" className="registerbtn" onClick={Login}>Login</NavLink>
        <div>No account ?<NavLink to="/register" > Register</NavLink></div>

      </form>
    </div>
  )
}

export default Login;
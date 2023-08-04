import React from 'react';
import "./Register.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [input, setInput] = useState({
    name:"rohit",
    email:"",
    password:"",
  })
  const navigate = useNavigate();

  const handleInputChange=(event) => {
    setInput((prev=>({...prev,[event.target.name]:event.target.value})));

  }
// code for local storage
const handleSubmit =(event)=>{
  event.preventDefault();
  localStorage.setItem("user",JSON.stringify(input));
  navigate("/login");
}
 
  return (
    <div className="Register">
          <img src="https://images.unsplash.com/photo-1483401757487-2ced3fa77952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"/>

        <form onSubmit={handleSubmit}>
        <h1 style={{ color: "#003580" }}>Create An Account</h1>
            <div className="ctn">
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" value={input.name} 
            onChange={handleInputChange}
            id="name"/>
              </div>
              <div className="ctn">
            <label htmlFor="email">Email</label> 
          <input type="email" name="email" 
          value={input.email}
            onChange={handleInputChange}
            id="email"/>
            </div>
              <div className="ctn">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={input.password}
            onChange={handleInputChange}
            
            id="password"/>
            </div >
        <NavLink className="registerbtn" onClick={handleSubmit}> Register</NavLink>
              <div className='t'>Already have account ?<NavLink to="/login">Signin</NavLink></div>
            
        </form>
    </div>
  )
}

export default Register;
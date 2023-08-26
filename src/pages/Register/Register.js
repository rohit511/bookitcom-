import "./Register.css";

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [input, setInput] = useState({
    name: "rohit",
    email: "rathorerohit51112Gmail.com",
    password: "1234",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  // code for local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: "#003580" }}>Create An Account</h1>
        <div className="ctn">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            id="name"
          />
        </div>
        <div className="ctn">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            id="email"
          />
        </div>
        <div className="ctn">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            className="pass"
            id="password"
          />
        </div>
        <NavLink className="regbtn" onClick={handleSubmit}>
          {" "}
          Register
        </NavLink>
        <div className="t">
          Already have account ?
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            {" "}
            Signin
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;

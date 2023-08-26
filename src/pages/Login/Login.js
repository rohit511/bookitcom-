import "./Login.css";

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const Login = (event) => {
    event.preventDefault();

    const LoggedUser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === LoggedUser?.email &&
      input.password === LoggedUser?.password
    ) {
      localStorage.setItem("Loggedin", true);

      navigate("/");
    } else {
      Swal.fire({
        title: "fail",
        text: "Please Enter The Valid Credential",
        icon: "error",
        confirmButtonText: "Go Back",
      });
    }
  };
  return (
    <div className="Register">
      <form onSubmit={Login}>
        <h1 style={{ color: "#003580" }}>SignIn To Account</h1>

        <div className="ctn">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="ctn">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
          />
        </div>
        <NavLink to="/" className="regbtn" onClick={Login}>
          Login
        </NavLink>
        <div className="t">
          No account ?<NavLink to="/register"> Register</NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;

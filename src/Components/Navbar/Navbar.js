import "./Navbar.css";

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { useMediaQuery } from "@uidotdev/usehooks";
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const userName = JSON.parse(localStorage.getItem("user"));
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      {/* <div className="nav-cont">
        <nav>
          <div className="nav-head">
            <h1>Bookit.com</h1>
          </div>
          <div className="nav-content">
            <div>INR</div>
            <img
              src="https://img.icons8.com/color/48/india-circular.png"
              alt="india-circular"
            />
            <div className="avatar">
              {userName.name.charAt(0).toUpperCase()}
            </div>
            <button className="register1">Login</button>
            <button className="register1">Register</button>
          </div>
        </nav>
      </div> */}
      <header>
        <div>
          <h1>Bookit.com</h1>
        </div>
        <nav ref={navRef}>
          <a
            onClick={() => {
              navigate();
            }}
            className="contentava"
          >
            <div className="avatar">
              {userName.name.charAt(0).toUpperCase()}
            </div>
            <p style={{ color: "white" }}>
              {userName.name.charAt(0).toUpperCase() + userName.name.slice(1)}
            </p>
          </a>
          <a href="/#" className="remove">
            <img
              src="https://img.icons8.com/color/48/india-circular.png"
              alt="india-circular"
            />
            <p className="remove2">English</p>
          </a>
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            Stay
          </a>
          <a
            onClick={() => {
              navigate("/flite");
            }}
          >
            Flight
          </a>
          <a onClick={() => navigate("/previous")}>Prev</a>
          <a onClick={() => navigate("/register")}>Login</a>
          <a onClick={() => navigate("/login")}>Register</a>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

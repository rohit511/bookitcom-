import "./Feature.css";

import React from "react";
import { NavLink } from "react-router-dom";
const Feature = () => {
  return (
    <>
      <h1 className="feature-hea" style={{ textAlign: "center" }}>
        Trending cities
      </h1>
      <hr className="feature-hr" />

      <div className="featured">
        <NavLink to=".././flite">
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1555952238-7d76782b45f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>123 properties</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to=".././flite">
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1314&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>kolkata</h1>
              <h2>12 properties</h2>
            </div>
          </div>
        </NavLink>

        <NavLink to=".././flite">
          {" "}
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>533 properties</h2>
            </div>
          </div>
        </NavLink>
        <NavLink to=".././flite">
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Goa</h1>
              <h2>532 properties</h2>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Feature;

/* eslint-disable no-unused-vars */
import "./Hotel.css";

import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Home from "../Home/Home";
import List from "../List/List";

export default function Hotel() {
  return (
    <>
      <div className="xi">
        <Navbar />
      </div>

      <List />

      <Footer />
    </>
  );
}

import React from 'react'
import Home from './Home'
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import "./Hotel.css"
import List from './List';

export default function Hotel() {

  return (
    <>
      <div>

        <Navbar />
        <div className="heade-colr">

        <div className='header'>
          <div className='headeer-container'>
            <div className='headerList'>
              <div className='header-list-item'>
                <NavLink to="/home" style={{ textDecoration: 'none' }}>
                  <div className='btn'>
                    <img src="./bed.png" />
                    <p style={{ textDecoration: 'none', color: 'white' }}>Stay</p>
                  </div>
                </NavLink>
                <NavLink to="/flite" style={{ textDecoration: 'none' }}>
                  <div className='btn'>
                    <img src="./plane.png" />
                    <p style={{ textDecoration: 'none', color: 'white' }}>Flight</p>
                  </div>
                </NavLink>
                <NavLink to="/previous" style={{ textDecoration: 'none' }}>
                  <div className='btn'>
                    <img src="./attraction.png" />
                    <p style={{ textDecoration: 'none', color: 'white' }}>Previousbooking</p>

                  </div>
                </NavLink>
                <NavLink to="/meal" className='btn' style={{ textDecoration: 'none' }}>
                  <img src="./meal.png" />
                  <p style={{ textDecoration: 'none', color: 'white' }}>Meal</p>
                </NavLink>

              </div>

            </div>
          </div>



        </div>








      </div>



    </div >


      <List/>

      <Footer/>











</>

  )
}

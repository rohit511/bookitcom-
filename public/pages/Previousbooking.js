import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./previous.css"



export default function Previousbooking() {
    const [data, setData] = useState([]);
    const[load,setLoad]=useState(true);
    setTimeout(() => {
        z()
    });
    const z = async function () {
        const responce = await fetch(`https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels`);
        const dat = await responce.json();
        setData(dat);
        setLoad(false);
    }
    return (
        <div>
            <Navbar />
            <Header />

            {load ? <div className="loader">
                <div className="loader-inner">
                    <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                    </div>
                    <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                    </div>
                    <div className="loader-line-wrap">
                        <div classname="loader-line"></div>
                    </div>
                    <div classame="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                        <div class="loader-line"></div>
                    </div>
                </div></div>: 
                <div className="prev">
                    <h1>Our Previous Booking</h1>
                {
                    
                    data.map((ele) => {
                        return (
                            <div className="hotel-section">
                                <div className="location1">
                                    <h1 style={{ padding: "6px", fontSize: "30px" }}>City:</h1>
                                    <div style={{ padding: "8px" }}>

                                        {ele.city}</div>
                                    <h1 style={{ padding: "6px", fontSize: "30px" }}>Hotel</h1>
                                    <div style={{ padding: "8px" }}>{ele.hotel_name}</div>
                                    <h1 style={{ padding: "6px", fontSize: "30px" }}>rating</h1>
                                    <div style={{ padding: "8px" }}>{ele.rating}/10</div>
                                </div>

                                <div className="check">
                                    <h1 style={{ padding: "6px", fontSize: "30px" }}>Check_in</h1>
                                    <div style={{ padding: "8px" }}>{ele.check_in}</div>
                                    <h1 style={{ padding: "6px", fontSize: "30px" }}>Check_out</h1>
                                    <div style={{ padding: "8px" }}>{ele.check_out}</div>
                                </div>

                                {/* <div className="location1">
                                    <h1 style={{ padding: "8px", fontSize: "30px" }}>Price:</h1>
                                <div>{ele.room_type}</div>
                                    <h1 style={{ padding: "8px", fontSize: "30px" }}>Room:</h1>
                                <div>{ele.price_per_night}</div>
                                    <h1 style={{ padding: "8px", fontSize: "30px" }}>Guest:</h1>
                                <div>{ele.guests}</div>

                                </div> */}

                                <div className="location1">
                                    <h1 style={{ padding: "6px", fontSize: "30px" }}>Price:</h1>
                                    <div style={{ padding: "8px" }}>

                                        {ele.room_type}</div>
                                    <h1 style={{ padding: "6px", fontSize: "30px" }}>Room:</h1>
                                    <div style={{ padding: "8px" }}>{ele.price_per_night}</div>
                                    <h1 style={{ padding: "6px", fontSize: "30px" }}>Guest</h1>
                                    <div style={{ padding: "8px" }}>{ele.guests}</div>
                                </div>

                                    
                                <div className='happy customer'>
                                    <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                                    <NavLink to="/home"><button style={{ fontWeight: 'bolder' }}>Book</button></NavLink>
                                </div>





                            </div>
                        )

                    })
                }
            </div>}

   
            
            
            <Footer />
        </div>
    )
}

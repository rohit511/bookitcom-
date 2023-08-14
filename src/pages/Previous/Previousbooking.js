import "./previous.css";

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

export default function Previousbooking() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    z();
  });
  const z = async function () {
    const responce = await fetch(
      `https://content.newtonschool.co/v1/pr/64ae970a208f31bb8bd43c93/hotelsList?limit=10&page=1`,
    );
    const dat = await responce.json();
    setData(dat);
    setLoad(false);
  };
  return (
    <div>
      <Navbar />
      <Header />

      {load ? (
        <div className="loader">
          <div className="loader-inner">
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="prev">
          <h1 style={{ marginBottom: "70px" }}>Our Previous Booking</h1>
          <div className="prev-hotel">
            {data.map((ele) => {
              return (
                <>
                  <div
                    className="prev-hotelcard12"
                    style={{ overflowX: "hidden" }}
                  >
                    <div className="prev-image">
                      <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className="prev-hotel-details">
                      <div className="prev-details">
                        <div className="prev-heda">City</div>
                        <div> {ele.city}</div>
                      </div>

                      <div className="prev-details">
                        <div className="prev-heda">hotelName</div>
                        <div>{ele.hotel_name}</div>
                      </div>
                      <div className="prev-details">
                        <div className="prev-heda">Checkin</div>
                        <div>{ele.check_in}</div>
                      </div>
                      <div className="prev-details">
                        <div className="prev-heda">CheckOut</div>
                        <div>{ele.check_out}</div>
                      </div>
                      <div className="prev-details">
                        <div className="prev-heda">Room Type</div>
                        <div>{ele.room_type}</div>
                      </div>
                      <div className="prev-details">
                        <div className="prev-heda">Rating</div>
                        <div>{ele.rating}</div>
                      </div>
                      <div className="prev-details">
                        <div className="prev-heda">Guest</div>
                        <div>{ele.guests}</div>
                      </div>
                      <div className="prev-details">
                        <div className="prev-heda">Price per night</div>
                        <div>₹{ele.price_per_night}</div>
                      </div>
                      <NavLink to="/">
                        <button className="btn-book123">Book Now</button>
                      </NavLink>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

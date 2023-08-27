/* eslint-disable react/prop-types */
import "./Chechkout.css";

import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Pay = () => {
  Swal.fire({
    title: "Success",
    text: "Booking conformed",
    icon: "success",
    confirmButtonText: "Book MORE",
  });
};

function Chechkout({ price, date, options, destination }) {
  const [otp, setOtp] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [year, setYear] = useState("");

  return (
    <>
      <div className="check-out">
        <div className="chec-nav1">
          <div className="checkout-head">
            <h1>Bookit.com</h1>
          </div>
          <div className="checkout-nav">
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/flite" className="link">
              Flight
            </NavLink>
            <NavLink to="/previous" className="link">
              Previous
            </NavLink>
          </div>
        </div>

        <hr className="hrid" />
        <div className="checkout-summary">
          <div className="checkout-details">
            <h1>Your Details</h1>
            <p>Destination: {destination}</p>
            <hr />
            <p>price: {price}</p>
            <hr />
            <p>
              date:
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy",
              )}`}
            </p>
            <hr />
            <p>
              person:{options.adult} ,child:{options.children}
            </p>
            <hr />

            <p>room:{options.room}</p>
          </div>
          <div className="checkout-price1">
            <h1>Payment</h1>
            <hr />
            <input
              type="text"
              placeholder="name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="number"
              onChange={(event) => setNumber(event.target.value)}
              placeholder="enter card number "
            />
            <input
              type="year"
              onChange={(event) => setYear(event.target.value)}
              placeholder="enter expiry year"
            />
            {name == "" ? (
              <div style={{ color: "red" }}>
                <img
                  src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
                  alt="cross-mark-emoji"
                  style={{ height: "20px", width: "20px" }}
                />{" "}
                Please Type the name
              </div>
            ) : number.length < 15 ? (
              <div style={{ color: "red" }}>
                <img
                  src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
                  alt="cross-mark-emoji"
                  style={{ height: "20px", width: "20px" }}
                />{" "}
                Please Type the 16 digit card number
              </div>
            ) : year.length != 4 ? (
              <div style={{ color: "red" }}>
                <img
                  src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
                  alt="cross-mark-emoji"
                  style={{ height: "20px", width: "20px" }}
                />{" "}
                Please Type the Year
              </div>
            ) : null}

            <p
              onClick={() => {
                alert(`the otp is ${4567}`);
              }}
              className="otp"
            >
              Get otp <br />
              <button className="get-otp">get otp</button>
            </p>
            <input
              type="number"
              value={otp}
              onChange={(event) => {
                setOtp(event.target.value);
              }}
              placeholder="enter the otp"
            />

            {/* <NavLink to="/home" onClick={Pay} disabled>Pay</NavLink> */}

            {otp.length === 4 ? (
              otp === "4567" && otp.length == 4 ? (
                <NavLink
                  to="/home"
                  className="Final-pay"
                  onClick={Pay}
                  style={{ textDecoration: "none", margin: "2px" }}
                >
                  Pay
                </NavLink>
              ) : (
                <div style={{ color: "red" }}>
                  <img
                    src="https://img.icons8.com/emoji/48/cross-mark-emoji.png"
                    alt="cross-mark-emoji"
                    style={{ height: "20px", width: "20px" }}
                  />{" "}
                  Please Type coorect otp
                </div>
              )
            ) : null}
            <div className="t"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chechkout;

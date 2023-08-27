import "./Billout.css";

import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "../../Components/Navbar/Navbar";
const BillOut = () => {
  const location = useLocation();
  const [otp, setOtp] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();
  const Pay = () => {
    Swal.fire({
      title: "Success",
      text: "Booking conformed",
      icon: "success",
      confirmButtonText: "Book MORE",
    });
    navigate("/");
  };
  return (
    <div>
      <div className="flite-nav">
        <Navbar className="Billit" />
      </div>

      <div className="content" style={{ height: "1px" }}></div>
      {console.log(location)}
      <div className="ticket-book">
        <div className="ticketdetails">
          <h1>Ticket Details</h1>
          <p>
            <strong>From</strong>
            {location.state.val.from}
          </p>
          <p>
            <strong>To</strong>
            {location.state.val.to}
          </p>
          <p>
            <strong>Price</strong>
            {location.state.val.price}
          </p>
          <p>
            <strong>Duration</strong>
            {location.state.val.duration}
          </p>
          <p>
            <strong>Leaving time</strong>
            {location.state.val.departure}
          </p>
          <p>
            <strong>Airline Name</strong>
            {location.state.val.airline}
          </p>
        </div>
        <div className="Payment">
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
            <p>Get otp </p>
            <button className="otp-b">get otp</button>
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
                to="/"
                onClick={Pay}
                className="otp-b"
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
  );
};

export default BillOut;

import "./Chechkout.css";

import { format } from "date-fns";
import PropTypes from "prop-types";
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
  return (
    <div className="checkout">
      <div className="chec-nav">
        <div className="checkout-head">
          <h1>Bookit.com</h1>
        </div>
        <div className="checkout-nav">
          <NavLink to="/home" className="link">
            home
          </NavLink>
          <NavLink to="/flite" className="link">
            Flight
          </NavLink>
          <NavLink to="/previous" className="link">
            previous
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="checkout-summary">
        <div className="checkout-details">
          <h1> Check your Details</h1>
          <p>Destination:{destination}</p>
          <hr />
          <p>price:{price}</p>
          <hr />
          <p>
            date:
            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy",
            )}`}
          </p>
          <hr />
          <p>person:{options.adult}</p>
          <hr />
          <p>child:{options.children}</p>
          <hr />
          <p>room:{options.room}</p>
          <hr />
        </div>
        <div className="checkout-price">
          <h1>Payment</h1>
          <hr />
          <input type="text" placeholder="name" />
          <input type="number" placeholder="enter card number" />
          <input type="year" placeholder="enter expiry year" />
          <input type="number" placeholder="enter cvv number" />
          <p
            onClick={() => {
              alert(`the otp is ${4567}`);
            }}
          >
            get otp <button>get otp</button>
          </p>
          <input
            type="number"
            value={otp}
            onChange={(event) => {
              setOtp(event.target.value);
            }}
          />
          {/* <NavLink to="/home" onClick={Pay} disabled>Pay</NavLink> */}

          {otp.length === 4 ? (
            otp === "4567" && otp.length == 4 ? (
              <NavLink to="/home" onClick={Pay}>
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
        </div>
      </div>
    </div>
  );
}

export default Chechkout;

Chechkout.propTypes = {
  price: PropTypes.number,
  date: PropTypes.array,
  options: PropTypes.object,
  destination: PropTypes.string,
};

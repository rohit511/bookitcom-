import "./Header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useClickAway } from "@uidotdev/usehooks";
import { format } from "date-fns";
import React from "react";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";

import Crousel from "../Crousel";
import Feature from "../Feature/Feature";

function Header() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("Delhi");
  const [h, setH] = useState("0px");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  useEffect(() => {
    if (openDate) {
      setH("400px");
    } else {
      setH("0px");
    }
  }, [openDate]);
  const SearchHotel = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const Modalref = useClickAway(() => {
    setOpenDate(false);
  });
  return (
    <>
      {/* <div className="heade-colr">
        <div style={{ overflowX: "hidden" }} className="header">
          <div className="headeer-container">
            <div className="headerList" style={{ overflowX: "hidden" }}>
              <div className="header-list-item">
                <NavLink to="/home" style={{ textDecoration: "none" }}>
                  <div className="btn">
                    <img src="./bed.png" />
                    <p style={{ textDecoration: "none", color: "white" }}>
                      Stay
                    </p>
                  </div>
                </NavLink>
                <NavLink to="/flite" style={{ textDecoration: "none" }}>
                  <div className="btn">
                    <img src="./plane.png" />
                    <p style={{ textDecoration: "none", color: "white" }}>
                      Flight
                    </p>
                  </div>
                </NavLink>
                <NavLink to="/previous" style={{ textDecoration: "none" }}>
                  <div className="btn">
                    <img src="./attraction.png" />
                    <p style={{ textDecoration: "none", color: "white" }}>
                      Previousbooking
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="content">
        <h1 className="header-title">Find your next stay</h1>
        <p className="headerdesk">
          The journey of a thousand miles begins with a single step.
        </p>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <img src="https://img.icons8.com/ios/30/bed.png" alt="bed" />
            <input
              type="text"
              placeholder="location"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
            <div className="vl"></div>
          </div>
          <hr className="hri" />

          <div className="headerSearchItem">
            <img
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-calendar-contact-flatart-icons-outline-flatarticons.png"
              alt="external-calendar-contact-flatart-icons-outline-flatarticons"
              style={{ position: "relative" }}
              onClick={() => setOpenDate(!openDate)}
            />

            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy",
            )}`}</span>
            <div ref={Modalref}>
              {openDate && (
                <div
                  className="date"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    position: "fixed",
                    zIndex: "1000",
                    bottom: "0px",
                    left: "0px",
                    width: "100%",
                    height: h,
                    maxHeight: "400px",
                    overflowY: "scroll",
                    backgroundColor: "white",
                    transition: "height 0.5s ease-in-out",
                  }}
                >
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                </div>
              )}
            </div>

            <div className="vl"></div>
          </div>
          <hr className="hri" />

          <div className="headerSearchItem">
            <img src="man.png" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>

            {openOptions && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.adult <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.children <= 0}
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {options.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={options.room <= 1}
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="btn-yelloe" onClick={SearchHotel}>
            Search
          </div>
        </div>
      </div>
      <div className="crousel-div">
        <h2 className="crousel-head" style={{ textAlign: "center" }}>
          Welcome to India
        </h2>
        <p className="crouseltagline" style={{ textAlign: "center" }}>
          India tour in few second
        </p>
        <Crousel />
      </div>
      <Feature />
      {/* <Destination /> */}
    </>
  );
}
export default Header;

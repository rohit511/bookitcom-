/* eslint-disable no-unused-vars */
import "./list.css";

import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import SearchItem from "../../Components/SearchItem";
import Chechkout from "../Checkout/Checkout";

export default function List() {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);

  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [bill, setBill] = useState(false);

  const Book = () => {
    setBill((prev) => !prev);
  };

  {
    console.log(destination, date, options);
  }

  return (
    <>
      {/* <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>

            <div className="listResult">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
        </div> */}

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy",
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <div className="listResultdiv">
              <div className="searchItem">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                  alt=""
                  className="siImg"
                />
                <div className="siDesc">
                  <h1 className="siTitle">Tower Street Apartments 1</h1>
                  <span className="siDistance">500m from center</span>
                  <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                  </span>
                  <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                  </span>
                  <span className="siCancelOp">Free cancellation </span>
                  <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                  </span>
                </div>
                <div className="siDetails">
                  <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                  </div>
                  <div className="siDetailTexts">
                    <span className="siPrice">₹1223</span>
                    <button className="siCheckButton" onClick={Book}>
                      Pay And book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="searchItem">
                <img
                  src="https://media.istockphoto.com/id/1250509765/photo/enjoying-a-leisure-holiday.jpg?s=612x612&w=0&k=20&c=QT9vlSIy7EbgT5b2nYXhdZLpUe6h6A3PYuIwa1I54Fk="
                  alt=""
                  className="siImg"
                />
                <div className="siDesc">
                  <h1 className="siTitle">Tower Street Apartments 2</h1>
                  <span className="siDistance">500m from center</span>
                  <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                  </span>
                  <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                  </span>
                  <span className="siCancelOp">Free cancellation </span>
                  <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                  </span>
                </div>
                <div className="siDetails">
                  <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                  </div>
                  <div className="siDetailTexts">
                    <span className="siPrice">₹1223</span>
                    <button className="siCheckButton" onClick={Book}>
                      Pay And book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="searchItem">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14YUaBxYDOEBhjykhkdYPKXt6-SqdTpsgikJlZPJJ&s"
                  alt=""
                  className="siImg"
                />
                <div className="siDesc">
                  <h1 className="siTitle">Tower Street Apartments</h1>
                  <span className="siDistance">500m from center</span>
                  <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                  </span>
                  <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                  </span>
                  <span className="siCancelOp">Free cancellation </span>
                  <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                  </span>
                </div>
                <div className="siDetails">
                  <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                  </div>
                  <div className="siDetailTexts">
                    <span className="siPrice">₹1223</span>
                    <button className="siCheckButton" onClick={Book}>
                      Pay And book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="searchItem">
                <img
                  alt=""
                  src="https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc="
                  className="siImg"
                />
                <div className="siDesc">
                  <h1 className="siTitle">Tower Street Apartments 3</h1>
                  <span className="siDistance">500m from center</span>
                  <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                  </span>
                  <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                  </span>
                  <span className="siCancelOp">Free cancellation </span>
                  <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                  </span>
                </div>
                <div className="siDetails">
                  <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                  </div>
                  <div className="siDetailTexts">
                    <span className="siPrice">₹1223</span>
                    <button className="siCheckButton" onClick={Book}>
                      Pay And book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="searchItem">
                <img
                  src="https://media.istockphoto.com/id/1059344876/photo/holidays-tourist-relaxing-in-luxury-beach-hotel-near-luxurious-swimming-pool.jpg?s=612x612&w=0&k=20&c=2xbmuXKWs7PCzXZ-_6UdKLEzPfYHG2MZEH6-G5ca2so="
                  alt=""
                  className="siImg"
                />
                <div className="siDesc">
                  <h1 className="siTitle">Tower Street Apartments 4</h1>
                  <span className="siDistance">500m from center</span>
                  <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                  </span>
                  <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                  </span>
                  <span className="siCancelOp">Free cancellation </span>
                  <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                  </span>
                </div>
                <div className="siDetails">
                  <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                  </div>
                  <div className="siDetailTexts">
                    <span className="siPrice">₹1223</span>
                    <button className="siCheckButton" onClick={Book}>
                      Pay And book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="searchItem">
                <img
                  src="https://media.istockphoto.com/id/1158522448/photo/modern-luxury-house-with-infinity-pool-at-dawn.jpg?s=612x612&w=0&k=20&c=__GNPV2C8qDcwETlpKT0GpOsDVNZJsA-Z6xYbtFDXa4="
                  alt=""
                  className="siImg"
                />
                <div className="siDesc">
                  <h1 className="siTitle">Tower Street Apartments 5</h1>
                  <span className="siDistance">500m from center</span>
                  <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                  </span>
                  <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                  </span>
                  <span className="siCancelOp">Free cancellation </span>
                  <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                  </span>
                </div>
                <div className="siDetails">
                  <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                  </div>
                  <div className="siDetailTexts">
                    <span className="siPrice">₹1223</span>
                    <button className="siCheckButton" onClick={Book}>
                      Pay And book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="media-block">
        <h1>Book your hotel</h1>
        <div className="media-card">
          <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <div className="media-cotbox">
            <p>500m from center</p>
            <p style={{ color: "white" }} className="media-rating">
              8
            </p>
          </div>
          <strong className="media-cancel">Fully Aircondition</strong>
          <p> • 1 bathroom • 21m² 1 full bed</p>
          <em className="media-cancel">Free cancellation</em>
          <p className="media-cancel">You can cancel later.</p>
          <p>
            <strong>price: </strong>₹1223
          </p>
          <button
            style={{ margin: "10px 0" }}
            className="siCheckButton"
            onClick={Book}
          >
            Pay And book Now
          </button>
        </div>
        <div className="media-card">
          <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <div className="media-cotbox">
            <p>510m from center</p>
            <p style={{ color: "white" }} className="media-rating">
              8.3
            </p>
          </div>
          <strong className="media-cancel">Fully Aircondition</strong>
          <p> • 1 bathroom • 21m² 2 full bed</p>
          <em className="media-cancel">Free cancellation</em>
          <p className="media-cancel">You can cancel later.</p>
          <p>
            <strong>price: </strong>₹1223
          </p>
          <button
            style={{ margin: "10px 0" }}
            className="siCheckButton"
            onClick={Book}
          >
            Pay And book Now
          </button>
        </div>
        <div className="media-card">
          <img src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <div className="media-cotbox">
            <p>500m from center</p>
            <p style={{ color: "white" }} className="media-rating">
              8.8
            </p>
          </div>
          <strong className="media-cancel">Fully Aircondition</strong>
          <p> • 1 bathroom • 21m² 1 full bed</p>
          <em className="media-cancel">Free cancellation</em>
          <p className="media-cancel">You can cancel later.</p>
          <p>
            <strong>price: </strong>₹1223
          </p>
          <button
            style={{ margin: "10px 0" }}
            className="siCheckButton"
            onClick={Book}
          >
            Pay And book Now
          </button>
        </div>
        <div className="media-card">
          <img src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <div className="media-cotbox">
            <p>500m from center</p>
            <p style={{ color: "white" }} className="media-rating">
              7.4
            </p>
          </div>
          <strong className="media-cancel">Fully Aircondition</strong>
          <p> • 1 bathroom • 21m² 3 full bed</p>
          <em className="media-cancel">Free cancellation</em>
          <p className="media-cancel">You can cancel later.</p>
          <p>
            <strong>price: </strong>₹1223
          </p>
          <button
            style={{ margin: "10px 0" }}
            className="siCheckButton"
            onClick={Book}
          >
            Pay And book Now
          </button>
        </div>
        <div className="media-card">
          <img src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
          <div className="media-cotbox">
            <p>500m from center</p>
            <p style={{ color: "white" }} className="media-rating">
              8.3
            </p>
          </div>
          <strong className="media-cancel">Fully Aircondition</strong>
          <p> • 1 bathroom • 21m² 1 full bed</p>
          <em className="media-cancel">Free cancellation</em>
          <p className="media-cancel">You can cancel later.</p>
          <p>
            <strong>price: </strong>₹1223
          </p>
          <button
            style={{ margin: "10px 0" }}
            className="siCheckButton"
            onClick={Book}
          >
            Pay And book Now
          </button>
        </div>
      </div>
      {bill ? (
        <Chechkout
          bill={bill}
          destination={destination}
          date={date}
          price={1223}
          options={options}
        />
      ) : null}
    </>
  );
}

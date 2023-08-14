/* eslint-disable no-unused-vars */
import "./Flite.css";
import "react-datepicker/dist/react-datepicker.css";

import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
// const Bill = ({ yo }) => {
//   return (
//     <div className="popup">
//       <p>{yo.from}</p>
//       <p>{yo.to}</p>
//       <p>{yo.price}</p>
//       <button className="close-btn" onClick={() => {}}>
//         close button
//       </button>
//     </div>
//   );
// };

const Flite = () => {
  const [date] = useState(new Date());
  const [flight, setflight] = useState([]);
  const [record, setRecord] = useState([]);
  const [book, setBook] = useState(false);
  const [x, setx] = useState(false);
  // const[yo,setYo]=useState({
  //     from:"",
  //     to:"",
  //     price:"",

  // })
  const [from, setfrom] = useState("");

  const y = new Date();
  const [val, setVal] = useState({
    from: "",
    to: "",
    departure: date,
  });

  const hi = (event) => {
    setVal((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setVal((prev) => ({ ...prev, departure: date }));
  };

  const Submitti = (event) => {
    event.preventDefault();
    alert("done");
  };

  // const Bookit=()=>{
  //     navigate('../bill',{state:{val}})
  // }
  useEffect(() => {
    async function y() {
      const responce = await fetch(
        "https://content.newtonschool.co/v1/pr/64ae94ad0a8068595eb03b01/flightsList?limit=10&page=1",
      );
      const flig = await responce.json();
      setflight(flig);
      setRecord(flig);
      console.log(flig);
    }

    y();
  }, []);

  return (
    <>
      <div className="flite-nav">
        <Navbar />
      </div>

      <div className="content">
        <h1 className="header-title">Find your next Flight</h1>
        <p className="headerdesk">
          The journey of a thousand miles begins with a single step. <br />
          Lets travel with better experience
        </p>
      </div>

      <h1
        style={{
          margin: "5% 10%",
          width: "80%",
        }}
      >
        Trending cities
      </h1>
      <div>
        <div className="flight-book">
          <h1 style={{ margin: "2% 0%", width: "80%" }}>
            All flight shown here run daily
          </h1>

          <div className="flight">
            {record.map((ele) => {
              return (
                <>
                  <div className="fligth-option">
                    <div className="fligth-image">
                      <img src="https://images.unsplash.com/photo-1483375801503-374c5f660610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className="fligth-detailsts">
                      <div className="flight-conten">
                        <div className="fligth-details">
                          <div style={{ color: "black", fontWeight: "bold" }}>
                            From✈️
                          </div>

                          <div> {ele.from}</div>
                        </div>

                        <div className="flight-wing">
                          <div className="fligth-details ">
                            <div style={{ color: "black", fontWeight: "bold" }}>
                              To✈️
                            </div>
                            <div>{ele.to}</div>
                          </div>
                          <div className="fligth-details">
                            <div style={{ color: "black", fontWeight: "bold" }}>
                              AirlineName✈️
                            </div>
                            <div>{ele.airlineName}</div>
                          </div>
                          <div className="fligth-details">
                            <div style={{ color: "black", fontWeight: "bold" }}>
                              DepartureTime✈️
                            </div>
                            <div>{ele.departure.departureTime}</div>
                          </div>
                          <div className="fligth-details">
                            <div style={{ color: "black", fontWeight: "bold" }}>
                              Return✈️
                            </div>
                            <div>{ele.return.returnTime}</div>
                          </div>
                          <div className="fligth-details">
                            <div style={{ color: "black", fontWeight: "bold" }}>
                              Via✈️
                            </div>
                            <div>{ele.via}</div>
                          </div>
                          <div className="fligth-details">
                            <div style={{ color: "black", fontWeight: "bold" }}>
                              Duration
                            </div>
                            <div>{ele.duration}</div>
                          </div>
                          <div className="fligth-details">
                            <div style={{ color: "black", fontWeight: "bold" }}>
                              Price
                            </div>
                            <div>₹{ele.price}</div>
                          </div>
                          <button
                            className="btn-book"
                            onClick={() => {
                              // setVal(val.from=ele.from);
                              // setVal(val.to=ele.to);
                              // Bookit();

                              Swal.fire({
                                title: " your flight ticket details",
                                html: `<div>from      :    ${ele.from}</div>\n
                                                                 <div>to   :   ${ele.to}</div>\n
                                                            <div>return   :   ${ele.return.returnTime}</div>\n
                                                            <div>via   :   ${ele.via}</div>\n
                                                            <div>duration   :   ${ele.duration}</div>\n
                                                            <div>departure   :   ${ele.departure.departureTime}</div>\n
                                                            <div>airline      :   ${ele.airlineName}</div>\n
                                                            <div>price  :   ₹${ele.price}</div>\n
                                                            
                                                           
                                                            
                                                            

                                                            
                                                            
                                                            
                                                            `,

                                icon: "info",
                                showCancelButton: true,
                                confirmButtonText: `flight price ₹${ele.price}`,
                              }).then(function (result) {
                                if (result.value) {
                                  Swal.fire(
                                    "Bokked!",
                                    `Your flight booked.₹ ${ele.price}
                                                                   
                                                                    `,
                                    "success",
                                  );
                                }
                              });
                            }}
                          >
                            Book{" "}
                          </button>
                        </div>
                      </div>

                      <div className="flight-wing-image">
                        <img src="https://images.unsplash.com/photo-1547032440-08740e6f499e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpciUyMGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Flite;

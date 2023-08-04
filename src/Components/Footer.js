import "./Footer.css";
import React from "react"
import { useState } from "react";
import Swal from 'sweetalert2';
const Footer = () => {
    const [x, setX] = useState(-1);
    

    const query=(event)=>{
        setX(event.target.value);
            }
    const ans=()=>{
        if(x.length<=5||x==-1){
            Swal.fire({
                title: "fail",
                text: "Please Enter The Valid Query",
                icon: "error",
                confirmButtonText: "Go Back",
            })
        }
        else{

        
        Swal.fire({
            title: "Success",
            text: "Your Query Will Be Answered Soon",
            icon: "success",
            confirmButtonText: "OK",
        })
    }
       

            
        
    }
    return (
        <>
            <div className="footerBorder" style={{ overflowX: "hidden" } }>
                <h2>Save time, save money!</h2>
                <p style={{ background:"#022856"}}>Tell Your Query To Us We Will Answer Shortly</p>
                
                <div className="query" style={{overflowX:"hidden"}}>
                    <input type="text" onChange={query}/>
                    <button type="submit" name="query" onClick={ans}>Query
                    </button>
                </div>
        </div>
        <div className="t">
        <div className="footer">
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">Countries</li>
                    <li className="fListItem">Regions</li>
                    <li className="fListItem">Cities</li>
                    <li className="fListItem">Districts</li>
                    <li className="fListItem">Airports</li>
                    <li className="fListItem">Hotels</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">Homes </li>
                    <li className="fListItem">Apartments </li>
                    <li className="fListItem">Resorts </li>
                    <li className="fListItem">Villas</li>
                    <li className="fListItem">Hostels</li>
                    <li className="fListItem">Guest houses</li>
                </ul>
                <ul className="fList li3 ">
                    <li className="fListItem">Unique places to stay </li>
                    <li className="fListItem">Reviews</li>
                    <li className="fListItem">Unpacked: Travel articles </li>
                    <li className="fListItem">Travel communities </li>
                    <li className="fListItem">Seasonal and holiday deals </li>
                </ul>
                <ul className="fList li1">
                    <li className="fListItem">Car rental </li>
                    <li className="fListItem">Flight Finder</li>
                    <li className="fListItem">Restaurant reservations </li>
                    <li className="fListItem">Travel Agents </li>
                </ul>
                <ul className="fList li2">
                    <li className="fListItem">Curtomer Service</li>
                    <li className="fListItem">Partner Help</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Sustainability</li>
                    <li className="fListItem">Press center</li>
                    <li className="fListItem">Safety Resource Center</li>
                    <li className="fListItem">Investor relations</li>
                    <li className="fListItem">Terms & conditions</li>
                </ul>
            </div>
            <div className="fText">Copyright © 2023 Rohit Booking. All rights reserved.</div>
            
        </div>
            </div>
        </>
    );
};

export default Footer;
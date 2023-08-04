import React, { useEffect } from 'react';
import "./Flite.css";
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DatePicker from 'react-datepicker';
import Feature from '../Components/Feature';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';





import { NavLink } from 'react-router-dom';

const Flite = () => {
    const [date, setDate] = useState(new Date());
    const [flight, setflight] = useState([]);
    const [record, setRecord] = useState([]);
    const y = new Date();
    const [val, setVal] = useState({
        from: "",
        to: "",
        departure: date,
    })


    const hi = (event) => {
        setVal((prev => ({ ...prev, [event.target.name]: event.target.value })))
        setVal((prev) => ({ ...prev, departure: date }))
    }

    const Submitti = (event) => {
        event.preventDefault();
        alert("done");


    }

    useEffect(() => {

        async function y() {
            const responce = await fetch('https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights');
            const flig = await responce.json();
            setflight(flig);
            setRecord(flig);
            console.log(flig);

        }

        y();


    }, [])





    return (

        <>
            <div className="flite-nav">

                <Navbar />







            </div>
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
                                

                            </div>

                        </div>
                    </div>



                </div>

            </div>

            <div className='content'>

                <h1 className='header-title'>Find your next Flight</h1>
                <p className='headerdesk'>The journey of a thousand miles begins with a single step. <br />
                    Lets travel with better experience</p>
            </div>


            <Feature />




            <h1 style={{
                margin: "5% 10%",
                width: "80%",
            }}>Trending cities</h1>

            <div className='filte-container'>
               
                <div className='card'>
                    <img src="https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=" />
                    <h1>New Delhi,India</h1>
                </div>
                <div className='card'>
                    <img src="https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=" />
                    <h1>Mumbai,India</h1>
                </div>

                <div className='card'>
                    <img src="data:image/jpeg;base64,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" />
                    <h1>Goa,India</h1>
                </div>
                <div className='card'>
                    <img src="data:image/jpeg;base64,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" />
                    <h1>Manli,India</h1>
                </div>




            </div>
            <h1 style={{
                margin: "5% 10%",
                width: "80%",
            }} > Book Your Flight</h1>

            <div className="Flight-search">

                <div className="flight-search-container">
                    <label htmlFor="from">From</label>
                    <input type="text" id="from" placeholder="from" name="from" onChange={hi} value={val.from} />

                </div>
                <div className="flight-search-container">
                    <label htmlFor="to">To</label>
                    <input type="text" id="to" placeholder="to" name="to" onChange={hi} value={val.to} />

                </div>

                <div className="flight-search-container">
                    <label htmlFor="departure">Departure</label>
                    <DatePicker selected={date} minDate={y}
                        onChange={(date) => setDate(date)}
                    />


                </div>


                <div className="flight-search-container">
                    <button className="flight-btn" onClick={Submitti}>Search</button>
                    {

                    }

                </div>

            </div>



            <div className="flight-book">
                <h1 style={{ margin: "2% 0%", width: "80%" }}>All flight shown here run daily</h1>
                <table>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Airline</th>
                        <th>Departure </th>

                        <th>Return </th>
                        <th>Via</th>
                        <th>Duration</th>
                        <th>Price</th>

                    </tr>

                    {record.map((ele) => {


                        return (
                            <>
                                <tr>

                                    <td> {ele.from}</td>
                                    <td >{ele.to}</td>

                                    <td>{ele.airlineName}</td>
                                    <td>{ele.departure.departureTime}</td>
                                    <td>{ele.return.returnTime}</td>
                                    <td>{ele.via}</td>
                                    <td>{ele.duration}</td>
                                    <td>{ele.price}</td>
                                    <button class="btn-book">Book Now</button>

                                </tr>

                                <div className="book-now">Book Now</div>



                            </>




                        )




                    }



                    )





                    }
                </table>


            </div>



            <Footer />






        </>
    )
}

export default Flite
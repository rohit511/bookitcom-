import React from 'react';
import "./Meal.css";
import Navbar from '../Components/Navbar';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer';
import Swal from "sweetalert2";


function Meal() {
    const orderBook = () => {
        Swal.fire({
            title: "Success",
            text: "Your Food Will Be Delivered Soon, Please Pay Money To Our Delivry Agent",
            icon: "success",
            confirmButtonText: "ORDER MORE",
        })
    }
    return (
        <>
            <Navbar />
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
                                <NavLink to="/meal" className='btn' style={{ textDecoration: 'none' }}>
                                    <img src="./meal.png" />
                                    <p style={{ textDecoration: 'none', color: 'white' }}>Meal</p>
                                </NavLink>

                            </div>

                        </div>





                    </div>
                </div>

            </div>







            <section style={{ marginBottom: "200px" }}>

                <div className='meal-header'>
                    <div className='mealHeading'>
                        <h1>Get <span>FreshFood </span>
                            in a Easy Way</h1>
                        <p className='meal-content'>Single most intimate expression of our mothers’ love is cooking and pampering their kids with home cooked delicious meals . No matter, what we eat, where we eat, we can never replicate that special flavour of ‘Maa ke haath ka khana’, made for us with that magical ingredient called love along with the familiar sentiment of, “beta thoda aur kha le!”
                        </p>
                    </div>
                    <div className='meal-image'>
                        <img src="main_img.png" />
                    </div>
                </div>





                <div className='menu-heading'>
                    <h1>Our <span>Menu</span></h1>
                </div>



                <div className='menu-cart'>

                    <div className='menu-content'>
                        <img src='buger.jpg' />
                        <p className='menu-item1'>Buger</p>
                        <p className='menu-text'>
                            A burger is a patty of ground  grilled allo and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.</p>

                        <p className='menu-price'><strong>Price:</strong> ₹70</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='cake.jpg' />
                        <p className='menu-item1'>Cake</p>
                        <p className='menu-text'>
                            A sweet food . together and baking the mixture in the oven. a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening.</p>

                        <p className='menu-price'><strong>Price:</strong> ₹170</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>

                    </div>
                    <div className='menu-content'>
                        <img src='pasta.jpg' />
                        <p className='menu-item1'>Pasta</p>
                        <p className='menu-text'>
                            An Italian food made from flour, eggs and water, formed into different shapes, cooked, and usually served with a sauce . Various pata available .Nowadays, most products sold as pasta </p>
                        <p className='menu-price'><strong>Price:</strong> ₹189</p>

                        <button className='menu-btn ' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='Hot_dog.jpg' />
                        <p className='menu-item1'>Hot Dog</p>
                        <p className='menu-text'>
                            Hot dogs are made from the emulsified meat trimmings of chicken, beef, or pork. This meat mixture is blended with other ingredients into a batter-like substance.</p>
                        <p className='menu-price'><strong>Price:</strong> ₹99</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='juse.jpg' />
                        <p className='menu-item1'>Juice</p>
                        <p className='menu-text'>
                            Apple juice is fairly self-explanatory: it's the juice pressed out of an apple. It's rarely flavored beyond its natural state, and it's mainly enjoyed cold, though it can be stored in or out .</p>
                        <p className='menu-price'><strong>Price:</strong> ₹70</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>

                    <div className='menu-content'>
                        <img src='pizza.jpg' />
                        <p className='menu-item1'>Pizza</p>
                        <p className='menu-text'>
                            pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese.</p>

                        <p className='menu-price'><strong>Price:</strong> ₹279</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='lasagna.webp' />
                        <p className='menu-item1'>Lasagna</p>
                        <p className='menu-text'>
                            The origins of the word lasagne or lasagna can be traced back to Ancient Greece. What we know as lasagne or lasagna is derived from the word “laganon”.</p>
                        <p className='menu-price'><strong>Price:</strong> ₹390</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='ice_cream.jpg' />
                        <p className='menu-item1'>Ice cream</p>
                        <p className='menu-text'>
                            Ice cream, frozen dairy food made from cream or butterfat, milk, sugar, and flavourings. Frozen custard and French-type ice creams also contain eggs. Hundreds of flavours have been devised. </p>
                        <p className='menu-price'><strong>Price:</strong> ₹129</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='gallary_1.jpg' />
                        <p className='menu-item1'>Sandwich</p>
                        <p className='menu-text'>
                            Ice cream, frozen dairy food made from cream or butterfat, milk, sugar, and flavourings. Frozen custard and French-type ice creams also contain eggs. Hundreds of flavours have been devised. </p>
                        <p className='menu-price'><strong>Price:</strong> ₹179</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='gallary_4.jpg' />
                        <p className='menu-item1'>Sweet cake</p>
                        <p className='menu-text'>
                            A sweet food . together and baking the mixture in the oven. a sweet baked food made from a dough or thick batter usually containing flour and sugar and often shortening.</p>                        <p className='menu-price'><strong>Price:</strong> ₹129</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='gallary_5.jpg' />
                        <p className='menu-item1'>Cheese Burst Pizza</p>
                        <p className='menu-text'>

                            Have you seen people drooling at the sight of cheese? If you are someone whose mouth starts watering literally at the mention of cheese, you have to try the cheese burst pizza. </p>
                        <p className='menu-price'><strong>Price:</strong> ₹349</p>
                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>
                    <div className='menu-content'>
                        <img src='gallary_3.jpg' />
                        <p className='menu-item1'>Cup Cake</p>
                        <p className='menu-text'>
                            Like larger cakes, frosting and other cake decorations, such as sprinkles, are  cupcakes. They are often sweet . Some specialized bakeries sell only cupcakes.</p>                        <p className='menu-price'><strong>Price:</strong> ₹79</p>

                        <button className='menu-btn' onClick={orderBook}>Order Now</button>
                    </div>



                </div>






                <div className='meal-gallary' style={{ marginTop: "200px", marginBottom: "10px" }}>
                    <h1>Our <span>Gallary</span></h1>
                    <div className='meal-gallary-image'>
                        <img src="gallary_1.jpg" />
                        <img src="gallary_2.jpg" />
                        <img src="gallary_3.jpg" />
                        <img src="gallary_4.jpg" />
                        <img src="gallary_5.jpg" />
                        <img src="gallary_6.jpg" />

                    </div>

                </div>

            </section>



            <Footer />
        </>
    )
}
export default Meal;